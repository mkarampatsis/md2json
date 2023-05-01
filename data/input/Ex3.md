# Author:Nicoletta Tsiopani :tsiopnicol_99@hotmail.com

# Exercise 3: Python

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
Lists: Different Ways to Create List

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
Create a list that contains the strings `'red'`. `'blue'` and  `'yellow'`, using the `list()` method. Name the list `colours` and print it.

## Code
```python
colours = list(('red','blue','yellow'))

print(colours)
```
## Output Data
['red', 'blue', 'yellow']


## Hints

### Hint 1
To create a list by using the `list()` method write:
```python
listname = list()
```
Remember that this method takes only one input, so use double parenthesis if necessary.

#### Penalty
20 Points