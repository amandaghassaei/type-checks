/**
 * Checks if value is a number (including Infinity).
 */
declare function isNumber(value: any): boolean;
/**
 * Checks if value is finite number.
 */
declare function isFiniteNumber(value: any): boolean;
/**
 * Checks if value is finite integer.
 */
declare function isInteger(value: any): boolean;
/**
 * Checks if value is finite positive integer (> 0).
 */
declare function isPositiveInteger(value: any): boolean;
/**
 * Checks if value is finite non-negative integer (>= 0).
 */
declare function isNonNegativeInteger(value: any): boolean;
/**
 * Checks if value is string.
 */
declare function isString(value: any): boolean;
/**
 * Checks if value is TypedArray.
 */
declare function isTypedArray(value: any): boolean;
/**
 * Checks if value is Array or TypedArray.
 */
declare function isArray(value: any): boolean;
/**
 * Checks if value is Javascript object.
 */
declare function isObject(value: any): boolean;
/**
 * Checks if value is boolean.
 */
declare function isBoolean(value: any): boolean;
export { isNumber, isFiniteNumber, isInteger, isPositiveInteger, isNonNegativeInteger, isString, isTypedArray, isArray, isObject, isBoolean };
