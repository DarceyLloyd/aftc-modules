import { log } from "aftc-modules/src/debug/log";
import { warn } from "aftc-modules/src/debug/warn";
import { sleep } from "aftc-modules/src/misc/sleep";


// Access to window scope
interface MyNamespacedWindow extends Window {
  MyNamespace: object;
  apiPath: string,
  skipvideo: boolean
}
declare var window: MyNamespacedWindow;
// - - - - - - - - - - - - - - - - - - - - - - - -



export default class App  {
  private static instance: App; // Singleton

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
   
    log("App()")
    warn("App()")

  }
  // - - - - - - - - - - - - - - - - - - - - - - - -




}
