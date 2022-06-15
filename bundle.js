/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n  body{\\r\\n    background-color: #191D1E;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    color: darkorange;\\r\\n    padding-top: 40px;\\r\\n    width: 100%;\\r\\n    max-width: 900px;\\r\\n    margin: auto;\\r\\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\\r\\n  }\\r\\n\\r\\n  #content{\\r\\n    text-align: center;\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  #content > div:nth-child(1) {\\r\\n    \\r\\n    border: 1px solid darkorange;\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  .logo{\\r\\n    width: 100%;\\r\\n    height: auto;\\r\\n  }\\r\\n\\r\\n  .menu{\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 1fr 1fr;\\r\\n    width: 100%;\\r\\n    margin : 0px;\\r\\n  }\\r\\n\\r\\n  .menuButton{\\r\\n    background-color: darkorange;\\r\\n    width: 100%;\\r\\n    padding: 15px 20px;\\r\\n  }\\r\\n\\r\\n  .menuButton:hover{\\r\\n    color: darkorange;\\r\\n    background-color: white;\\r\\n    width: 100%;\\r\\n    padding: 15px 20px;\\r\\n  }\\r\\n\\r\\n  .menuGrid{\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));\\r\\n    grid-template-rows: auto;\\r\\n    gap: 30px;\\r\\n    max-width: 900px;\\r\\n    padding: 30px;\\r\\n  }\\r\\n\\r\\n  .card{\\r\\n    min-width: 200px;\\r\\n  }\\r\\n\\r\\n  .menuImg{\\r\\n    object-fit: cover;\\r\\n    max-width: 200px;\\r\\n    transition: transform .5s; \\r\\n  }\\r\\n\\r\\n  .menuImg:hover{\\r\\n    transform: scale(1.1);\\r\\n  }\\r\\n\\r\\n  .mapouter{\\r\\n    margin: auto;\\r\\n    padding: 20px;\\r\\n  }\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactPage\": () => (/* binding */ contactPage)\n/* harmony export */ });\n\r\nconst contactPage = () => {\r\n    const element = document.createElement('div');\r\n    //element.innerHTML = \"Contact Page\";\r\n    const header = document.createElement('h2');\r\n    header.innerHTML = \"Contact us\"\r\n    element.appendChild(header);\r\n\r\n    const text = document.createElement('p');\r\n    text.innerText = \"Find us at: 96 Oxford Terrace, Christchurch Central. 8011 Christchurch, New Zealand\";\r\n    element.appendChild(text);\r\n\r\n    const map = document.createElement('div');\r\n    map.classList.add('mapouter');\r\n    map.innerHTML = '<div class=\"gmap_canvas\"><iframe width=\"600\" height=\"500\" id=\"gmap_canvas\" src=\"https://maps.google.com/maps?q=96%20Oxford%20Street%20Christchurch&t=&z=17&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href=\"https://www.embedgooglemap.net\">embedgooglemap.net</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div>';\r\n    element.appendChild(map);\r\n\r\n    return element;\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-restaurant/./src/contactPage.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.png */ \"./src/logo.png\");\n\r\n\r\nconst homePage = () => {\r\n    const element = document.createElement('div');\r\n    \r\n    const img = document.createElement('img');\r\n    img.classList.add('logo');\r\n    img.src = _logo_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    element.appendChild(img);\r\n\r\n    const heading = document.createElement('h1');\r\n    heading.innerHTML = \"Seoul Tiger : Seoul food for your soul\";\r\n    element.appendChild(heading);\r\n\r\n    const blurb = document.createElement('p');\r\n    blurb.innerHTML = \"We start to serve our Seoul Bowl from today. It has steamed rice, scrambled eggs, frill lettuce, mesclun, carrort, red onion and Korean BBQ with our secret sauces 💛   This is more like Korean authentic flavour as Bibimbab. Come and grab your bowl today! 😍\";\r\n    element.appendChild(blurb);\r\n   // Add the image to our existing div.\r\n   //const myIcon = new Image();\r\n   //myIcon.src = Logo;\r\n \r\n   //element.appendChild(myIcon);\r\n \r\n    return element;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://odin-restaurant/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.png */ \"./src/logo.png\");\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactPage */ \"./src/contactPage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconsole.log(\"Hello World\");\r\n\r\nconst content = document.querySelector(\"#content\");\r\n//content.lastChild.r\r\n\r\nconst displayHome = () =>{\r\n    content.lastChild.remove();\r\n    content.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_2__.homePage)());    \r\n }\r\n\r\n const displayMenu = () =>{\r\n    content.lastChild.remove();\r\n    content.appendChild((0,_menuPage__WEBPACK_IMPORTED_MODULE_4__.menuPage)());    \r\n }\r\n\r\n const displayContact = () =>{\r\n    content.lastChild.remove();\r\n    content.appendChild((0,_contactPage__WEBPACK_IMPORTED_MODULE_3__.contactPage)());    \r\n }\r\n\r\n\r\nfunction menu() {\r\n   const element = document.createElement('div');\r\n   element.classList.add(\"menu\");\r\n   // Add the image to our existing div.\r\n   const homeButton = document.createElement('button');\r\n   homeButton.innerHTML = \"Home\";\r\n   homeButton.classList.add(\"menuButton\");\r\n   homeButton.onclick = displayHome;\r\n   element.appendChild(homeButton);\r\n \r\n   const menuButton = document.createElement('button');\r\n   menuButton.innerHTML = \"Menu\";\r\n   menuButton.onclick = displayMenu;\r\n   menuButton.classList.add(\"menuButton\");\r\n   element.appendChild(menuButton);\r\n\r\n   const contactButton = document.createElement('button');\r\n   contactButton.innerHTML = \"Contact\";\r\n   contactButton.onclick = displayContact;\r\n   contactButton.classList.add(\"menuButton\");\r\n   element.appendChild(contactButton);\r\n\r\n    return element;\r\n  }\r\n \r\n content.appendChild(menu());\r\n\r\n content.appendChild((0,_homePage__WEBPACK_IMPORTED_MODULE_2__.homePage)());\r\n\r\n \r\n\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPage\": () => (/* binding */ menuPage)\n/* harmony export */ });\n/* harmony import */ var _BulDak_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BulDak.jpeg */ \"./src/BulDak.jpeg\");\n/* harmony import */ var _BulGogi_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BulGogi.jpeg */ \"./src/BulGogi.jpeg\");\n/* harmony import */ var _Chicken_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chicken.jpeg */ \"./src/Chicken.jpeg\");\n/* harmony import */ var _Dubu_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dubu.jpeg */ \"./src/Dubu.jpeg\");\n/* harmony import */ var _JeYuk_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./JeYuk.jpeg */ \"./src/JeYuk.jpeg\");\n/* harmony import */ var _KFC_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./KFC.jpeg */ \"./src/KFC.jpeg\");\n/* harmony import */ var _Tteok_Bokki_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tteok-Bokki.jpeg */ \"./src/Tteok-Bokki.jpeg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst menuPage = () => {\r\n    const element = document.createElement('div');\r\n    element.classList.add('menuGrid');\r\n    \r\n    const card = document.createElement('div');\r\n    card.classList.add('card');\r\n    const img = document.createElement('img');\r\n    img.classList.add('menuImg');\r\n    img.src = _BulDak_jpeg__WEBPACK_IMPORTED_MODULE_0__;\r\n    card.appendChild(img);\r\n    const itemName = document.createElement('p');\r\n    itemName.innerText = \"BUL DAK\";\r\n    card.appendChild(itemName);\r\n    const itemDesc = document.createElement('p');\r\n    itemDesc.innerText = \"Korean style Chilli Chicken sautéed with onion, scrambled egg, house made green salad on steamed rice. Two special sauces, black sauce and white sauce.\";\r\n    card.appendChild(itemDesc);\r\n\r\n    const card2 = card.cloneNode(true);\r\n    card2.children[0].src = _BulGogi_jpeg__WEBPACK_IMPORTED_MODULE_1__;\r\n    card2.children[1].innerText = \"BUL GOGI\";\r\n    card2.children[2].innerText = \"Korean style Beef BBQ sautéed with onion, scrambled egg, house made green salad on steamed rice. Two special sauces, black sauce and white sauce.\";\r\n\r\n    const card3 = card.cloneNode(true);\r\n    card3.children[0].src = _Chicken_jpeg__WEBPACK_IMPORTED_MODULE_2__;\r\n    card3.children[1].innerText = \"CHICKEN\";\r\n    card3.children[2].innerText = \"Fresh Chicken with garlic & herbs sautéed with onion, scrambled egg, house made green salad on steamed rice. Two special sauces, black sauce and white sauce.\";\r\n    \r\n    const card4 = card.cloneNode(true);\r\n    card4.children[0].src = _Dubu_jpeg__WEBPACK_IMPORTED_MODULE_3__;\r\n    card4.children[1].innerText = \"DUBU\";\r\n    card4.children[2].innerText = \"Stir fried Tofu w.signature house made black sauce sautéed with onion, scrambled egg, house made green salad on steamed rice. Two special sauces, black sauce and white sauce.\";\r\n    \r\n    const card5 = card.cloneNode(true);\r\n    card5.children[0].src = _JeYuk_jpeg__WEBPACK_IMPORTED_MODULE_4__;\r\n    card5.children[1].innerText = \"JE YUK\";\r\n    card5.children[2].innerText = \"Korean style Spicy Pork sautéed with onion, scrambled egg, house made green salad on steamed rice. Two special sauces, black sauce and white sauce.\";\r\n    \r\n    const card6 = card.cloneNode(true);\r\n    card6.children[0].src = _KFC_jpeg__WEBPACK_IMPORTED_MODULE_5__;\r\n    card6.children[1].innerText = \"K.F.C.\";\r\n    card6.children[2].innerText = \"Legendary Korean fried Chicken. 350g of Fried boneless chicken thigh glazed with a choice of sauce and finish with nuts and seed.\";\r\n    \r\n    const card7 = card.cloneNode(true);\r\n    card7.children[0].src = _Tteok_Bokki_jpeg__WEBPACK_IMPORTED_MODULE_6__;\r\n    card7.children[1].innerText = \"TTEOK BOKKI\";\r\n    card7.children[2].innerText = \"Chewy rice cakes & fish cakes in sweet and spicy gochujnag sauce.\";\r\n    \r\n    element.appendChild(card);\r\n    element.appendChild(card2);\r\n    element.appendChild(card3);\r\n    element.appendChild(card4);\r\n    element.appendChild(card5);\r\n    element.appendChild(card6);\r\n    element.appendChild(card7);\r\n    \r\n\r\n\r\n    return element;\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://odin-restaurant/./src/menuPage.js?");

/***/ }),

/***/ "./src/BulDak.jpeg":
/*!*************************!*\
  !*** ./src/BulDak.jpeg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4048ded3b27fc486f679.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/BulDak.jpeg?");

/***/ }),

/***/ "./src/BulGogi.jpeg":
/*!**************************!*\
  !*** ./src/BulGogi.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1ec662936b1c30cd750a.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/BulGogi.jpeg?");

/***/ }),

/***/ "./src/Chicken.jpeg":
/*!**************************!*\
  !*** ./src/Chicken.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8f5cbc52d08ab14c0d1f.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/Chicken.jpeg?");

/***/ }),

/***/ "./src/Dubu.jpeg":
/*!***********************!*\
  !*** ./src/Dubu.jpeg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"049cb4eb4f734043450f.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/Dubu.jpeg?");

/***/ }),

/***/ "./src/JeYuk.jpeg":
/*!************************!*\
  !*** ./src/JeYuk.jpeg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0d97540410b328442c03.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/JeYuk.jpeg?");

/***/ }),

/***/ "./src/KFC.jpeg":
/*!**********************!*\
  !*** ./src/KFC.jpeg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f4a94d102d00f5cf1137.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/KFC.jpeg?");

/***/ }),

/***/ "./src/Tteok-Bokki.jpeg":
/*!******************************!*\
  !*** ./src/Tteok-Bokki.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"882cd6c318348efa6ecb.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/Tteok-Bokki.jpeg?");

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4e9355a1cb9acbaf1023.png\";\n\n//# sourceURL=webpack://odin-restaurant/./src/logo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;