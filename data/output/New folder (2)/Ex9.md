# Author:Christos Hadjichristofi:christoshadjichristofi@hotmail.com

# Exercise 9:Python

## Chapter
Python Operators

## Chapter Introduction
Python has several types of operators that allow us to manipulate data in various ways. The main types of operators in Python are:

1. Arithmetic Operators: These are the operators that perform mathematical calculations on numerical values. The arithmetic operators include addition (+), subtraction (-), multiplication (*), division (/), modulus (%), floor division (//), and exponentiation (**).
2. Relational Operators: These are the operators that compare two values and return a boolean value of True or False based on the relationship between the two values. The relational operators include less than (<), greater than (>), less than or equal to (<=), greater than or equal to (>=), equality (==), and inequality (!=).
3. Assignment Operators: These are the operators used to assign values to variables. The assignment operators include the equals sign (=), as well as augmented assignment operators like +=, -=, *=, /=, %=, //=, and **=.
4. Increment and Decrement Operators: These are the operators that allow us to increment or decrement a variable's value by 1. The increment operator is represented by "++" and the decrement operator is represented by "--". However, these operators are not directly supported in Python.
5. Logical Operators: These are the operators used to combine or invert boolean values. The logical operators include and, or, and not.
6. Membership Operators: These are the operators that test whether a value is a member of a sequence. The membership operators include in and not in.
7. Identity Operators: These are the operators that test if two variables refer to the same object. The identity operators include is and is not.

Understanding the different types of operators and how they work is essential in Python programming. By using operators, we can manipulate data in many different ways and perform complex operations with ease.

## Subchapter
Python Operators:Working with Relational Operators:Working with Logical Operators

## Subchapter Introduction
In Python, relational operators are used to compare two values and return a Boolean value (True or False) depending on whether the comparison is true or false. The six relational operators available in Python are:

1. == (equal to): Checks if two values are equal.
2. != (not equal to): Checks if two values are not equal.
3. < (less than): Checks if the first value is less than the second value.
4. > (greater than): Checks if the first value is greater than the second value.
5. <= (less than or equal to): Checks if the first value is less than or equal to the second value.
6. >= (greater than or equal to): Checks if the first value is greater than or equal to the second value.

Relational operators can be used with all data types in Python, including strings, integers, floats, and Boolean values. When used with strings, the comparison is done based on the ASCII value of the characters.

Here are some examples of using relational operators in Python:
```py3
x = 10
y = 5

print(x == y)   # False
print(x != y)   # True
print(x < y)    # False
print(x > y)    # True
print(x <= y)   # False
print(x >= y)   # True

string1 = "apple"
string2 = "banana"

print(string1 == string2)    # False
print(string1 < string2)     # True
print(string1 > string2)     # False
```

In the first example, we compare the values of x and y using all six relational operators. In the second example, we compare two strings based on their ASCII values using the less than and greater than operators.

Relational operators are commonly used in decision-making structures like if statements and while loops to control the flow of a program based on certain conditions.

## Exercise Description
Check if the given value is not between 10 and 20 (exclusive) (Input: 15)

## Code
```py3
value = 15
print(value < 10 or value > 20)
```

## Output Data
type=oneline
False

## Hints

### Hint 1
Use the less than (<) and greater than (>) operators to check if the value is outside the range of 10 to 20.

#### Penalty
20 Points

### Hint 2
Use the logical or operator to combine the two relational expressions.

#### Penalty
20 Points

## Difficulty
2