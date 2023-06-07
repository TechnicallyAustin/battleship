import "bootstrap";
import "jquery";
import "popper.js";
import "../src/css/styles.css";
import { createPage } from "./page/createPage";
import { gameBoardOperations } from "./game/gameboard";


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    createPage()
    gameBoardOperations.boardLabels()

});

