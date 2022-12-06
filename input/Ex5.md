# Exercise 5:JavaScript

## Chapter
Data Types,For Loop

## Chapter Introduction
The data types are a very basic building block of any language. The JavaScript language manipulates values, and those values belong to a type. More specifically, JavaScript offers seven primitive types:

1. Number: Used for every number value (integers and floating point numbers)
2. BigInt: Used for arbitrarily large integers
3. String: Used to hold text
4. Boolean: Used to hold `true` or `false` values
5. Symbol: Used to create unique identifiers that won't collide
6. Undefined: Used to show that a variable has not been assigned a value
7. Null: Used to show a deliberate non-value

## Subchapter
Primitive Types:The BigInt:subchapter2, subchapter1:subchapter

## Subchapter Introduction
The BigInt type is an arbitrary length integer. BigInts are specified with a number literal and an `n` suffix. The standard arithmetic operators are supported, including addition, subtraction, remainder arithmetic, etc. BigInts and numbers cannot be mixed in arithmetic operations.

## Exercise Description
Write a program to declare the BigInt `1234567890` as a variable and print it.

## Code
```js
let x = 1234567890;
console.log(x);
```

## Hints

### Hint 1
Variables are declared using `const`, `let` or `var` keywords:
```js
const variable_name_1 = 1;
let variable_name_2 = 2;
var variable_name_3 = 3;
```

#### Penalty
20 Points

### Hint 2
To print a BigInt to the console, use the `log()` function:
```js
console.log(10.12);
```

#### Penalty
20 Points