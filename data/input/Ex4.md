# Author:Nicoletta Tsiopani :tsiopnicol_99@hotmail.com

# Exercise 4: Python

## Chapter
Lists

## Chapter Introduction
Lists are used to store multiple items in a single variable.

Lists are one of 4 built-in data types in Python used to store collections of data. A list can contain any datatype, even different datatypes.

The items of a list are always in order and it is very easy to add, change or remove elements of a list.

Lists are created using square brackets:

```python
listname = [1,2,3]

print(listname)
```

## Subchapter
Lists: Different Ways to Create List: Python Nested Lists

## Subchapter Introduction
Lists are created using sqaure brackets.

```python
listname = [1,2,3]

print(listname)
```

Another way to create a list is by using the `list() ` method, which takes only one input.

```python
listname = list((1,2,3))

print(listname)
```

## Exercise Description
Create a list called `x` that contains the string `'x'` and the integer `1`. Also, create a list called `y` that contains the string `'y'` and the integer `2`.

Then, join these two lists in one using two different ways:

(i) with square brackets

(ii) with the `list()` method

and name the two new lists `xy_brackets` and `xy_list` respectively.

Print the two new lists.

## Code
```python
x = ['x',1]
y = ['y',2]

xy_brackets = [x,y]
xy_list = list((x,y))

print(xy_brackets)
print(xy_list)
```
## Output Data
[['x', 1], ['y', 2]] ^ [['x', 1], ['y', 2]]


## Hints

### Hint 1
To create a list by using square brackets write:
```python
listname = []
```
#### Penalty
20 Points

### Hint 2
To create a list by using the `list()` method write:
```python
listname = list()
```
Remember that this method takes only one input, so use double parenthesis if necessary.

#### Penalty
20 Points