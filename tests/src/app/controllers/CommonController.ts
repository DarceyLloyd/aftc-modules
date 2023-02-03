import App from "@/app/App";
import { iConfig } from "@/app/interfaces/iConfig";
import { VisualDebug } from "@/app/utils/VisualDebug";
import { log } from "aftc-modules/src/debug/log";
import { Camera, Mesh, PerspectiveCamera, Scene } from "three";
// - - - - - - - - - - - - -

// interfaces
// - - - - - - - - - - - - -

// types
// - - - - - - - - - - - - -

export class CommonController {

    // Var defs
    public app: App;
    public config: iConfig;
    public vd: VisualDebug;
    public canvas: HTMLCanvasElement;
    public camera: PerspectiveCamera;
    public scene: Scene;
    public lookAtMesh: Mesh;
    // - - - - - - - - - - - - -


    constructor() {
        this.app = App.getInstance();
        this.config = this.app.config;
        this.vd = VisualDebug.getInstance();
        this.canvas = this.app.canvas;
        this.camera = this.app.camera;
        this.scene = this.app.scene;
        this.lookAtMesh = this.app.lookAtMesh;
    }
    // - - - - - - - - - - - - -

}