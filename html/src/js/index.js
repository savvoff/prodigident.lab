import "./import/modules";
import {
  setFullHeight,
  fillInput,
  toTop,
  isCheckCondition,
  showScrollEl
} from "./import/helpers";

// Custom plugins
import "simplebar";
import Splide from "@splidejs/splide";
import { Luminous } from "luminous-lightbox";
import { check } from "yargs";
// Constants
const PATH = theme || "";

class App {
  constructor() {
    this.addEventListeners();
    $("#svg-sprites").load(`${PATH}/dist/img/sprites/sprite.svg`, (res) => res.data);
    setFullHeight();

    $("[data-zoomable]").each(function() {
      new Luminous($(this).get(0), { sourceAttribute: "data-href" });
    })

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
    $("[data-group]").on("change", isCheckCondition);
  }
}

new App();
