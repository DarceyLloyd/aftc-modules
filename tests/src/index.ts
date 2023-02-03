import { log } from "aftc-modules/src/debug/log";
import { onReady } from "aftc-modules/src/events/onReady";
import { Color } from "three";
import App from "./app/App";
// import { getUrlKeyValue, hexToColor } from "./app/utils/utils";
import "./styles/index.scss";

onReady(() => {
  App.getInstance();


  // let c:Color = hexToColor("#FFCC00");

  // warn
})
