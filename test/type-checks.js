{
	const assert = require("assert");
	const {
		isNumber,
		isFiniteNumber,
		isInteger,
		isPositiveInteger,
		isNonNegativeInteger,
		isString,
		isTypedArray,
		isArray,
		isObject,
		isBoolean,
	} = require('../');
	
	const arrayBuffer = new ArrayBuffer(6);
	const typeChecks = [
		0,						-1,						5.7,					92,						true,
		false,					'test',					'14',					[4],					[3, 5.6, 0],
		{ thing: 5 }, 			null,					undefined,				Infinity,				-Infinity,
		NaN,					new Float32Array(2),	new Uint8Array(3),		new Int16Array(0),		arrayBuffer,
		new DataView(arrayBuffer),
	];
	describe('checks', () => {
		describe('isNumber', () => {
			it('should detect valid numbers', () => {
				const expected = [
					true, true, true, true, false,
					false, false, false, false, false,
					false, false, false, true, true,
					false, false, false, false, false,
					false,
				];
				assert.equal(expected.length, typeChecks.length);
				typeChecks.forEach((item, index) => {
					assert.equal(isNumber(item), expected[index], `failed at index ${index} on ${item}`);
				});
			});
		});
		describe('isFiniteNumber', () => {
			it('should detect valid numbers', () => {
				const expected = [
					true, true, true, true, false,
					false, false, false, false, false,
					false, false, false, false, false,
					false, false, false, false, false,
					false,
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
					false,
				];
				assert.equal(expected.length, typeChecks.length);
				typeChecks.forEach((item, index) => {
					assert.equal(isInteger(item), expected[index], `failed at index ${index} on ${item}`);
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
					false,
				];
				assert.equal(expected.length, typeChecks.length);
				typeChecks.forEach((item, index) => {
					assert.equal(isPositiveInteger(item), expected[index], `failed at index ${index} on ${item}`);
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
					false,
				];
				assert.equal(expected.length, typeChecks.length);
				typeChecks.forEach((item, index) => {
					assert.equal(isNonNegativeInteger(item), expected[index], `failed at index ${index} on ${item}`);
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
					false,
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
					false,
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
					false,
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
					false,
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
					false,
				];
				assert.equal(expected.length, typeChecks.length);
				typeChecks.forEach((item, index) => {
					assert.equal(isBoolean(item), expected[index], `failed at index ${index} on ${item}`);
				});
			});
		});
	});
}