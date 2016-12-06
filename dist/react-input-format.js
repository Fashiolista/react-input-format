(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-input-format"] = factory(require("react"));
	else
		root["react-input-format"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formatters_thousand_separator__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ReactInputFormat = function (_React$Component) {
    _inherits(ReactInputFormat, _React$Component);

    function ReactInputFormat() {
        _classCallCheck(this, ReactInputFormat);

        var _this = _possibleConstructorReturn(this, (ReactInputFormat.__proto__ || Object.getPrototypeOf(ReactInputFormat)).call(this));

        _this.state = Object.assign({
            type: 'text',
            format: 'thousand-separator',
            value: '',
            formattedValue: ''
        }, _this.props);

        _this.availableFormatters();
        _this.setFormatter();
        return _this;
    }

    _createClass(ReactInputFormat, [{
        key: 'availableFormatters',
        value: function availableFormatters() {
            this.formatters = {
                'thousand-separator': __WEBPACK_IMPORTED_MODULE_1__formatters_thousand_separator__["a" /* default */]
            };
        }
    }, {
        key: 'setFormatter',
        value: function setFormatter() {
            if (!this.formatters[this.state.format]) {
                console.warn('Formatter "' + this.state.format + '" not found');
            }

            this.formatter = new this.formatters[this.state.format]();
        }
    }, {
        key: 'onChange',
        value: function onChange(e) {
            this.state.value = this.formatter.deFormat(e.target.value);

            console.log('deformatted:', this.state.value);

            this.state.formattedValue = this.formatter.format(this.state.value);

            this.setState(this.state);
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'react-input-format' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: this.state.type, value: this.state.formattedValue, onChange: this.onChange.bind(this) })
            );
        }
    }]);

    return ReactInputFormat;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = ReactInputFormat;
/* harmony default export */ exports["default"] = _default;
;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ReactInputFormat, 'ReactInputFormat', '/Users/jimmy/Websites/react-input-format/src/react-input-format.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jimmy/Websites/react-input-format/src/react-input-format.js');
})();

;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _default = function () {

    /**
     * Constructor
     *
     * @param props
     */
    function _default(props) {
        _classCallCheck(this, _default);

        this.props = props;
    }

    /**
     * Format string
     *
     * @param input
     * @returns {string}
     */


    _createClass(_default, [{
        key: 'format',
        value: function format() {
            var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            var parts = input.split('.');
            parts[0] = parts[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');

            return parts.join('.');
        }

        /**
         * Deformat formatted text back to computer readable
         *
         * @param input
         * @returns {string}
         */

    }, {
        key: 'deFormat',
        value: function deFormat() {
            var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            var format = /(^([0-9]|,)+(\.?[0-9]{0,2})?)/g,
                parts = input.match(format);

            return (parts && parts.join('') || '').replace(/,/g, '');
        }
    }]);

    return _default;
}();

/**
 * Thousand separator formatter
 */
/* harmony default export */ exports["a"] = _default;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jimmy/Websites/react-input-format/src/formatters/thousand-separator.js');
})();

;

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-input-format.js.map