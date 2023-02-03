import App from "@/app/App";
import { log } from "aftc-modules/src/debug/log";
// - - - - - - - - - - - - -

// interfaces
// - - - - - - - - - - - - -

// types
// - - - - - - - - - - - - -

export class CommonController {

    // Var defs
    public vd: VisualDe;
    // - - - - - - - - - - - - -


    constructor() {
        this.vd = VisualDebug.getInstance();
    }
    // - - - - - - - - - - - - -

}