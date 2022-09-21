/**
 * Checks if value is a number (including Infinity).
 */
declare function isNumber(value: any): boolean;
/**
 * Checks if value is finite number.
 */
declare function isFiniteNumber(value: any): boolean;
/**
 * Checks if value is integer.
 */
declare function isInteger(value: any): boolean;
/**
 * Checks if value is positive number (> 0).
 */
declare function isPositiveNumber(value: any): boolean;
/**
 * Checks if value is positive integer (> 0).
 */
declare function isPositiveInteger(value: any): boolean;
/**
 * Checks if value is negative number (< 0).
 */
declare function isNegativeNumber(value: any): boolean;
/**
 * Checks if value is negative integer (< 0).
 */
declare function isNegativeInteger(value: any): boolean;
/**
 * Checks if value is non-negative number (>= 0).
 */
declare function isNonNegativeNumber(value: any): boolean;
/**
 * Checks if value is non-negative integer (>= 0).
 */
declare function isNonNegativeInteger(value: any): boolean;
/**
 * Checks if value is non-positive number (<= 0).
 */
declare function isNonPositiveNumber(value: any): boolean;
/**
 * Checks if value is non-positive integer (<= 0).
 */
declare function isNonPositiveInteger(value: any): boolean;
/**
 * Checks if value is number in range [min, max].
 */
declare function isNumberInRange(value: any, min: number, max: number): boolean;
/**
 * Checks if value is integer in range [min, max].
 */
declare function isIntegerInRange(value: any, min: number, max: number): boolean;
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
export { isNumber, isFiniteNumber, isInteger, isPositiveNumber, isPositiveInteger, isNegativeNumber, isNegativeInteger, isNonNegativeNumber, isNonNegativeInteger, isNonPositiveNumber, isNonPositiveInteger, isNumberInRange, isIntegerInRange, isString, isTypedArray, isArray, isObject, isBoolean };
