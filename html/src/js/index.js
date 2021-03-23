import "./import/modules";
import {
  setFullHeight,
  fillInput,
} from "./import/helpers";

// Custom plugins
import "simplebar";
import Splide from '@splidejs/splide';
// Constants
const PATH = theme || "";

class App {
  constructor() {
    this.addEventListeners();
    $("#svg-sprites").load(`${PATH}img/sprites/sprite.svg`, (res) => res.data);
    setFullHeight();

    new Splide("[data-splide]").mount();

    $(window).on("load", () => {
      console.log("App init\n");
    });
    $(window).on("resize", () => {
      setFullHeight();
    });
  }
  addEventListeners() {
    $(".form__input").on("blur input", fillInput);
  }
}

new App();
