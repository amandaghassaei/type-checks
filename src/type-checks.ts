/**
 * Checks if value is a number (including Infinity).
 */
 export function isNumber(value: any) {
	return !Number.isNaN(value) && typeof value === 'number';
}

/**
 * Checks if value is finite number.
 */
 export function isFiniteNumber(value: any) {
	return isNumber(value) && Number.isFinite(value);
}

/**
 * Checks if value is integer.
 */
export function isInteger(value: any) {
	return isFiniteNumber(value) && (value % 1 === 0);
}

/**
 * Checks if value is positive number (> 0).
 */
 export function isPositiveNumber(value: any) {
	return isNumber(value) && value > 0;
}

/**
 * Checks if value is positive integer (> 0).
 */
export function isPositiveInteger(value: any) {
	return isInteger(value) && value > 0;
}

/**
 * Checks if value is negative number (< 0).
 */
 export function isNegativeNumber(value: any) {
	return isNumber(value) && value < 0;
}

/**
 * Checks if value is negative integer (< 0).
 */
 export function isNegativeInteger(value: any) {
	return isInteger(value) && value < 0;
}

/**
 * Checks if value is non-negative number (>= 0).
 */
 export function isNonNegativeNumber(value: any) {
	return isNumber(value) && value >= 0;
}

/**
 * Checks if value is non-negative integer (>= 0).
 */
export function isNonNegativeInteger(value: any) {
	return isInteger(value) && value >= 0;
}

/**
 * Checks if value is non-positive number (<= 0).
 */
 export function isNonPositiveNumber(value: any) {
	return isNumber(value) && value <= 0;
}

/**
 * Checks if value is non-positive integer (<= 0).
 */
export function isNonPositiveInteger(value: any) {
	return isInteger(value) && value <= 0;
}

/**
 * Checks if value is number in range [min, max].
 */
export function isNumberInRange(value: any, min: number, max: number) {
	return isNumber(value) && value >= min && value <= max;
}

/**
 * Checks if value is integer in range [min, max].
 */
 export function isIntegerInRange(value: any, min: number, max: number) {
	return isInteger(value) && value >= min && value <= max;
}

/**
 * Checks if value is string.
 */
export function isString(value: any){
	return typeof value === 'string';
}

/**
 * Checks if value is TypedArray.
 */
export function isTypedArray(value: any) {
	return ArrayBuffer.isView(value) && !(value instanceof DataView);
}

/**
 * Checks if value is Array or TypedArray.
 */
export function isArray(value: any) {
	return Array.isArray(value) || isTypedArray(value);
}

/**
 * Checks if value is Javascript object.
 */
export function isObject(value: any) {
	return typeof value === 'object' && !isArray(value) && value !== null && !(value instanceof ArrayBuffer) && !(value instanceof DataView);
}

/**
 * Checks if value is boolean.
 */
export function isBoolean(value: any) {
	return typeof value === 'boolean';
}