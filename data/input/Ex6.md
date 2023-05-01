# Author:Nicoletta Tsiopani :tsiopnicol_99@hotmail.com

# Exercise 6: Python

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
Lists: List Creation by Range() Function

## Subchapter Introduction
A list can be created by Range() Function, by using the `list()` method.

```python
listname = list(range(start,stop,step))
```

The values `start`, `stop` and `step` are all integers. 

This line creates a list that contains integers from `start` to `stop`, where the value of `stop` is not included, and the interval between the list items is the `step`. If `step` is omitted, then it takes the value `1`. If `start` is omitter, then in takes the value `0` by default. The value `stop` is the only one which is required in this command.

## Exercise Description
Create a list that contains all the numbers between `1` and `100` (included), that are multiples of `10` (i.e. `10`, `20`, `30`, ...), by using the Range() Function. Name the list `ten` and print it.

## Code
```python
ten = list(range(10,101,10))

print(ten)
```
## Output Data
[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

## Hints

### Hint 1
To create a list by using the Range() Function write:
```python
listname = list(range(start,stop,step))
```
Remember that the `stop` value is not included.

#### Penalty
20 Points

### Hint 2
The first item of the list is `10`, so this must be the `start` value.

#### Penalty
20 Points
