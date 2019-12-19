/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/chart-area.js":
/*!***************************!*\
  !*** ./src/chart-area.js ***!
  \***************************/
/*! exports provided: width, height, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"width\", function() { return width; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"height\", function() { return height; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"g\", function() { return g; });\nconst margin = { left: 80, right: 20, top: 50, bottom: 100 };\n\nconst width = 800 - margin.left - margin.right;\nconst height = 500 - margin.top - margin.bottom;\nlet time = 0;\n\nconst g = d3.select(\"#chart-area\")\n  .append(\"svg\")\n  .attr(\"width\", width + margin.left + margin.right)\n  .attr(\"height\", height + margin.top + margin.bottom)\n  .append(\"g\")\n  .attr(\"transform\", \"translate(\" + margin.left\n    + \", \" + margin.top + \")\");\n\n//# sourceURL=webpack:///./src/chart-area.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _visual_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visual.js */ \"./src/visual.js\");\nconsole.log(\"webpack is working\")\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  Object(_visual_js__WEBPACK_IMPORTED_MODULE_0__[\"Visual\"])();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/labels+axes.js":
/*!****************************!*\
  !*** ./src/labels+axes.js ***!
  \****************************/
/*! exports provided: timeLabel, xAxisCall, yAxisCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timeLabel\", function() { return timeLabel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"xAxisCall\", function() { return xAxisCall; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"yAxisCall\", function() { return yAxisCall; });\n/* harmony import */ var _chart_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-area.js */ \"./src/chart-area.js\");\n/* harmony import */ var _scales_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scales.js */ \"./src/scales.js\");\n\n\n\n// ============================= Labels ===================================\n\nconst xLabel = _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].append(\"text\")\n  .attr(\"y\", _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"height\"] + 50)\n  .attr(\"x\", _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"width\"] / 2)\n  .attr(\"font-size\", \"20px\")\n  .attr(\"text-anchor\", \"middle\")\n  .text(\"GDP Per Capita ($)\");\nconst yLabel = _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].append(\"text\")\n  .attr(\"transform\", \"rotate(-90)\")\n  .attr(\"y\", -40)\n  .attr(\"x\", -170)\n  .attr(\"font-size\", \"20px\")\n  .attr(\"text-anchor\", \"middle\")\n  .text(\"Life Expectancy (Years)\")\nconst timeLabel = _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].append(\"text\")\n  .attr(\"y\", _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"height\"] - 10)\n  .attr(\"x\", _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"width\"] - 40)\n  .attr(\"font-size\", \"40px\")\n  .attr(\"opacity\", \"0.4\")\n  .attr(\"text-anchor\", \"middle\")\n  .text(\"1800\");\n\n\n// ============================= Axes ===================================\n\n// X Axis\nconst xAxisCall = d3.axisBottom(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"x\"])\n  .tickValues([400, 4000, 40000])\n  .tickFormat(d3.format(\"$\"));\n_chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].append(\"g\")\n  .attr(\"class\", \"x axis\")\n  .attr(\"transform\", \"translate(0, \" + _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"height\"] + \")\")\n  .call(xAxisCall);\n\n// Y Axis\nconst yAxisCall = d3.axisLeft(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"y\"])\n  .ticks(10)\n  .tickFormat(d => { return + d; });\n_chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].append(\"g\")\n  .attr(\"class\", \"y-axis\")\n  .call(yAxisCall);\n\n\n//# sourceURL=webpack:///./src/labels+axes.js?");

/***/ }),

/***/ "./src/scales.js":
/*!***********************!*\
  !*** ./src/scales.js ***!
  \***********************/
/*! exports provided: x, y, area, continentColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"x\", function() { return x; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"y\", function() { return y; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"area\", function() { return area; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"continentColor\", function() { return continentColor; });\n/* harmony import */ var _chart_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-area.js */ \"./src/chart-area.js\");\n\n\n// X Scale\nconst x = d3.scaleLog()\n  .domain([142, 150000])\n  .range([0, _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"width\"]])\n  .base(10);\n\n// Y Scale\nconst y = d3.scaleLinear()\n  .range([_chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"height\"], 0])\n  .domain([0, 90]);\n\n// Area Scale\nconst area = d3.scaleLinear()\n  .range([25 * Math.PI, 1500 * Math.PI])\n  .domain([2000, 1400000000]);\n// scale by population\n\n// Color Scale\nconst continentColor = d3.scaleOrdinal().range(d3.schemePastel1);\n\n//# sourceURL=webpack:///./src/scales.js?");

/***/ }),

/***/ "./src/update.js":
/*!***********************!*\
  !*** ./src/update.js ***!
  \***********************/
/*! exports provided: update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony import */ var _chart_area_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-area.js */ \"./src/chart-area.js\");\n/* harmony import */ var _scales_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scales.js */ \"./src/scales.js\");\n/* harmony import */ var _labels_axes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./labels+axes.js */ \"./src/labels+axes.js\");\n\n\n\n\nconst update = (data, time) => {\n  const t = d3.transition().duration(100);\n\n  const circles = _chart_area_js__WEBPACK_IMPORTED_MODULE_0__[\"g\"].selectAll(\"circle\")\n    .data(data, d => {\n      return d.country;\n    });\n\n  circles.exit().remove();\n\n  circles.enter()\n    .append(\"circle\")\n      .merge(circles)\n      .transition(t)\n        .attr(\"fill\", function (d) { return Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"continentColor\"])(d.continent); })\n        .attr(\"cy\", d => { return Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"y\"])(d.life_exp) })\n        .attr(\"cx\", d => { return Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"x\"])(d.income) })\n        .attr(\"r\", d => {\n          return Math.sqrt(Object(_scales_js__WEBPACK_IMPORTED_MODULE_1__[\"area\"])(d.population) / Math.PI);\n        });\n\n  _labels_axes_js__WEBPACK_IMPORTED_MODULE_2__[\"timeLabel\"].text(+(time + 1800))\n};\n\n//# sourceURL=webpack:///./src/update.js?");

/***/ }),

/***/ "./src/visual.js":
/*!***********************!*\
  !*** ./src/visual.js ***!
  \***********************/
/*! exports provided: Visual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Visual\", function() { return Visual; });\n/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update.js */ \"./src/update.js\");\n\n\n// ============================= Data ===================================\n\nconst Visual = () => {\n  console.log(\"hello\")\n  d3.json(\"data/data.json\").then((data) => {\n    // console.log(data);\n\n    // changes data from string to integer\n    data.forEach(d => {\n      d.countries.forEach(c => {\n        c.income = +c.income;\n      });\n      d.year = +d.year;\n    });\n\n    // formats data to get rid of null values\n    const formattedData = data.map(year => {\n      return year[\"countries\"].filter(country => {\n        let dataExists = (country.income && country.life_exp);\n        return dataExists;\n      })\n    });\n\n    let i = 0\n\n    d3.interval(() => {\n      // At the end of our data, loop back\n      i = (i < 214) ? i + 1 : 0;\n      Object(_update_js__WEBPACK_IMPORTED_MODULE_0__[\"update\"])(formattedData[i], i);\n    }, 100);\n    \n    Object(_update_js__WEBPACK_IMPORTED_MODULE_0__[\"update\"])(formattedData[0], 0);\n \n  });\n};\n\n//# sourceURL=webpack:///./src/visual.js?");

/***/ })

/******/ });