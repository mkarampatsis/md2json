# Exercise 1:Python

## Chapter
IF-ELIF-ELSE
## Subchapter
Syntax of the if statemen

## Introduction

A conditional statement (also called an if-then statement) is **a statement with a hypothesis followed by a conclusion**. The hypothesis is the first part of the statement, the "if" clause. The conclusion is the second part of the statement, the "then" clause. The conclusion is the result of the hypothesis. So `if-else` statement is used for conditional decision-making. 

In Python, there is no then clause, in contrary the syntax is:
```py3
if condition1:
    do_something
elif condition2:
    do_something_else
else:
    do_something_else
```

And the expressions followed by the keywords `if, elif, else` are some conditions that must always evaluate to `true` or `false`.

## Exercise Description
Write a program that calculates the square of a number (declared by you, as a variable) if the number is greater than 42. The result should only be printed if the number you chose is greater than 42. In any other case the program shouldn't print anything.

## Code
```py3
myNumber = 4

if myNumber > 42:
    print(number * number)
```

## Hints

### Hint 1
To declare a number you simply have to name a variable and set its value to a number, just like below.

```py3
myNumber = 42
```

#### Penalty
20 Points

### Hint 2
To check if a number is greater than an other you have to use `>` operator, just like below.

```py3
if aNumber > another:
    print('Greater')
else:
    print('Less or equal')
```

#### Penalty
20 Points