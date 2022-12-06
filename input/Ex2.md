# Author:Christos Hadjichristofis:christoshadjichristofi@hotmail.com 

# Exercise 2:JavaScript

## Chapter
chapter1,chapter2

## Chapter Introduction
The array is a single variable that is used to store different elements. It is often used when we want to store a list of elements and access them by a single variable. Unlike most languages where the array is a reference to the multiple variables, in JavaScript array is a single variable that stores multiple elements.

```js
// Declaration of an Array: There are basically two ways to declare an array.
// In general the first method is preferred
let myArr = [ ];            // Method 1
let myArr = new Array();    // Method 2
```

The following are the properties of a list.

- Mutable: The elements of the list can be modified. We can add or remove items to the list after it has been created.
- Ordered: The items in the lists are ordered. Each item has a unique index value. The new items will be added to the end of the list.
- Heterogenous: The list can contain different kinds of elements i.e; they can contain elements of string, integer, boolean, or any type.
- Duplicates: The list can contain duplicates i.e., lists can have two items with the same values.

## Subchapter
subchapter1:subchapter2,subchapter3:subchapter15 

## Subchapter Introduction
The BigInt type is an arbitrary length integer. BigInts are specified with a number literal and an `n` suffix. The standard arithmetic operators are supported, including addition, subtraction, remainder arithmetic, etc. BigInts and numbers cannot be mixed in arithmetic operations.

## Exercise Description
Create a list with the numbers from 0 to 7 using a for loop. Then iterate this list and print for every element in this list if it is even or odd.

## Code
```js
let myList = [];

for (let i = 0; i < 8; i++)
    myList.push(i);

for (let i = 0; i < myList.length; i++) {
    if (myList[i] % 2 == 0) console.log('Even');
    else console.log('Odd');
}
```

## Hints

### Hint 1
To create a list you have to type
```js
let mylist = [];
```
#### Penalty
20 points

### Hint 2
To add elements to a list you have to use `push()` function:

```js
let myList = []         // empty list
myList.push(42)         // now the list contains the number 42
myList.push(17)         // now the list contains the number 42 followed by 17 -> [42, 17]
```
#### Penalty
21 points

### Hint 3
To check if the number is odd you have to use the modulus(`%`) operator. As we know from maths, in case a number is even and we divide it by 2, the result is 0. Hence:
```js
// In the example below, we expect to print EVEN, because 42 is an even number and when divided by 2 the result is 0
if (42 % 2 == 0) {
    console.log('EVEN');
}
else {
    console.log('ODD');
}

// In the example below, we expect to print ODD, because 17 is an odd number and when divided by 2 the result is 0
if (17 % 2 == 0) {
    console.log('EVEN');
}
else {
    console.log('ODD');
}
```

#### Penalty
22 Points

### Hint 4
To create a list you have to type and place the elements you want separated by commas.

```js
mylist = [];
```

#### Penalty
20 Points

### Hint 5
For the condition you have to use `length` property of the Array prototype. More specifically, you want to iterate every single element of this array, until your variable i (which is the index you are using in order to iterate the array) is less than the array's length.

```js
const myList = [1, 2, 3];

for (/* your expr1 goes here */; i < myList.length; /* your expr3 goes here */) {
    // body of the for loop
}
```

#### Penalty
20 Points

### Hint 6
To access an element of the array you can use the following notation:

```js
const myList = [1, 2, 3];

console.log(myList[0]);     // prints 1
console.log(myList[1]);     // prints 2
console.log(myList[2]);     // prints 3
console.log(myList[3]);     // undefined (the length of the array is 3, so you can access the elements of position 0 to 2)
```

#### Penalty
20 Points