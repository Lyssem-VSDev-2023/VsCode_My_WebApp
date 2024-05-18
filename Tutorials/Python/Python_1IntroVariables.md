# Introduction to Python + Variables

## Preparation

- Source: [Python with VSCode Tutorial](https://code.visualstudio.com/docs/python/python-tutorial)

- Download Python: [python.org](https://www.python.org/downloads/)

- Check Version in Windows CMD `py -3 --version`

- Check version in VSCode Terminal `py -0` (* means the current version)

- Create a project-specific **`virtual environment`**, to avoid package versions conflicts
  - create non-global environments in VS Code using Venv or Anaconda with Python: Create Environment.
  
  ![VENV](/Tutorials/Python/Res/venv.jpg "VENV")

- create a file named **`hello.py`**

- add the code 

```py
msg = "Roll a dice"
print(msg)
```

- run the code from the Terminal `"python hello.py"` or push the run button at the `top right` (if error, try "py" instead of "python" from command line

- or, right click in the editor => Run Python => Run Python file in the Terminal

- or from the Command Palette (`Ctrl+Shift+P`), select the `Python: Start REPL` command to open a REPL terminal for the currently selected Python interpreter. In the REPL, you can then enter and run lines of code one at a time.

- or select the lines and press `Shift + Enter` to execute the selection
- if you face an issue, remove Python from Windows Aliases: 
![RemoveAliases](/Tutorials/Python/Res/aliasissue.jpg "RemoveAliases")

## Debug Python

- press `F9` to add a breakpoint
- press `F5` to start the debugging
- other debug shortcuts
  - continue (`F5`)
  - step over (`F10`)
  - step into (`F11`)
  - step out (`Shift+F11`)
  - restart (`Ctrl+Shift+F5`)
  - and stop (`Shift+F5`)
- Python Debug Console allow accessing the variables 
  - msg
  - msg.capitalize()
  - msg.split()

## Install and use packages

- packages are how you obtain any number of useful code libraries, typically from [PyPI](https://pypi.org/)
- use the `numpy` package to generate a random number

```py
import numpy as np

msg = "Roll a dice"
print(msg)

print(np.random.randint(1,9))
```

- install `numpy` by executing `py -m pip install numpy` in a `Windows CMD terminal` 
- then from the VSCode Terminal `pip install numpy`


## Python Indentation

- Indentation refers to the spaces at the beginning of a code line.

- Where in other programming languages the indentation in code is for readability only, the indentation in Python is very important.

- Python uses indentation to indicate a block of code.

- The number of spaces is up to you as a programmer, the most common use is four, but it has to be at least one.

- You have to use the same number of spaces in the same block of code, otherwise Python will give you an error:


```py
if 5 > 2:
 print("Five is greater than two!") 
if 5 > 2:
        print("Five is greater than two!") 
```

## Comments

```py
#This is a comment
print("Hello, World!")
-------------------------------------------
print("Hello, World!") #This is a comment
-------------------------------------------
#This is a comment
#written in
#more than just one line
print("Hello, World!")
------------------------------------------
"""
This is a comment
written in
more than just one line
"""
print("Hello, World!")

```

## Variables

Python has no command for declaring a variable. A variable is created the moment you first assign a value to it.

```py
x = 5
y = "John"
print(x)
print(y)
```

Variables do not need to be declared with any particular type, and can even change type after they have been set.

```py
x = 4       # x is of type int
x = "Sally" # x is now of type str
print(x)
```

### Casting

```py
x = str(3)    # x will be '3'
y = int(3)    # y will be 3
z = float(3)  # z will be 3.0
```

### Get the Type

```py
x = 5
y = "John"
print(type(x))
print(type(y))
```

### Single or Double Quotes?

```py
x = "John"
# is the same as
x = 'John'
```

### Case-Sensitive

```py
a = 4
A = "Sally"
#A will not overwrite a
```

## Variables assignments

### Variable Names

**Camel Case**

```py
myVariableName = "John"
```

**Pascal Case**

```py
MyVariableName = "John"
```

**Snake Case**

```py
my_variable_name = "John"
```

## Many Values to Multiple Variables

```py
x, y, z = "Orange", "Banana", "Cherry"
print(x)
print(y)
print(z)
```

## One Value to Multiple Variables

x = y = z = "Orange"
print(x)
print(y)
print(z)

## Unpack a Collection

```py
fruits = ["apple", "banana", "cherry"]
x, y, z = fruits
print(x)
print(y)
print(z)
```

## Output Variables

```py
x = "Python is awesome"
print(x)
#------------------------
x = "Python"
y = "is"
z = "awesome"
print(x, y, z)
#------------------------
x = "Python "
y = "is "
z = "awesome"
print(x + y + z)
#------------------------
x = 5
y = 10
print(x + y)
#------------------------
x = 5
y = "John"
print(x + y) # => Error: Not Allowed
```

## Variables scope

**Create a variable outside of a function, and use it inside the function**
```py
x = "awesome"

def myfunc():
  print("Python is " + x)

myfunc()
```

**Create a variable inside a function, with the same name as the global variable**


```py
x = "awesome"

def myfunc():
  x = "fantastic"
  print("Python is " + x)

myfunc()

print("Python is " + x)
```

**If you use the `global` keyword, the variable belongs to the global scope:**

```py
def myfunc():
  global x
  x = "fantastic"

myfunc()

print("Python is " + x)
```

## Built-in Data Types

| *Type*             | *keyword*                          |
| ------------------ | ---------------------------------- |
| **Text Type**      | `str`                              |
| **Numeric Types**  | `int`, `float`, `complex`          |
| **Sequence Types** | `list`, `tuple`, `range`           |
| **Mapping Type**   | `dict`                             |
| **Set Types**      | `set`, `frozenset`                 |
| **Boolean Type**   | `bool`                             |
| **Binary Types**   | `bytes`, `bytearray`, `memoryview` |
| **None Type**      | `NoneType`                         |

## Setting the Data Type

| Example                                      | Data Type    |
| -------------------------------------------- | ------------ |
| x = "Hello World"                            | `str`        |
| x = 20                                       | `int`        |
| x = 20.5                                     | `float`      |
| x = 1j                                       | `complex`    |
| x = ["apple", "banana", "cherry"]            | `list`       |
| x = ("apple", "banana", "cherry")            | `tuple`      |
| x = range(6)                                 | `range`      |
| x = {"name" : "John", "age" : 36}            | `dict`       |
| x = {"apple", "banana", "cherry"}            | `set`        |
| x = frozenset({"apple", "banana", "cherry"}) | `frozenset`  |
| x = True                                     | `bool`       |
| x = b"Hello"                                 | `bytes`      |
| x = bytearray(5)                             | `bytearray`  |
| x = memoryview(bytes(5))                     | `memoryview` |
| x = None                                     | `NoneType`   |


Setting the Specific Data Type

| Example                                      | Data Type    |
| -------------------------------------------- | ------------ |
| x = str("Hello World")                       | `str`        |
| x = int(20)                                  | `int`        |
| x = float(20.5)                              | `float`      |
| x = complex(1j)                              | `complex`    |
| x = list(("apple", "banana", "cherry"))      | `list`       |
| x = tuple(("apple", "banana", "cherry"))     | `tuple`      |
| x = range(6)                                 | `range`      |
| x = dict(name="John", age=36)                | `dict`       |
| x = set(("apple", "banana", "cherry"))       | `set`        |
| x = frozenset(("apple", "banana", "cherry")) | `frozenset`  |
| x = bool(5)                                  | `bool`       |
| x = bytes(5)                                 | `bytes`      |
| x = bytearray(5)                             | `bytearray`  |
| x = memoryview(bytes(5))                     | `memoryview` |


