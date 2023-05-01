# Author:Nicoletta Tsiopani :tsiopnicol_99@hotmail.com

# Exercise 9: Python

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
Lists: Indexing

## Subchapter Introduction
Indexing is needed to access the items of a list, using square brackets. 

```python
variable = listname[index]
```
There are two ways of indexing:

Zero indexing: the first item of a list has the index `0`, the second item of the list has the index `1` and so on.

Negative indexing: the last item of a list has the index `-1`, the second last item has the index `-2` and so on.

Slicing is used to access more than one item of a list in one command.

```python
values = listname[start:end]
```

The index `start` is included while the index `end` is not.

The index `start` can be omitted and it is considered that it takes the value `0`. Also, the index `end` can be omitted and it is considered that it takes the index of the last item of the list.

## Exercise Description
Create a list called `colours` which includes the strings `'red'`, `'blue'` and `'yellow'` and print the last item of the list using the negative indexing.

## Code
```python
colours = ['red','blue','yellow']

print(colours[-1])
```
## Output Data
yellow

## Hints

### Hint 1
To access the last item of a list write:

```python
variable = listname[-1]
```

#### Penalty
20 Points

