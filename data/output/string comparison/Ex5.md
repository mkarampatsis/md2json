# Author:Christos Hadjichristofi:christoshadjichristofi@hotmail.com

# Exercise 5:Python

## Chapter
Python Strings

## Chapter Introduction
In Python, a string is a sequence of characters enclosed in quotes (either single quotes or double quotes). Strings are a fundamental data type in Python and are used to represent text.

Here are some important things to know about strings in Python:
- Strings are immutable: This means that once a string is created, you cannot change its contents. You can, however, create a new string that is a modified version of the original string.
- Strings can be concatenated: You can concatenate two or more strings together using the + operator. For example, "hello" + "world" would result in the string "helloworld".
- Strings can be indexed and sliced: You can access individual characters in a string using square brackets and an index. For example, "hello"[0] would return the character "h". You can also slice a string to get a substring using a colon to specify the start and end indices. For example, "hello"[1:4] would return the string "ell".
- Strings have many built-in methods: Python provides many built-in methods for working with strings. Some of the most commonly used methods include split(), join(), upper(), lower(), replace(), and find().

Here's an example of some basic string operations in Python:
```py3
# Creating a string
my_string = "hello world"

# Concatenating strings
my_new_string = my_string + "!"

# Indexing a string
print(my_string[0])  # Output: h

# Slicing a string
print(my_string[1:5])  # Output: ello

# Splitting a string
my_list = my_string.split(" ")  # Output: ["hello", "world"]

# Joining strings
my_new_string = " ".join(my_list)  # Output: "hello world"

# Converting case
my_uppercase_string = my_string.upper()  # Output: "HELLO WORLD"
my_lowercase_string = my_string.lower()  # Output: "hello world"

# Replacing characters
my_new_string = my_string.replace("o", "x")  # Output: "hellx wxrld"

# Finding substrings
my_index = my_string.find("world")  # Output: 6

# String length
my_length = len(my_string)  # Output: 11
```

## Subchapter
Python Strings:String Comparison,Python If...Else:Working with IF & IF-ELSE Statement

## Subchapter Introduction
In Python, you can compare two strings using the comparison operators, such as ==, !=, <, >, <=, and >=. String comparison is based on the Unicode value of each character in the strings. When comparing two strings, Python compares the corresponding characters of each string one by one until it finds characters that differ. It then compares the Unicode value of those characters to determine the order of the strings.

For example, the string 'apple' is less than the string 'banana' because the Unicode value of 'a' is less than the Unicode value of 'b'.

Here is a table of the comparison operators and their meanings:

| Operator | Meaning |
| -------- | ----------- |
| `==` | Returns `True` if two strings are equal, otherwise `False` |
| `!=` | Returns `True` if two strings are not equal, otherwise `False` |
| `<` | Returns `True` if the left string is lexicographically smaller than the right string, otherwise `False` |
| `>` | Returns `True` if the left string is lexicographically greater than the right string, otherwise `False` |
| `<=` | Returns `True` if the left string is lexicographically smaller than or equal to the right string, otherwise `False` |
| `>=` | Returns `True` if the left string is lexicographically greater than or equal to the right string, otherwise `False` |

When comparing strings, it's important to note that Python is case-sensitive. This means that 'apple' and 'Apple' are not equal.

You can also use the is and is not operators to compare strings. These operators check if two strings are the same object in memory. For example, 'apple' is 'apple' will return True, while 'apple' is not 'banana' will also return True.

In addition to the comparison operators, Python also has a sorted() function that can be used to sort a list of strings in ascending or descending order based on the Unicode value of each character. This function can be useful when working with lists of strings that need to be sorted.

Overall, string comparison is an important concept in Python, as it is used in many different applications, such as sorting, searching, and data analysis.

## Exercise Description
Compare two strings with the >= operator. In case the condition is true, print 'The first string is greater or equal' else print 'The second string is greater'. (Input: string1 = 'apple', string2 = 'banana')

## Code
```py3
string1 = 'apple'
string2 = 'banana'

if string1 >= string2:
	print('The first string is greater or equal')
else:
	print('The second string is greater')
```

## Output Data
type=oneline
False

## Hints

### Hint 1
Use the >= operator to compare the strings as the condition of the if statement.

#### Penalty
20 Points

### Hint 2
The syntax of an if - else statement is:
```py3
if condition:
	block_of_code_when_true
else:
	block_of_code_when_false
```

#### Penalty
20 Points

## Difficulty
2