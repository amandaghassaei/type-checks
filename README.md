# type-checks

[![NPM Package](https://img.shields.io/npm/v/@amandaghassaei/type-checks)](https://www.npmjs.com/package/@amandaghassaei/type-checks)
[![Build Size](https://img.shields.io/bundlephobia/min/@amandaghassaei/type-checks)](https://bundlephobia.com/result?p=@amandaghassaei/type-checks)
[![NPM Downloads](https://img.shields.io/npm/dw/@amandaghassaei/type-checks)](https://www.npmtrends.com/@amandaghassaei/type-checks)
[![License](https://img.shields.io/npm/l/@amandaghassaei/type-checks)](https://github.com/amandaghassaei/@amandaghassaei/type-checks/blob/main/LICENSE)

A collection of common type checks, written in Typescript.

## Install

Install via npm:

```sh
npm install @amandaghassaei/type-checks
```

```js
import { isNumber, isInteger } from '@amandaghassaei/type-checks';
```

*OR* you can add [type-checks.js](https://raw.githubusercontent.com/amandaghassaei/type-checks/main/dist/type-checks.js) to your html directly:

```html
<html>
    <head>
        <script src="type-checks.js"></script>
    </head>
    <body>
    </body>
</html>
```

TypeChecks will be accessible globally:

```js
const { isNumber, isInteger } = TypeChecks;
```

## Table of contents

### Functions

- [isNumber](README.md#isnumber)
- [isFiniteNumber](README.md#isfinitenumber)
- [isInteger](README.md#isinteger)
- [isPositiveNumber](README.md#ispositivenumber)
- [isPositiveInteger](README.md#ispositiveinteger)
- [isNegativeNumber](README.md#isnegativenumber)
- [isNegativeInteger](README.md#isnegativeinteger)
- [isNonNegativeNumber](README.md#isnonnegativenumber)
- [isNonNegativeInteger](README.md#isnonnegativeinteger)
- [isNonPositiveNumber](README.md#isnonpositivenumber)
- [isNonPositiveInteger](README.md#isnonpositiveinteger)
- [isNumberInRange](README.md#isnumberinrange)
- [isIntegerInRange](README.md#isintegerinrange)
- [isString](README.md#isstring)
- [isTypedArray](README.md#istypedarray)
- [isArray](README.md#isarray)
- [isObject](README.md#isobject)
- [isBoolean](README.md#isboolean)

## Functions

### isNumber

▸ **isNumber**(`value`): `boolean`

Checks if value is a number (including Infinity).

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isFiniteNumber

▸ **isFiniteNumber**(`value`): `boolean`

Checks if value is finite number.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isInteger

▸ **isInteger**(`value`): `boolean`

Checks if value is integer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isPositiveNumber

▸ **isPositiveNumber**(`value`): `boolean`

Checks if value is positive number (> 0).

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isPositiveInteger

▸ **isPositiveInteger**(`value`): `boolean`

Checks if value is positive integer (> 0).

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isNegativeNumber

▸ **isNegativeNumber**(`value`): `boolean`

Checks if value is negative number (< 0).

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isNegativeInteger

▸ **isNegativeInteger**(`value`): `boolean`

Checks if value is negative integer (< 0).

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isNonNegativeNumber

▸ **isNonNegativeNumber**(`value`): `boolean`

Checks if value is non-negative number (>= 0).

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isNonNegativeInteger

▸ **isNonNegativeInteger**(`value`): `boolean`

Checks if value is non-negative integer (>= 0).

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isNonPositiveNumber

▸ **isNonPositiveNumber**(`value`): `boolean`

Checks if value is non-positive number (<= 0).

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isNonPositiveInteger

▸ **isNonPositiveInteger**(`value`): `boolean`

Checks if value is non-positive integer (<= 0).

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isNumberInRange

▸ **isNumberInRange**(`value`, `min`, `max`): `boolean`

Checks if value is number in range [min, max].

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `min` | `number` |
| `max` | `number` |

#### Returns

`boolean`

___

### isIntegerInRange

▸ **isIntegerInRange**(`value`, `min`, `max`): `boolean`

Checks if value is integer in range [min, max].

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `min` | `number` |
| `max` | `number` |

#### Returns

`boolean`

___

### isString

▸ **isString**(`value`): `boolean`

Checks if value is string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isTypedArray

▸ **isTypedArray**(`value`): `boolean`

Checks if value is TypedArray.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isArray

▸ **isArray**(`value`): `boolean`

Checks if value is Array or TypedArray.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isObject

▸ **isObject**(`value`): `boolean`

Checks if value is Javascript object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

___

### isBoolean

▸ **isBoolean**(`value`): `boolean`

Checks if value is boolean.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`
