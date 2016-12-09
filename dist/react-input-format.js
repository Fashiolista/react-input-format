(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-input-format"] = factory(require("react"));
	else
		root["react-input-format"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formatters_thousand_separated__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formatters_percentage__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * React Input Format Component
 *
 * Takes a normal input box and formats the user's input based on the specified formatter.
 *
 * Currently supports:
 *
 * - Thousand Separator
 *   >> 10000
 *   << 10,000
 *
 *   >> 10000000.00
 *   << 10,000,000.00
 *
 * - Percentage
 *   >> 1
 *   << 1%
 *
 *   With 0.01 factor, value returned by onChange is 0.042
 *   >> 4.2
 *   << 4.2%
 *
 *
 * @type {ReactInputFormat}
 */

var ReactInputFormat = function (_React$Component) {
    _inherits(ReactInputFormat, _React$Component);

    /**
     * Constructor
     *
     * @param props
     */
    function ReactInputFormat(props) {
        _classCallCheck(this, ReactInputFormat);

        var _this = _possibleConstructorReturn(this, (ReactInputFormat.__proto__ || Object.getPrototypeOf(ReactInputFormat)).call(this));

        _this.state = Object.assign({
            type: 'text',
            format: 'thousand-separated',
            value: String(props.defaultValue) || '',
            formattedValue: ''
        }, props);
        return _this;
    }

    /**
     * React component mounted
     */


    _createClass(ReactInputFormat, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.availableFormatters();
            this.setFormatter();
        }

        /**
         * Set available formatters
         */

    }, {
        key: 'availableFormatters',
        value: function availableFormatters() {
            this.formatters = {
                'thousand-separated': __WEBPACK_IMPORTED_MODULE_1__formatters_thousand_separated__["a" /* default */],
                'percentage': __WEBPACK_IMPORTED_MODULE_2__formatters_percentage__["a" /* default */]
            };
        }

        /**
         * Set formatter, based on user props
         */

    }, {
        key: 'setFormatter',
        value: function setFormatter() {
            if (!this.formatters[this.state.format]) {
                return console.warn('Formatter "' + this.state.format + '" not found');
            }

            this.formatter = new this.formatters[this.state.format](this.props.formatterProps);

            this.setState({
                formattedValue: this.formatter.format(this.state.value)
            });
        }

        /**
         * On change callback
         *
         * @param e
         */

    }, {
        key: 'onChange',
        value: function onChange(e) {
            this.state.value = this.formatter.deFormat(e.target.value);

            if (!this.formatter.getProps()['formatOnBlur']) {
                this.state.formattedValue = this.formatter.format(this.state.value);
            } else {
                this.state.formattedValue = e.target.value;
            }

            this.setState(this.state);

            this.props.onChange && this.props.onChange(this.changeEvent(e));
        }

        /**
         * Make our own change event
         *
         * @param e
         * @returns {{value: *, originalEvent: *}}
         */

    }, {
        key: 'changeEvent',
        value: function changeEvent(e) {
            return {
                value: this.state.value,
                originalEvent: e
            };
        }

        /**
         * On blur, might want to reformat
         */

    }, {
        key: 'onBlur',
        value: function onBlur() {
            if (this.formatter.getProps()['formatOnBlur']) {
                this.refreshFormattedValue();
            }
        }

        /**
         * On enter, reformat
         * @param e
         */

    }, {
        key: 'onKeyDown',
        value: function onKeyDown(e) {
            if (e.keyCode === 13) {
                this.refreshFormattedValue();
            }
        }

        /**
         * Refresh formatted value based on internal value
         */

    }, {
        key: 'refreshFormattedValue',
        value: function refreshFormattedValue() {
            this.state.formattedValue = this.formatter.format(this.state.value);

            this.setState(this.state);
        }

        /**
         * Render
         *
         * @returns {XML}
         */

    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'react-input-format' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: this.state.type, value: this.state.formattedValue, onChange: this.onChange.bind(this), onBlur: this.onBlur.bind(this), onKeyDown: this.onKeyDown.bind(this) })
            );
        }
    }]);

    return ReactInputFormat;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

;

// format="percentage" defaultValue={0} formatterProps={{factor: 0.01, decimals: 0}} onChange={e => {console.log("Updated with", e.value)}}

/**
 * Proptypes
 */
ReactInputFormat.propTypes = {
    format: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string.isRequired,
    defaultValue: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.number,
    formatterProps: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object,
    onChange: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func
};

module.exports = ReactInputFormat;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ReactInputFormat, 'ReactInputFormat', '/Users/jimmy/Websites/react-input-format/src/react-input-format.js');
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
    function _default() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, _default);

        this.props = props;
    }

    /**
     * Return properties specific for this formatter
     *
     * @returns {{formatOnBlur: boolean}}
     */


    _createClass(_default, [{
        key: 'getProps',
        value: function getProps() {
            return {
                formatOnBlur: true
            };
        }

        /**
         * Format string
         *
         * @param input
         * @returns {string}
         */

    }, {
        key: 'format',
        value: function format() {
            var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            input = parseFloat(input || 0);

            if (isNaN(input)) {
                return '%';
            }

            return this.factorDiv(input).toFixed(this.props.decimals) + "%";
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

            var parts = this.deFormatParts(input);

            if (parts && parts[0] === '%') {
                return '';
            }

            this.determineDecimals(input);

            if (parts) {
                return parseFloat(this.factorMulti(parts[0]).toFixed(2 + parseInt(this.props.decimals)));
            } else {
                return '';
            }
        }

        /**
         * Use regex to divide input into parts
         *
         * @param input
         * @returns {Array|{index: number, input: string}|*}
         */

    }, {
        key: 'deFormatParts',
        value: function deFormatParts(input) {
            var format = /^([0-9]*\.?\d{0,2})%?/g;

            return input.match(format);
        }

        /**
         * Based on input, see if the user is using a decimal number, if so, we update our decimal property
         * for readability
         *
         * @param input
         */

    }, {
        key: 'determineDecimals',
        value: function determineDecimals() {
            var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            var parts = input.replace('%', '').split('.');

            if (parts[1]) {
                this.props.decimals = Math.min(parts[1].length, 2);
            } else {
                this.props.decimals = 0;
            }
        }

        /**
         * Calc the user's given factor
         *
         * @param input
         * @returns {number}
         */

    }, {
        key: 'factorMulti',
        value: function factorMulti(input) {
            return parseFloat(input) * parseFloat(this.props.factor || 1);
        }

        /**
         * Calc the user's given factor
         *
         * @param input
         * @returns {number}
         */

    }, {
        key: 'factorDiv',
        value: function factorDiv(input) {
            return parseFloat(input) / parseFloat(this.props.factor || 1);
        }
    }]);

    return _default;
}();

/**
 * Thousand separated formatter
 */
/* harmony default export */ exports["a"] = _default;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jimmy/Websites/react-input-format/src/formatters/percentage.js');
})();

;

/***/ },
/* 2 */
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
     * Return properties specific for this formatter
     *
     * @returns {}
     */


    _createClass(_default, [{
        key: 'getProps',
        value: function getProps() {
            return {};
        }

        /**
         * Format string
         *
         * @param input
         * @returns {string}
         */

    }, {
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
 * Thousand separated formatter
 */
/* harmony default export */ exports["a"] = _default;
;

(function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/jimmy/Websites/react-input-format/src/formatters/thousand-separated.js');
})();

;

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-input-format.js.map