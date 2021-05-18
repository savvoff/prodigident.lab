import "./import/modules";
import {
  setFullHeight,
  fillInput,
  toTop,
  showScrollEl
} from "./import/helpers";

// Custom plugins
import "simplebar";
import Splide from '@splidejs/splide';
// Constants
const PATH = theme || "";

class App {
  constructor() {
    this.addEventListeners();
    $("#svg-sprites").load(`${PATH}/dist/img/sprites/sprite.svg`, (res) => res.data);
    setFullHeight();

    $.each($("[data-splide]"), (i, el) => {
      window[`slider${i}`] = new Splide(el).mount();
    });

    $(window).on("load", () => {
      toTop("[class*=to-top]");
      console.log("App init\n");
    });
    $(window).on("scroll", () => {
      showScrollEl(".btn-to-top");
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
