// Polyfill IE11
import "@babel/polyfill";

// Import styles
import "./styles/global.scss";

import React from "react";
import { render } from "react-dom";
import ReactGA from "react-ga";
import Root from "./scripts/views/Root";
import initSmoothScroll from "./scripts/infrastructure/smoothScroll";

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID, {
  debug: process.env.NODE_ENV === "development"
});

render(<Root />, document.getElementById("page"));

initSmoothScroll();
