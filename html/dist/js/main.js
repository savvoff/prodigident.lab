/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./html/src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./html/src/blocks/modules/header/header.js":
/*!**************************************************!*\
  !*** ./html/src/blocks/modules/header/header.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _js_import_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../js/import/helpers */ "./html/src/js/import/helpers.js");

$(".page-header__burger").on("click", function (ev) {
  $(ev.currentTarget).closest(".page-header").toggleClass("show-menu");
});
$(".burger").on("click", function () {
  $("body").css("overflow") === "hidden" ? Object(_js_import_helpers__WEBPACK_IMPORTED_MODULE_0__["unblockScroll"])() : Object(_js_import_helpers__WEBPACK_IMPORTED_MODULE_0__["blockScroll"])();
  $(".page-header").toggleClass("is-open");
});

function moveBorderSlide() {
  if (Object(_js_import_helpers__WEBPACK_IMPORTED_MODULE_0__["deviceDetect"])("mobile")) return;
  var $pos = $(this).position();
  $(".slide-border").stop().css({
    left: $pos.left,
    width: $(this).width()
  });
}

function moveBorderSlideToActive() {
  if (Object(_js_import_helpers__WEBPACK_IMPORTED_MODULE_0__["deviceDetect"])("mobile")) return;

  if ($(".page-header__menu .current-menu-item").length) {
    var $activeEl = $(".page-header__menu .current-menu-item");
    if ($activeEl.closest(".menu-item-has-children").length) $activeEl = $activeEl.closest(".menu-item-has-children");
    $(".slide-border").stop().css({
      left: $activeEl.first().position().left,
      width: $activeEl.width()
    });
  } else $(".slide-border").remove();
}

$(".page-header__menu li").on("mouseover", moveBorderSlide);
$(".page-header__menu li").on("mouseout", moveBorderSlideToActive);
$(window).on("load", moveBorderSlideToActive);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./html/src/js/import/helpers.js":
/*!***************************************!*\
  !*** ./html/src/js/import/helpers.js ***!
  \***************************************/
/*! exports provided: deviceDetect, blockScroll, unblockScroll, setFullHeight, randomInt, fillInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviceDetect", function() { return deviceDetect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockScroll", function() { return blockScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unblockScroll", function() { return unblockScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFullHeight", function() { return setFullHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomInt", function() { return randomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillInput", function() { return fillInput; });
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobile-device-detect */ "./node_modules/mobile-device-detect/dist/index.js");
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobile_device_detect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var simplebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! simplebar */ "./node_modules/simplebar/dist/simplebar.esm.js");

 // Global helpers

function deviceDetect(type) {
  switch (type.toLowerCase()) {
    case "mobile":
      return mobile_device_detect__WEBPACK_IMPORTED_MODULE_0__["isMobile"];

    default:
      break;
  }
}
function blockScroll() {
  var scrollPosition = [self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft, self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop];
  var html = $("html"); // it would make more sense to apply this to body, but IE7 won't have that

  html.data("scroll-position", scrollPosition);
  html.data("previous-overflow", html.css("overflow"));
  html.css("overflow", "hidden");
  window.scrollTo(scrollPosition[0], scrollPosition[1]);
  ;
}
function unblockScroll() {
  var html = $("html");
  var scrollPosition = html.data("scroll-position");
  html.css("overflow", html.data("previous-overflow"));
  window.scrollTo(scrollPosition[0], scrollPosition[1]);
}
window.deviceDetect = deviceDetect;
window.blockScroll = blockScroll;
window.unblockScroll = unblockScroll;
function setFullHeight() {
  var vh = $(window).innerHeight() * 0.01;
  $("html").attr("style", "--vh: ".concat(vh, "px"));
}
function randomInt(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
function fillInput(ev) {
  makeActive();
  var el = $(ev.currentTarget);

  if (el.is("input[type='checkbox']")) {
    return ev.type === "change" ? el.closest(".form-group").toggleClass("is-filled") : false;
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./html/src/js/import/modules.js":
/*!***************************************!*\
  !*** ./html/src/js/import/modules.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./html/src/blocks/modules/header/header.js");


/***/ }),

/***/ "./html/src/js/index.js":
/*!******************************!*\
  !*** ./html/src/js/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./html/src/js/import/modules.js");
/* harmony import */ var _import_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/helpers */ "./html/src/js/import/helpers.js");
/* harmony import */ var simplebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simplebar */ "./node_modules/simplebar/dist/simplebar.esm.js");
/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @splidejs/splide */ "./node_modules/@splidejs/splide/dist/js/splide.esm.js");
/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_splidejs_splide__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // Custom plugins


 // Constants

var PATH = theme || "";

var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    this.addEventListeners();
    $("#svg-sprites").load("".concat(PATH, "/dist/img/sprites/sprite.svg"), function (res) {
      return res.data;
    });
    Object(_import_helpers__WEBPACK_IMPORTED_MODULE_1__["setFullHeight"])();
    new _splidejs_splide__WEBPACK_IMPORTED_MODULE_3___default.a("[data-splide]").mount();
    $(window).on("load", function () {
      console.log("App init\n");
    });
    $(window).on("resize", function () {
      Object(_import_helpers__WEBPACK_IMPORTED_MODULE_1__["setFullHeight"])();
    });
  }

  _createClass(App, [{
    key: "addEventListeners",
    value: function addEventListeners() {
      $(".form__input").on("blur input", _import_helpers__WEBPACK_IMPORTED_MODULE_1__["fillInput"]);
    }
  }]);

  return App;
}();

new App();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

/******/ });
//# sourceMappingURL=main.js.map