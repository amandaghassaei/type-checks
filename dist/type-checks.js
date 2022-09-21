(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.TypeChecks = {}));
})(this, (function (exports) { 'use strict';

	/**
	 * Checks if value is a number (including Infinity).
	 */
	function isNumber(value) {
	    return !Number.isNaN(value) && typeof value === 'number';
	}
	/**
	 * Checks if value is finite number.
	 */
	function isFiniteNumber(value) {
	    return isNumber(value) && Number.isFinite(value);
	}
	/**
	 * Checks if value is finite integer.
	 */
	function isInteger(value) {
	    return isFiniteNumber(value) && (value % 1 === 0);
	}
	/**
	 * Checks if value is finite positive integer (> 0).
	 */
	function isPositiveInteger(value) {
	    return isInteger(value) && value > 0;
	}
	/**
	 * Checks if value is finite non-negative integer (>= 0).
	 */
	function isNonNegativeInteger(value) {
	    return isInteger(value) && value >= 0;
	}
	/**
	 * Checks if value is string.
	 */
	function isString(value) {
	    return typeof value === 'string';
	}
	/**
	 * Checks if value is TypedArray.
	 */
	function isTypedArray(value) {
	    return ArrayBuffer.isView(value) && !(value instanceof DataView);
	}
	/**
	 * Checks if value is Array or TypedArray.
	 */
	function isArray(value) {
	    return Array.isArray(value) || isTypedArray(value);
	}
	/**
	 * Checks if value is Javascript object.
	 */
	function isObject(value) {
	    return typeof value === 'object' && !isArray(value) && value !== null && !(value instanceof ArrayBuffer) && !(value instanceof DataView);
	}
	/**
	 * Checks if value is boolean.
	 */
	function isBoolean(value) {
	    return typeof value === 'boolean';
	}

	exports.isArray = isArray;
	exports.isBoolean = isBoolean;
	exports.isFiniteNumber = isFiniteNumber;
	exports.isInteger = isInteger;
	exports.isNonNegativeInteger = isNonNegativeInteger;
	exports.isNumber = isNumber;
	exports.isObject = isObject;
	exports.isPositiveInteger = isPositiveInteger;
	exports.isString = isString;
	exports.isTypedArray = isTypedArray;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=type-checks.js.map
