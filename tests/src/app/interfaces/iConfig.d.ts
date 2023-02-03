import { eHotspotType } from "../enums/eHotspotType";
import { ePage } from "../enums/ePage";
export declare enum eItemType {
    IMAGE = "image",
    VIDEO = "video"
}
export interface iVec3 {
    x: number;
    y: number;
    z: number;
}
export interface iLang {
    en: string;
    fr: string;
}
export interface iConfig {
    links: {
        en: string;
        fr: string;
    };
    preloader: {
        en: {
            title: string;
            body: string;
            loading: string;
            btn: string;
        };
        fr: {
            title: string;
            body: string;
            loading: string;
            btn: string;
        };
        files: string[];
    };
    camera: {
        fov: number;
        near: number;
        far: number;
        lookAtTargetMesh: boolean;
        orbitControls: {
            enabled: boolean;
            enablePan: boolean;
        };
        mouseTracking: {
            enabled: boolean;
            moveAmountX: number;
            moveAmountY: number;
            moveTimeX: number;
            moveTimeY: number;
        };
        desktop: {
            fov: number;
            x: number;
            y: number;
            z: number;
        };
        mobile: {
            fov: number;
            x: number;
            y: number;
            z: number;
        };
    };
    lookAtMesh: {
        size: number;
        x: number;
        y: number;
        z: number;
        color: string;
        visible: boolean;
    };
    helpers: {
        hotspot_planes: boolean;
        keyControls: boolean;
    };
    top_nav: {
        en: iTopNavItem[];
        fr: iTopNavItem[];
    };
    portrait_warning: {
        en: string;
        fr: string;
    };
    pages: {
        history: iPageDef;
        excellence: iPageDef;
        community: iPageDef;
    };
    popups: iPopup[];
}
export interface iTopNavItem {
    label: string;
    section: string;
}
export interface iPageDef {
    background: string;
    env: string;
    ambientLight: {
        enabled: boolean;
        color: string;
        intensity: number;
    };
    skySphere: string;
    camera: {
        desktop: iVec3;
        mobile: iVec3;
    };
    lookAtMesh: {
        desktop: iVec3;
        mobile: iVec3;
    };
    model: {
        src: string;
        desktop: iVec3;
        mobile: iVec3;
        rotation: number;
    };
    hotspots: iHotspot[];
}
export interface iPopup {
    id: number;
    title: iLang;
    message: iLang;
    items: iGalleryItem[];
}
export interface iGalleryItem {
    type: eItemType;
    thumbnail: string;
    image: string;
    video: string;
    thumbnail_title: iLang;
    thumbnail_body_copy: iLang;
    gallery_title: iLang;
    gallery_sub_title: iLang;
    title: iLang;
    sub_title: iLang;
}
export interface iHotspot {
    type: eHotspotType;
    navTo: ePage;
    popup_id: number;
    label: iLang;
    position: {
        desktop: iVec3;
        mobile: iVec3;
    };
    moveTarget: {
        camera: {
            desktop: iVec3;
            mobile: iVec3;
        };
        lookAtMesh: {
            desktop: iVec3;
            mobile: iVec3;
        };
    };
}
