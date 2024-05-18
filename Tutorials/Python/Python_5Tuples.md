# Tuples

## Python Tuples

- Tuples are used to store multiple items in a single variable.
- Tuple is one of 4 built-in data types in Python used to store collections of data, the other 3 are List, Set, and Dictionary, all with different qualities and usage.
- A tuple is a collection which is ordered and unchangeable.
- Tuples are written with round brackets `( )`.
- Ordered: When we say that tuples are ordered, it means that the items have a defined order, and that order will not change.
- Unchangeable: Tuples are unchangeable, meaning that we cannot change, add or remove items after the tuple has been created.
- Allow Duplicates: Since tuples are indexed, they can have items with the same value:

```py
thistuple = ("apple", "banana", "cherry", "apple", "cherry")
print(thistuple)
```

### Tuple Length

```py
# Print the number of items in the tuple:

thistuple = ("apple", "banana", "cherry")
print(len(thistuple))
#3
```

### Create Tuple With One Item

```py
# One item tuple, remember the comma:
thistuple = ("apple",)
print(type(thistuple))
#<class 'tuple'>

# NOT a tuple
thistuple = ("apple")
print(type(thistuple))
#<class 'str'>
```

### Tuple Items - Data Types

```py
# String, int and boolean data types:
tuple1 = ("apple", "banana", "cherry")
tuple2 = (1, 5, 7, 9, 3)
tuple3 = (True, False, False)


# A tuple with strings, integers and boolean values:
tuple1 = ("abc", 34, True, 40, "male")
```

### The tuple() Constructor

Using the tuple() method to make a tuple:

```py
thistuple = tuple(("apple", "banana", "cherry")) # note the double round-brackets
print(thistuple)
```

## Access Tuple Items

### Access using Index

```py
# Print the second item in the tuple:
thistuple = ("apple", "banana", "cherry")
print(thistuple[1])
# banana
```

### Negative Indexing

```py
thistuple = ("apple", "banana", "cherry")
print(thistuple[-1])
# cherry
```

### Range of Indexes

Return the third, fourth, and fifth item:

```py
thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[2:5])

#This will return the items from position 2 to 5.
#('cherry', 'orange', 'kiwi')
#Remember that the first item is position 0,
#and note that the item in position 5 is NOT included

#---------------------

# This example returns the items from the beginning to, but NOT included, "kiwi":

thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[:4])
#('apple', 'banana', 'cherry', 'orange')

#---------------------

# This example returns the items from "cherry" and to the end:

thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[2:])
```

### Range of Negative Indexes

```py
# This example returns the items from index -4 (included) to index -1 (excluded)

thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
print(thistuple[-4:-1])
#('cherry', 'orange', 'kiwi', 'melon', 'mango')
```

### Check if Item Exists

```py
thistuple = ("apple", "banana", "cherry")
if "apple" in thistuple:
  print("Yes, 'apple' is in the fruits tuple")
#Yes, 'apple' is in the fruits tuple
```

## Update Tuples

Tuples are unchangeable, meaning that you cannot change, add, or remove items once the tuple is created.

But there are some workarounds.

### Change Tuple Values

```py
# Convert the tuple into a list to be able to change it:

x = ("apple", "banana", "cherry")
y = list(x)
y[1] = "kiwi"
x = tuple(y)

print(x)
#("apple", "kiwi", "cherry")
```

### Add Items

**1. Convert into a list:**

```py
# Convert the tuple into a list, add "orange", and convert it back into a tuple:

thistuple = ("apple", "banana", "cherry")
y = list(thistuple)
y.append("orange")
thistuple = tuple(y)
#('apple', 'banana', 'cherry', 'orange')
```

**2. Add tuple to a tuple:**

```py
thistuple = ("apple", "banana", "cherry")
y = ("orange",)
thistuple += y

print(thistuple)
#('apple', 'banana', 'cherry', 'orange')
```

### Remove Items

```py
#Convert the tuple into a list, remove "apple", and convert it back into a tuple:

thistuple = ("apple", "banana", "cherry")
y = list(thistuple)
y.remove("apple")
thistuple = tuple(y)
#('banana', 'cherry')
```

### Delete the Tuple

```py
thistuple = ("apple", "banana", "cherry")
del thistuple
print(thistuple) 
#this will raise an error because the tuple no longer exists
```

## Unpack Tuples

When we create a tuple, we normally assign values to it. This is called "packing" a tuple:

```py
fruits = ("apple", "banana", "cherry")
```

But, in Python, we are also allowed to extract the values back into variables. This is called "unpacking":

```py
fruits = ("apple", "banana", "cherry")

(green, yellow, red) = fruits

print(green)
print(yellow)
print(red)

apple
banana
cherry
```

## Unpack Using Asterisk*

If the number of variables is less than the number of values, you can add an * to the variable name and the values will be assigned to the variable as a list:

```py
fruits = ("apple", "banana", "cherry", "strawberry", "raspberry")

(green, yellow, *red) = fruits

print(green)
print(yellow)
print(red)

apple
banana
['cherry', 'strawberry', 'raspberry']
```

If the asterisk is added to another variable name than the last, Python will assign values to the variable until the number of values left matches the number of variables left.

```py
fruits = ("apple", "mango", "papaya", "pineapple", "cherry")

(green, *tropic, red) = fruits

print(green)
print(tropic)
print(red)

apple
['mango', 'papaya', 'pineapple']
cherry
```

## Loop Tuples

### Loop Through a Tuple

```py
# Iterate through the items and print the values:

thistuple = ("apple", "banana", "cherry")
for x in thistuple:
  print(x)

apple
banana
cherry
```

### Loop Through the Index Numbers

```py
#Use the range() and len() functions to create a suitable iterable.
#Print all items by referring to their index number:

thistuple = ("apple", "banana", "cherry")
for i in range(len(thistuple)):
  print(thistuple[i])

apple
banana
cherry
```

### Using a While Loop

```py
#Print all items, using a while loop to go through all the index numbers:

thistuple = ("apple", "banana", "cherry")
i = 0
while i < len(thistuple):
  print(thistuple[i])
  i = i + 1

apple
banana
cherry
```

## Join Tuples

```py
tuple1 = ("a", "b" , "c")
tuple2 = (1, 2, 3)

tuple3 = tuple1 + tuple2
print(tuple3)
#('a', 'b', 'c', 1, 2, 3)
```

## Multiply Tuples

```py
fruits = ("apple", "banana", "cherry")
mytuple = fruits * 2

print(mytuple)
#('apple', 'banana', 'cherry', 'apple', 'banana', 'cherry')
```

## Tuple Methods

|	Method	|	Description	|
|	-	|	-	|
|	`count()`	|	Returns the number of times a specified value occurs in a tuple	|
|	`index()`	|	Searches the tuple for a specified value and returns the position of where it was found	|

