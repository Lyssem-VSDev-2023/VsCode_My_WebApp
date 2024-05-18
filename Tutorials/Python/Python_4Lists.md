# Lists

## Python Lists

### Python Collections (Arrays)

There are four collection data types in the Python programming language:
- **`List`** is a collection which is ordered and changeable. Allows duplicate members.
- **`Tuple`** is a collection which is ordered and unchangeable. Allows duplicate members.
- **`Set`** is a collection which is unordered, unchangeable*, and unindexed. No duplicate members.
- **`Dictionary`** is a collection which is ordered** and changeable. No duplicate members.

>*Set items are unchangeable, but you can remove and/or add items whenever you like.
>
>**As of Python version 3.7, dictionaries are ordered. In Python 3.6 and earlier, dictionaries are unordered.
>
>- When we say that lists are ordered, it means that the items have a defined order, and that order will not change.
>- If you add new items to a list, the new items will be placed at the end of the list.
>- The list is changeable, meaning that we can change, add, and remove items in a list after it has been created.
>- Allow duplicate means since lists are indexed, lists can have items with the same



### Python Lists Characteristics

- Lists are used to store multiple items in a single variable.
- Lists are one of 4 built-in data types in Python used to store collections of data, the other 3 are Tuple, Set, and Dictionary, all with different qualities and usage.
- Lists are created using square brackets [ ]

```py
thislist = ["apple", "banana", "cherry"]
print(thislist) 
# ['apple', 'banana', 'cherry']
```

- List items are ordered, changeable, and allow duplicate values.
- List items are indexed, the first item has index [0], the second item has index [1] etc.

### List Length

```py
thislist = ["apple", "banana", "cherry"]
print(len(thislist))
```


### List Items - Data Types

```py
# String, int and boolean data types:
list1 = ["apple", "banana", "cherry"]
list2 = [1, 5, 7, 9, 3]
list3 = [True, False, False]

# A list can contain different data types:
list1 = ["abc", 34, True, 40, "male"]
```

### type()

From Python's perspective, lists are defined as objects with the data type 'list'

`<class 'list'>`

```py
mylist = ["apple", "banana", "cherry"]
print(type(mylist))
#<class 'list'>
```

### The list() Constructor

```py
# Using the list() constructor to make a List:
thislist = list(("apple", "banana", "cherry")) # note the double round-brackets
print(thislist)
# ['apple', 'banana', 'cherry']
```

```py
## Access List Items

# Print the second item of the list:

thislist = ["apple", "banana", "cherry"]
print(thislist[1]) 
# banana

# --------------

# Negative Indexing: Print the last item of the list

thislist = ["apple", "banana", "cherry"]
print(thislist[-1])
# cherry
```

## Access List Items

### Range of Indexes

```py
# Return the third, fourth, and fifth item:

thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[2:5])
# ['cherry', 'orange', 'kiwi']
# The search will start at index 2 (included) and end at index 5 (not included).

# --------------

# This example returns the items from the beginning to, but NOT including, "kiwi":

thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[:4])
# ['apple', 'banana', 'cherry', 'orange']

# --------------

# This example returns the items from "cherry" to the end:

thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[2:])
# ['cherry', 'orange', 'kiwi', 'melon', 'mango']
```

### Range of Negative Indexes

```py

#This example returns the items from "orange" (-4) to, but NOT including "mango" (-1):

thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[-4:-1])
# ['orange', 'kiwi', 'melon']

```

### Check if Item Exists

Check if "apple" is present in the list:

```py
thislist = ["apple", "banana", "cherry"]
if "apple" in thislist:
  print("Yes, 'apple' is in the fruits list")

# Yes, 'apple' is in the fruits list
```

## Change List Items

### Change Item Value

```py
thislist = ["apple", "banana", "cherry"]
thislist[1] = "blackcurrant"
print(thislist)
# ['apple', 'blackcurrant', 'cherry']
```

### Change a Range of Item Values

```py
# Change the values "banana" and "cherry" with the values "blackcurrant" and "watermelon":

thislist = ["apple", "banana", "cherry", "orange", "kiwi", "mango"]
thislist[1:3] = ["blackcurrant", "watermelon"]
print(thislist)
# ['apple', 'blackcurrant', 'watermelon', 'orange', 'kiwi', 'mango']

# -------------

# Change the second value by replacing it with two new values:

thislist = ["apple", "banana", "cherry"]
thislist[1:2] = ["blackcurrant", "watermelon"]
print(thislist)
# ['apple', 'blackcurrant', 'watermelon', 'cherry']

# -------------

# Change the second and third value by replacing it with one value:

thislist = ["apple", "banana", "cherry"]
thislist[1:3] = ["watermelon"]
print(thislist)
# ['apple', 'watermelon']
```

## Add/Remove List Items

### Append Items

```py
# To add an item to the end of the list, use the append() method:

thislist = ["apple", "banana", "cherry"]
thislist.append("orange")
print(thislist)
#['apple', 'banana', 'cherry', 'orange']
```

### Insert Items

```py
#Insert "watermelon" as the third item:

thislist = ["apple", "banana", "cherry"]
thislist.insert(2, "watermelon")
print(thislist)
# ['apple', 'banana', 'watermelon', 'cherry']
```

### Extend List

```py
# Add the elements of tropical to thislist:

thislist = ["apple", "banana", "cherry"]
tropical = ["mango", "pineapple", "papaya"]
thislist.extend(tropical)
print(thislist)
# ['apple', 'banana', 'cherry', 'mango', 'pineapple', 'papaya']
```

### Add Any Iterable (extend)

```py
# Add elements of a tuple to a list:

thislist = ["apple", "banana", "cherry"]
thistuple = ("kiwi", "orange")
thislist.extend(thistuple)
print(thislist)
#['apple', 'banana', 'cherry', 'kiwi', 'orange']
```

### Remove Specified Item

```py
# Remove "banana":

thislist = ["apple", "banana", "cherry"]
thislist.remove("banana")
print(thislist)
#['apple', 'cherry']

#-----------------

# Remove the first occurance of "banana":

thislist = ["apple", "banana", "cherry", "banana", "kiwi"]
thislist.remove("banana")
print(thislist)
# ['apple', 'cherry', 'banana', 'kiwi']

```

### Remove Specified Index

```py
# Remove the second item:

thislist = ["apple", "banana", "cherry"]
thislist.pop(1)
print(thislist)
# ["apple", "cherry"]

#-----------------

# If you do not specify the index, the pop() method removes the last item.
thislist = ["apple", "banana", "cherry"]
thislist.pop()
print(thislist)
# ["apple", "banana"]

#-----------------

# The del keyword also removes the specified index:
# Remove the first item:

thislist = ["apple", "banana", "cherry"]
del thislist[0]
print(thislist)
#['banana', 'cherry']

#-----------------

# The del keyword can also delete the list completely.
# Delete the entire list:

thislist = ["apple", "banana", "cherry"]
del thislist
# Error because the list is now deleted 
```

### Clear the List

The clear() method empties the list. The list still remains, but it has no content.

```py
thislist = ["apple", "banana", "cherry"]
thislist.clear()
print(thislist)
# []
```

## Loop Lists

###  Loop Through a List

```py
thislist = ["apple", "banana", "cherry"]
for x in thislist:
  print(x)

apple
banana
cherry
```

### Loop Through the Index Numbers

```py
thislist = ["apple", "banana", "cherry"]
for i in range(len(thislist)):
  print(thislist[i])

apple
banana
cherry

#The iterable created in the example above is [0, 1, 2].
```

### Using a While Loop

```py
thislist = ["apple", "banana", "cherry"]
i = 0
while i < len(thislist):
  print(thislist[i])
  i = i + 1

apple
banana
cherry  
```

### Looping Using List Comprehension

```py
thislist = ["apple", "banana", "cherry"]
[print(x) for x in thislist]

 apple
 banana
 cherry
```

## List Comprehension

List comprehension offers a shorter syntax when you want to create a new list based on the values of an existing list.

The Syntax

```py
newlist = [expression for item in iterable if condition == True]
```

```py
#  Without list comprehension

fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = []

for x in fruits:
  if "a" in x:
    newlist.append(x)

print(newlist)

# ['apple', 'banana', 'mango']

# --------------

# With list comprehension

fruits = ["apple", "banana", "cherry", "kiwi", "mango"]

newlist = [x for x in fruits if "a" in x]

print(newlist)

# ['apple', 'banana', 'mango']
```

### Comprehension & Usage

```py
# ------ Condition

fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = [x for x in fruits if x != "apple"]
print(newlist)
# ['banana', 'cherry', 'kiwi', 'mango']

# ------ No if
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = [x for x in fruits]
print(newlist)
# ['apple', 'banana', 'cherry', 'kiwi', 'mango']

# ------ Iterable
newlist = [x for x in range(10)]
print(newlist)
# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# ------ Iterable with Condition
newlist = [x for x in range(10) if x < 5]
print(newlist)
# [0, 1, 2, 3, 4]

# ------ Expression
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = [x.upper() for x in fruits]
print(newlist)
# ['APPLE', 'BANANA', 'CHERRY', 'KIWI', 'MANGO']

# ------  Set all values in the new list to 'hello'
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = ['hello' for x in fruits]
print(newlist)
# ['hello', 'hello', 'hello', 'hello', 'hello']

# ------ Return "orange" instead of "banana":
fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = [x if x != "banana" else "orange" for x in fruits]
print(newlist)
# ['apple', 'orange', 'cherry', 'kiwi', 'mango']
```

## Sort Lists

```py
# Sort List Alphanumerically ascending, by default:

thislist = ["orange", "mango", "kiwi", "pineapple", "banana"]
thislist.sort()
print(thislist)
# ['banana', 'kiwi', 'mango', 'orange', 'pineapple']

#-------------------

# Sort the list numerically:

thislist = [100, 50, 65, 82, 23]
thislist.sort()
print(thislist)
# [23, 50, 65, 82, 100]

#-------------------

# Sort the Alphabetical list descending

thislist = ["orange", "mango", "kiwi", "pineapple", "banana"]
thislist.sort(reverse = True)
print(thislist)
#['pineapple', 'orange', 'mango', 'kiwi', 'banana']

#-------------------

# Sort the Numerci list descending:

thislist = [100, 50, 65, 82, 23]
thislist.sort(reverse = True)
print(thislist)
# [100, 82, 65, 50, 23]

#-------------------

# Customize Sort Function

# The function will return a number that will be used to sort the list (the lowest number first):
# Sort the list based on how close the number is to 50:

def myfunc(n):
  return abs(n - 50)

thislist = [100, 50, 65, 82, 23]
thislist.sort(key = myfunc)
print(thislist)
# [50, 65, 23, 82, 100]

#-------------------

# Case Insensitive Sort

# By default the sort() method is case sensitive, resulting in all capital letters being sorted before lower case letters:
# Case sensitive sorting can give an unexpected result:

thislist = ["banana", "Orange", "Kiwi", "cherry"]
thislist.sort()
print(thislist)
# ['Kiwi', 'Orange', 'banana', 'cherry']

# So if you want a case-insensitive sort function, use str.lower as a key function:

thislist = ["banana", "Orange", "Kiwi", "cherry"]
thislist.sort(key = str.lower)
print(thislist)
# ['banana', 'cherry', 'Kiwi', 'Orange']

#-------------------

# Reverse Order

# The reverse() method reverses the current sorting order of the elements.

thislist = ["banana", "Orange", "Kiwi", "cherry"]
thislist.reverse()
print(thislist)
# ['cherry', 'Kiwi', 'Orange', 'banana']
```

## Copy a List

You cannot copy a list simply by typing `list2` = `list1`, because: `list2` will only be a reference to `list1`, and changes made in `list1` will automatically also be made in `list2`.

```py
thislist = ["apple", "banana", "cherry"]
mylist = thislist.copy()
print(mylist)

# or

thislist = ["apple", "banana", "cherry"]
mylist = list(thislist)
print(mylist)
```

## Join Lists

```py
list1 = ["a", "b", "c"]
list2 = [1, 2, 3]

list3 = list1 + list2
print(list3)
#['a', 'b', 'c', 1, 2, 3]

#-------------

list1 = ["a", "b" , "c"]
list2 = [1, 2, 3]

for x in list2:
  list1.append(x)

print(list1)
#['a', 'b', 'c', 1, 2, 3]

#-------------

list1 = ["a", "b" , "c"]
list2 = [1, 2, 3]

list1.extend(list2)
print(list1)
#['a', 'b', 'c', 1, 2, 3]
```

## List Methods


|	Method	|	Description	|
|	-	|	-	|
|	`append()`	|	Adds an element at the end of the list	|
|	`clear()`	|	Removes all the elements from the list	|
|	`copy()`	|	Returns a copy of the list	|
|	`count()`	|	Returns the number of elements with the specified value	|
|	`extend()`	|	Add the elements of a list (or any iterable), to the end of the current list	|
|	`index()`	|	Returns the index of the first element with the specified value	|
|	`insert()`	|	Adds an element at the specified position	|
|	`pop()`	|	Removes the element at the specified position	|
|	`remove()`	|	Removes the item with the specified value	|
|	`reverse()`	|	Reverses the order of the list	|
|	`sort()`	|	Sorts the list	|












