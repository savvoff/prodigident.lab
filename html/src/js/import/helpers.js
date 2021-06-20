import { isMobile } from "mobile-device-detect";
import "simplebar";

// Global helpers
export function deviceDetect(type) {
  switch (type.toLowerCase()) {
    case "mobile":
      return isMobile;
    default:
      break;
  }
}

export function blockScroll() {
  let scrollPosition = [
    self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
  ];
  let html = $("html"); // it would make more sense to apply this to body, but IE7 won't have that
  html.data("scroll-position", scrollPosition);
  html.data("previous-overflow", html.css("overflow"));
  html.css("overflow", "hidden");
  window.scrollTo(scrollPosition[0], scrollPosition[1]);;
}

export function unblockScroll() {
  let html = $("html");
  let scrollPosition = html.data("scroll-position");
  html.css("overflow", html.data("previous-overflow"));
  window.scrollTo(scrollPosition[0], scrollPosition[1])
}

window.deviceDetect = deviceDetect;
window.blockScroll = blockScroll;
window.unblockScroll = unblockScroll;

export function setFullHeight() {
  let vh = $(window).innerHeight() * 0.01;
  $("html").attr("style", `--vh: ${vh}px`);
}

export function toTop(el) {
  $(el).on("click", () => {
    $("html, body").animate({ scrollTop: 0 }, 1000);
 });
}

export function showScrollEl(el) {
  $(document).scrollTop() > $(window).height() ? $(el).addClass("is-show") : $(el).removeClass("is-show");
}

export function randomInt(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export function checkZoom() {
  const dpr = window.devicePixelRatio;
  const getZoomStr = (val) => val.toString().split(".").join("")
  let className = "";
  let classNamePrefix = "zoom-";
  switch (dpr) {
    case 1.25: 
      className = classNamePrefix + getZoomStr(dpr);
      break;
    case 1.5:
      className = classNamePrefix + getZoomStr(dpr);
    default:
      break;
  }
  $("html").addClass(className);
}

export function fillInput(ev) {
  makeActive();
  let el = $(ev.currentTarget);
  if (el.is("input[type='checkbox']")) {
    return ev.type === "change"
      ? el.closest(".form-group").toggleClass("is-filled")
      : false;
  } else if (el.is("input[type='radio']")) {
    return makeActive();
  }
  if (el.val() !== "" || ev.type === "focus") {
    el.closest(".form-group").addClass("is-filled");
  } else {
    el.closest(".form-group").removeClass("is-filled");
  }
  function makeActive() {
    $("input[type='radio']").each(function () {
      if ($(this).prop("checked")) {
        $(this).closest(".form-group").addClass("is-filled");
      } else {
        $(this).closest(".form-group").removeClass("is-filled");
      }
    });
  }
}

export function isCheckCondition(ev) {
  const groupId = $(ev.currentTarget).data("group");
  const collection = $(ev.currentTarget).closest(".form-row").find(`[data-group="${groupId}"]`);
  $.each(collection, (i, el) => {
    if (ev.currentTarget != el) $(el).prop('checked', false);
  });
}