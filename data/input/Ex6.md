# Author:Christos Hadjichristofi:christoshadjichristofi@hotmail.com

# Exercise 6:Python

## Chapter
Python Casting

## Chapter Introduction
Casting in Python is a process of converting a variable from one data type to another. You can use built-in functions to cast variables to different data types, such as int(), float(), and str(). Here's a brief explanation of each:
1. int(): Casts a variable to an integer. If the input is a float, it will truncate the decimal part. If the input is a string, it must represent a valid integer; otherwise, a ValueError will be raised.
2. float(): Casts a variable to a floating-point number. If the input is an integer, it will add a decimal part (e.g., 3 becomes 3.0). If the input is a string, it must represent a valid float; otherwise, a ValueError will be raised.
3. str(): Casts a variable to a string. If the input is an integer or a float, it will convert the number to its string representation.

Here are some examples of casting in Python:
```py3
# Casting an integer to a float
int_value = 5
float_value = float(int_value)
print(float_value)  # Output: 5.0

# Casting a float to an integer
float_value = 5.7
int_value = int(float_value)
print(int_value)  # Output: 5 (truncated)

# Casting a string to an integer
string_value = "10"
int_value = int(string_value)
print(int_value)  # Output: 10

# Casting an integer to a string
int_value = 42
string_value = str(int_value)
print(string_value)  # Output: "42"

# Casting a string to a float
string_value = "3.14"
float_value = float(string_value)
print(float_value)  # Output: 3.14
```

Keep in mind that not all values can be cast to all data types. For example, attempting to cast a non-numeric string to an integer or a float will raise a ValueError.

## Subchapter
Python Casting:What is Complex Type Casting

## Subchapter Introduction
Complex type casting, also known as explicit type casting, is a technique used in programming to convert data from one type to another. Specifically, complex type casting involves converting data between complex number types, which are numbers in the form a + bi, where a and b are real numbers and i is the imaginary unit.

In Python, complex type casting is done explicitly by using the complex() function. This function takes two arguments: the real part of the complex number and the imaginary part of the complex number. For example, to cast the integer 3 and the float 2.5 to a complex number, we can use the following code:

```py3
x = complex(3, 2.5)
```

This will create a complex number with a real part of 3 and an imaginary part of 2.5i.

## Exercise Description
Create a complex number from a negative integer and a positive float. (Input: x = -3, y = 2.75)

## Code
```py3
x = -3
y = 2.75
z = complex(x, y)
print(z)
```

## Output Data
type=oneline
(-3+2.75j)

## Hints

### Hint 1
The `complex()` function takes two arguments: the real part and the imaginary part.

#### Penalty
20 Points

### Hint 2
The result of the `complex()` function is a complex number.

#### Penalty
20 Points

## Difficulty
1