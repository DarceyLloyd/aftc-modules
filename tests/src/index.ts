import { log } from "aftc-modules/src/debug/log";
import { onReady } from "aftc-modules/src/events/onReady";
import App from "./app/App";
import "./styles/index.scss";

onReady(() => {
  App.getInstance();
})
