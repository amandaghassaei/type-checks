
import {
	isNumber,
	isFiniteNumber,
	isInteger,
	isPositiveNumber,
	isPositiveInteger,
	isNegativeNumber,
	isNegativeInteger,
	isNonNegativeNumber,
	isNonNegativeInteger,
	isNonPositiveNumber,
	isNonPositiveInteger,
	isNumberInRange,
	isIntegerInRange,
	isString,
	isTypedArray,
	isArray,
	isObject,
	isBoolean,
} from '../src/type-checks';
import * as assert from 'assert';

const arrayBuffer = new ArrayBuffer(6);
const dataView = new DataView(arrayBuffer);
const typeChecks = [
	0,						-1,						5.7,					92,						true,
	false,					'test',					'14',					[4],					[3, 5.6, 0],
	{ thing: 5 }, 			null,					undefined,				Infinity,				-Infinity,
	NaN,					new Float32Array(2),	new Uint8Array(3),		new Int16Array(0),		arrayBuffer,
	dataView,				-35.6,
];
describe('checks', () => {
	describe('isNumber', () => {
		it('should detect valid numbers', () => {
			const expected = [
				true, true, true, true, false,
				false, false, false, false, false,
				false, false, false, true, true,
				false, false, false, false, false,
				false, true,
			];
			assert.equal(expected.length, typeChecks.length);
			typeChecks.forEach((item, index) => {
				assert.equal(isNumber(item), expected[index], `failed at index ${index} on ${item}`);
			});
		});
	});
	describe('isFiniteNumber', () => {
		it('should detect valid finite numbers', () => {
			const expected = [
				true, true, true, true, false,
				false, false, false, false, false,
				false, false, false, false, false,
				false, false, false, false, false,
				false, true,
			];
			assert.equal(expected.length, typeChecks.length);
			typeChecks.forEach((item, index) => {
				assert.equal(isFiniteNumber(item), expected[index], `failed at index ${index} on ${item}`);
			});
		});
	});
	describe('isInteger', () => {
		it('should detect valid integers', () => {
			const expected = [
				true, true, false, true, false,
				false, false, false, false, false,
				false, false, false, false, false,
				false, false, false, false, false,
				false, false,
			];
			assert.equal(expected.length, typeChecks.length);
			typeChecks.forEach((item, index) => {
				assert.equal(isInteger(item), expected[index], `failed at index ${index} on ${item}`);
			});
		});
	});
	describe('isPositiveNumber', () => {
		it('should detect valid positive numbers', () => {
			const expected = [
				false, false, true, true, false,
				false, false, false, false, false,
				false, false, false, true, false,
				false, false, false, false, false,
				false, false,
			];
			assert.equal(expected.length, typeChecks.length);
			typeChecks.forEach((item, index) => {
				assert.equal(isPositiveNumber(item), expected[index], `failed at index ${index} on ${item}`);
			});
		});
	});
	describe('isPositiveInteger', () => {
		it('should detect valid positive integers', () => {
			const expected = [
				false, false, false, true, false,
				false, false, false, false, false,
				false, false, false, false, false,
				false, false, false, false, false,
				false, false,
			];
			assert.equal(expected.length, typeChecks.length);
			typeChecks.forEach((item, index) => {
				assert.equal(isPositiveInteger(item), expected[index], `failed at index ${index} on ${item}`);
			});
		});
	});
	describe('isNegativeNumber', () => {
		it('should detect valid negative numbers', () => {
			const expected = [
				false, true, false, false, false,
				false, false, false, false, false,
				false, false, false, false, true,
				false, false, false, false, false,
				false, true
			];
			assert.equal(expected.length, typeChecks.length);
			typeChecks.forEach((item, index) => {
				assert.equal(isNegativeNumber(item), expected[index], `failed at index ${index} on ${item}`);
			});
		});
	});
	describe('isNegativeInteger', () => {
		it('should detect valid negative integers', () => {
			const expected = [
				false, true, false, false, false,
				false, false, false, false, false,
				false, false, false, false, false,
				false, false, false, false, false,
				false, false,
			];
			assert.equal(expected.length, typeChecks.length);
			typeChecks.forEach((item, index) => {
				assert.equal(isNegativeInteger(item), expected[index], `failed at index ${index} on ${item}`);
			});
		});
	});
	describe('isNonNegativeNumber', () => {
		it('should detect valid non-negative numbers', () => {
			const expected = [
				true, false, true, true, false,
				false, false, false, false, false,
				false, false, false, true, false,
				false, false, false, false, false,
				false, false,
			];
			assert.equal(expected.length, typeChecks.length);
			typeChecks.forEach((item, index) => {
				assert.equal(isNonNegativeNumber(item), expected[index], `failed at index ${index} on ${item}`);
			});
		});
	});
	describe('isNonNegativeInteger', () => {
		it('should detect valid non-negative integers', () => {
			const expected = [
				true, false, false, true, false,
				false, false, false, false, false,
				false, false, false, false, false,
				false, false, false, false, false,
				false, false,
			];
			assert.equal(expected.length, typeChecks.length);
			typeChecks.forEach((item, index) => {
				assert.equal(isNonNegativeInteger(item), expected[index], `failed at index ${index} on ${item}`);
			});
		});
	});
	describe('isNonPositiveNumber', () => {
		it('should detect valid non-positive numbers', () => {
			const expected = [
				true, true, false, false, false,
				false, false, false, false, false,
				false, false, false, false, true,
				false, false, false, false, false,
				false, true,
			];
			assert.equal(expected.length, typeChecks.length);
			typeChecks.forEach((item, index) => {
				assert.equal(isNonPositiveNumber(item), expected[index], `failed at index ${index} on ${item}`);
			});
		});
	});
	describe('isNonPositiveInteger', () => {
		it('should detect valid non-positive integers', () => {
			const expected = [
				true, true, false, false, false,
				false, false, false, false, false,
				false, false, false, false, false,
				false, false, false, false, false,
				false, false,
			];
			assert.equal(expected.length, typeChecks.length);
			typeChecks.forEach((item, index) => {
				assert.equal(isNonPositiveInteger(item), expected[index], `failed at index ${index} on ${item}`);
			});
		});
	});
	describe('isNumberInRange', () => {
		it('should detect valid numbers in range', () => {
			const expected = [
				true, true, true, false, false,
				false, false, false, false, false,
				false, false, false, false, false,
				false, false, false, false, false,
				false, false,
			];
			assert.equal(expected.length, typeChecks.length);
			typeChecks.forEach((item, index) => {
				assert.equal(isNumberInRange(item, -2, 6), expected[index], `failed at index ${index} on ${item}`);
			});
		});
		it('should detect valid numbers in range with infinite bounds', () => {
			const expected = [
				true, true, true, true, false,
				false, false, false, false, false,
				false, false, false, true, true,
				false, false, false, false, false,
				false, true,
			];
			assert.equal(expected.length, typeChecks.length);
			typeChecks.forEach((item, index) => {
				assert.equal(isNumberInRange(item, -Infinity, Infinity), expected[index], `failed at index ${index} on ${item}`);
			});
		});
	});
	describe('isIntegerInRange', () => {
		it('should detect valid integers in range', () => {
			const expected = [
				true, true, false, false, false,
				false, false, false, false, false,
				false, false, false, false, false,
				false, false, false, false, false,
				false, false,
			];
			assert.equal(expected.length, typeChecks.length);
			typeChecks.forEach((item, index) => {
				assert.equal(isIntegerInRange(item, -2, 6), expected[index], `failed at index ${index} on ${item}`);
			});
		});
	});
	describe('isString', () => {
		it('should detect valid strings', () => {
			const expected = [
				false, false, false, false, false,
				false, true, true, false, false,
				false, false, false, false, false,
				false, false, false, false, false,
				false, false,
			];
			assert.equal(expected.length, typeChecks.length);
			typeChecks.forEach((item, index) => {
				assert.equal(isString(item), expected[index], `failed at index ${index} on ${item}`);
			});
		});
	});
	describe('isTypedArray', () => {
		it('should detect valid typed arrays', () => {
			const expected = [
				false, false, false, false, false,
				false, false, false, false, false,
				false, false, false, false, false,
				false, true, true, true, false,
				false, false,
			];
			assert.equal(expected.length, typeChecks.length);
			typeChecks.forEach((item, index) => {
				assert.equal(isTypedArray(item), expected[index], `failed at index ${index} on ${item}`);
			});
		});
	});
	describe('isArray', () => {
		it('should detect valid arrays', () => {
			const expected = [
				false, false, false, false, false,
				false, false, false, true, true,
				false, false, false, false, false,
				false, true, true, true, false,
				false, false,
			];
			assert.equal(expected.length, typeChecks.length);
			typeChecks.forEach((item, index) => {
				assert.equal(isArray(item), expected[index], `failed at index ${index} on ${item}`);
			});
		});
	});
	describe('isObject', () => {
		it('should detect valid objects', () => {
			const expected = [
				false, false, false, false, false,
				false, false, false, false, false,
				true, false, false, false, false,
				false, false, false, false, false,
				false, false,
			];
			assert.equal(expected.length, typeChecks.length);
			typeChecks.forEach((item, index) => {
				assert.equal(isObject(item), expected[index], `failed at index ${index} on ${item}`);
			});
		});
	});
	describe('isBoolean', () => {
		it('should detect valid booleans', () => {
			const expected = [
				false, false, false, false, true,
				true, false, false, false, false,
				false, false, false, false, false,
				false, false, false, false, false,
				false, false,
			];
			assert.equal(expected.length, typeChecks.length);
			typeChecks.forEach((item, index) => {
				assert.equal(isBoolean(item), expected[index], `failed at index ${index} on ${item}`);
			});
		});
	});
});