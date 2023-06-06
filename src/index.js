import "bootstrap";
import "jquery";
import "popper.js";
import "../src/css/styles.css";
import { createPage } from "./page/createPage";

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    createPage()
});

