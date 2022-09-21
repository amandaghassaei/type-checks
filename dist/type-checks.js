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
	 * Checks if value is integer.
	 */
	function isInteger(value) {
	    return isFiniteNumber(value) && (value % 1 === 0);
	}
	/**
	 * Checks if value is positive number (> 0).
	 */
	function isPositiveNumber(value) {
	    return isNumber(value) && value > 0;
	}
	/**
	 * Checks if value is positive integer (> 0).
	 */
	function isPositiveInteger(value) {
	    return isInteger(value) && value > 0;
	}
	/**
	 * Checks if value is negative number (< 0).
	 */
	function isNegativeNumber(value) {
	    return isNumber(value) && value < 0;
	}
	/**
	 * Checks if value is negative integer (< 0).
	 */
	function isNegativeInteger(value) {
	    return isInteger(value) && value < 0;
	}
	/**
	 * Checks if value is non-negative number (>= 0).
	 */
	function isNonNegativeNumber(value) {
	    return isNumber(value) && value >= 0;
	}
	/**
	 * Checks if value is non-negative integer (>= 0).
	 */
	function isNonNegativeInteger(value) {
	    return isInteger(value) && value >= 0;
	}
	/**
	 * Checks if value is non-positive number (<= 0).
	 */
	function isNonPositiveNumber(value) {
	    return isNumber(value) && value <= 0;
	}
	/**
	 * Checks if value is non-positive integer (<= 0).
	 */
	function isNonPositiveInteger(value) {
	    return isInteger(value) && value <= 0;
	}
	/**
	 * Checks if value is number in range [min, max].
	 */
	function isNumberInRange(value, min, max) {
	    return isNumber(value) && value >= min && value <= max;
	}
	/**
	 * Checks if value is integer in range [min, max].
	 */
	function isIntegerInRange(value, min, max) {
	    return isInteger(value) && value >= min && value <= max;
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
	exports.isIntegerInRange = isIntegerInRange;
	exports.isNegativeInteger = isNegativeInteger;
	exports.isNegativeNumber = isNegativeNumber;
	exports.isNonNegativeInteger = isNonNegativeInteger;
	exports.isNonNegativeNumber = isNonNegativeNumber;
	exports.isNonPositiveInteger = isNonPositiveInteger;
	exports.isNonPositiveNumber = isNonPositiveNumber;
	exports.isNumber = isNumber;
	exports.isNumberInRange = isNumberInRange;
	exports.isObject = isObject;
	exports.isPositiveInteger = isPositiveInteger;
	exports.isPositiveNumber = isPositiveNumber;
	exports.isString = isString;
	exports.isTypedArray = isTypedArray;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=type-checks.js.map
