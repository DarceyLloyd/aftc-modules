import { log } from "aftc-modules/src/debug/log";
import { warn } from "aftc-modules/src/debug/warn";
import { sleep } from "aftc-modules/src/misc/sleep";
import { World } from "./controllers/worlds/World";
import { doesUrlKeyExist, getJson, getUrlKeyValue, isTouchDevice } from "./utils/utils";
import { PortraitWarning } from "./controllers/PortraitWarning";
import { Page } from "./controllers/worlds/Page";
import { ePage } from "./enums/ePage";
import { eLanguage } from "./enums/eLanguage";
import { TopNav } from "./controllers/TopNav";
import { iGalleryItem, iHotspot, iPopup } from "./interfaces/iConfig";
import gsap from "gsap";
import { Vector3 } from "three";
import { tweenCamAndTarget } from "./utils/tweenCamAndTarget";
import { Preloader } from "./controllers/Preloader";
import { PopupMenu } from "./controllers/PopupMenu";
import { VideoPlayer } from "./controllers/VideoPlayer";
import { Gallery } from "./controllers/Gallery";
import { LanguageChanger } from "./controllers/LanguageChanger";

// Access to window scope
interface MyNamespacedWindow extends Window {
  MyNamespace: object;
  apiPath: string,
  skipvideo: boolean
}
declare var window: MyNamespacedWindow;
// - - - - - - - - - - - - - - - - - - - - - - - -



export default class App extends World {
  private static instance: App; // Singleton

  public languageChanger!: LanguageChanger;
  public preloader!: Preloader;
  public topNav!: TopNav;
  public popupMenu!: PopupMenu;
  public videoPlayer!: VideoPlayer;
  public gallery!: Gallery;

  public lang: eLanguage = eLanguage.EN;

  public activePage!: Page;
  public pageHistory!: Page;
  public pageExcellence!: Page;
  public pageCommunity!: Page;

  public navigating: boolean = false;

  public domBtnPreloaderEnter: HTMLDivElement;
  // - - - - - - - - - - - - - - - - - - - - - - - -


  // Singleton
  public static getInstance(): App {
    if (!App.instance) {
      App.instance = new App();
    }
    return App.instance;
  }
  // - - - - - - - - - - - - - - - - - - - - - - - -


  private constructor() {
    super();


    // Set lang
    if (doesUrlKeyExist("fr")) {
      this.lang = eLanguage.FR;
    }

    this.domBtnPreloaderEnter = document.querySelector("#preloader .btn_enter") as HTMLDivElement;


    // Instantiations
    // this.preloader = Preloader.getInstance();

    this.init();
  }
  // - - - - - - - - - - - - - - - - - - - - - - - -




  public async init() {

    // # # # # # # # # # # # # # # # # # # # # # # # #
    // WARNING: Order is important
    // # # # # # # # # # # # # # # # # # # # # # # # #

    // warn("Using apiPath: " + this.apiPath);
    this.config = await getJson("./config.json");

    this.languageChanger = new LanguageChanger();
    this.topNav = new TopNav();
    this.popupMenu = new PopupMenu();
    this.videoPlayer = new VideoPlayer();
    this.gallery = new Gallery();

    // Setup world
    this.initWorld();



    // Portrait warning screen
    new PortraitWarning();

    // Setup pages
    this.pageHistory = new Page(ePage.HISTORY);
    this.pageExcellence = new Page(ePage.EXCELLENCE);
    this.pageCommunity = new Page(ePage.COMMUNITY);


    // Preloader
    this.preloader = new Preloader();

    await this.pageHistory.init();
    this.preloader.setLoaded(33);
    await this.pageExcellence.init();
    this.preloader.setLoaded(66);;
    await this.pageCommunity.init();
    this.preloader.setLoaded(100);

    // await sleep(4000);
    // log("DONE");

    // Prelodaer button enter language and click event
    if (this.lang === eLanguage.EN) {
      this.domBtnPreloaderEnter.innerHTML = this.config.preloader.en.btn;
    } else {

    }


    // Preloader enter button
    if (this.lang === eLanguage.EN) {
      this.domBtnPreloaderEnter.innerHTML = this.config.preloader.en.btn;
    } else {
      this.domBtnPreloaderEnter.innerHTML = this.config.preloader.fr.btn;
    }

    let enterClicked = false;
    this.domBtnPreloaderEnter.addEventListener("click", (e) => {
      if (enterClicked) { return; }
      enterClicked = true;
      // this.domBtnPreloaderEnter.style.display = "none";
      this.startTour();
    })
    this.domBtnPreloaderEnter.style.display = "flex";

    if (doesUrlKeyExist("autoEnter")) {
      enterClicked = true;
      this.startTour();
    }

  }
  // - - - - - - - - - - - - - - - - - - - - - - - -


  async startTour() {

    await this.preloader.hide();

    // Show first page
    // await sleep(1000);

    // Set selected top nav item
    if (doesUrlKeyExist("page")) {
      if (getUrlKeyValue("page") == "history") {
        this.topNav.setSelected(ePage.HISTORY);
        await this.navTo(ePage.HISTORY);
      } else if (getUrlKeyValue("page") == "excellence") {
        this.topNav.setSelected(ePage.EXCELLENCE);
        await this.navTo(ePage.EXCELLENCE);
      } else if (getUrlKeyValue("page") == "community") {
        this.topNav.setSelected(ePage.COMMUNITY);
        await this.navTo(ePage.COMMUNITY);
      } else {
        this.topNav.setSelected(ePage.HISTORY);
        await this.navTo(ePage.HISTORY);
      }
    } else {
      this.topNav.setSelected(ePage.HISTORY);
      await this.navTo(ePage.HISTORY);
    }



    // Auto show popup (DEV ONLY)
    // this.showPopupById(this.config.pages.history.hotspots[0]);


    // this.activePage.debugHotspot();
  }
  // - - - - - - - - - - - - - - - - - - - - - - - -






  async navTo(page: ePage, clearConsole: boolean = true) {
    if (this.navigating) { warn("navTo(): PREVENTED - ALREADY NAVIGATING!"); return; }
    this.navigating = true;

    log(`App.navTo(page:ePage:${page})`);


    // Disable camera hover
    this.cameraHoverHandler.disable();

    // hide things 1st
    if (this.activePage) {
      // Make sure list menu is hidden
      this.popupMenu.hide(false);

      // make sure any video players s hidden
      this.videoPlayer.hide(false);

      // make sure any galleries s hidden
      this.gallery.hide(false);

      // hide active page
      await this.activePage.hide();
    }

    // await sleep(3000)
    // Top nav selected may not get set, so make sure
    this.topNav.setSelected(page);

    // Show target page
    switch (page) {
      case ePage.HISTORY:
        this.activePage = this.pageHistory;
        break;
      case ePage.EXCELLENCE:
        this.activePage = this.pageExcellence;
        break;
      case ePage.COMMUNITY:
        this.activePage = this.pageCommunity;
        break;
    }

    await this.activePage.show();

    this.cameraHoverHandler.enable();

    this.navigating = false;
  }
  // - - - - - - - - - - - - - - - - - - - - - - - -




  async showPopupById(hotspotDef: iHotspot) {
    log(`App.showPopupById(hotspotDef:iHotspot): popupId = ${hotspotDef.popup_id}`);

    const popupId = hotspotDef.popup_id;
    // warn(hotspotDef);

    // Build popup and gallery early or user will see content update
    let popupDef: iPopup | null = this.getPopupById(popupId);
    if (!popupDef) {
      console.error("ERROR UNABLE TO FIND HOTSPOT MENU WITH ID: " + popupId);
    } else {
      // PopupMenu
      this.popupMenu.build(popupDef);
      this.popupMenu.show();

      // Build gallery
      this.gallery.build(popupDef);
    }



    // Disable camera hover
    this.cameraHoverHandler.disable();
    this.activePage.hideHotspots();

    // Move camera & lookat
    warn("CameraTo: ", hotspotDef.moveTarget.camera.mobile)
    warn("LookAt: ", hotspotDef.moveTarget.lookAtMesh.mobile)

    if (!isTouchDevice()) {
      this.cameraHoverHandler.originX = hotspotDef.moveTarget.camera.desktop.x;
      this.cameraHoverHandler.originY = hotspotDef.moveTarget.camera.desktop.y;

      await tweenCamAndTarget(
        this.camera,
        this.lookAtMesh,
        hotspotDef.moveTarget.camera.desktop as Vector3,
        hotspotDef.moveTarget.lookAtMesh.desktop as Vector3,
        0.5,
        2,
        0,
        2
      );
    } else {
      this.cameraHoverHandler.originX = hotspotDef.moveTarget.camera.mobile.x;
      this.cameraHoverHandler.originY = hotspotDef.moveTarget.camera.mobile.y;

      await tweenCamAndTarget(
        this.camera,
        this.lookAtMesh,
        hotspotDef.moveTarget.camera.mobile as Vector3,
        hotspotDef.moveTarget.lookAtMesh.mobile as Vector3,
        0.5,
        2,
        0,
        2
      );
    }

    // WARNING: FOR SOME REASON IT WONT PIKCUP CAMERAS TWEEN X NAD Y after tween?
    // NOW DONE MANUALLY IN IF(){} ABOVE
    // this.cameraHoverHandler.updateOrigins();
    
    this.cameraHoverHandler.enable();
  }
  // - - - - - - - - - - - - - - - - - - - - - - - -


  async returnToStartPosition(tween: boolean = true) {
    log(`App.returnToStartPosition(tween:${tween})`);
    // warn(this.activePage.pageDef);

    this.activePage.returnToStartPosition(tween);

  }
  // - - - - - - - - - - - - - - - - - - - - - - - -



  getPopupById(id: number): iPopup | null {
    // log(`App.getPopupById(id:number)`);

    for (let i = 0; i <= this.config.popups.length - 1; i++) {
      // warn(this.config.popupMenus[i].id)
      if (this.config.popups[i].id === id) {
        return this.config.popups[i] as iPopup
      }
    }

    return null;

  }
  // - - - - - - - - - - - - - - - - - - - - - - - -


  // async showGallery(galleryItems: iGalleryItem[]) {
  //   // log(`App.showGallery(galleryItems:iGalleryItem[])`);
  //   this.gallery.show(galleryItems);
  // }
  // // - - - - - - - - - - - - - - - - - - - - - - - -


  // async hideGallery() {
  //   // log(`App.hideGallery()`);
  //   this.gallery.hide();
  // }
  // // - - - - - - - - - - - - - - - - - - - - - - - -





  // async showVideo(url: string) {
  //   log(`App.showVideo(url:{$url})`);

  //   await this.videoPlayer.show(url);
  // }
  // // - - - - - - - - - - - - - - - - - - - - - - - -


  // async hideVideo() {
  //   log(`App.hideVideo()`);

  //   await this.videoPlayer.hide();
  // }
  // // - - - - - - - - - - - - - - - - - - - - - - - -




}
