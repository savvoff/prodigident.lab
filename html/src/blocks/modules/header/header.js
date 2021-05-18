import { deviceDetect, blockScroll, unblockScroll } from "../../../js/import/helpers";

$(".page-header__burger").on("click", ev => {
  $(ev.currentTarget).closest(".page-header").toggleClass("show-menu");
})

$(".burger").on("click", () => {
  $("body").css("overflow") === "hidden"
    ? unblockScroll()
    : blockScroll();
  $(".page-header").toggleClass("is-open");
});

function moveBorderSlide() {
  if (deviceDetect("mobile")) return;
  let $pos = $(this).position();
  $(".slide-border")
    .stop()
    .css({
      left: $pos.left,
      width: $(this).width()
    });
}

function moveBorderSlideToActive() {
  if (deviceDetect("mobile")) return;
  if ($(".page-header__menu .current-menu-item").length) {
    let $activeEl = $(".page-header__menu .current-menu-item");
    if ($activeEl.closest(".menu-item-has-children").length)
      $activeEl = $activeEl.closest(".menu-item-has-children");
    $(".slide-border")
      .stop()
      .css({
        left: $activeEl.first().position().left,
        width: $activeEl.width()
      });
  } else {
    let $defaultEl = $(".page-header__menu li");
    $(".slide-border")
      .stop()
      .css({
        left: $defaultEl.first().position().left,
        width: $defaultEl.width()
      });
  }
}

$(".page-header__menu li").on("mouseover", moveBorderSlide);
$(".page-header__menu li").on("mouseout", moveBorderSlideToActive);

$(window).on("load", moveBorderSlideToActive);