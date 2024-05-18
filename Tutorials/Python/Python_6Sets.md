# Sets

## Python Sets

- Sets are used to store multiple items in a single variable. they use Curly Braces `{ }`
- A set is a collection which is unordered, unchangeable (Set items are unchangeable, but you can remove items and add new items), and unindexed.
  - Unordered: Unordered means that the items in a set do not have a defined order.
  - Set items can appear in a different order every time you use them, and cannot be referred to by index or key.
  - Unchangeable: Set items are unchangeable, meaning that we cannot change the items after the set has been created.
  - Once a set is created, you cannot change its items, but you can remove items and add new items.
  - Duplicates Not Allowed: Sets cannot have two items with the same value.

## Sets Duplicate Considerations

```py
thisset = {"apple", "banana", "cherry"}
print(thisset)
#{'apple', 'cherry', 'banana'}

#----------------------

# Duplicate values will be ignored:

thisset = {"apple", "banana", "cherry", "apple"}
print(thisset)
#{'banana', 'cherry', 'apple'}

#----------------------

#True and 1 is considered the same value:

thisset = {"apple", "banana", "cherry", True, 1, 2}
print(thisset)
#{True, 2, 'banana', 'cherry', 'apple'}

#----------------------

# False and 0 is considered the same value:

thisset = {"apple", "banana", "cherry", False, True, 0}
print(thisset)
#{False, True, 'cherry', 'apple', 'banana'}
```

### Get the Length of a Set

```py
#Get the number of items in a set:

thisset = {"apple", "banana", "cherry"}
print(len(thisset))

#3
```

### Set Items - Data Types

```py
#String, int and boolean data types:

set1 = {"apple", "banana", "cherry"}
set2 = {1, 5, 7, 9, 3}
set3 = {True, False, False}

#A set with strings, integers and boolean values:

set1 = {"abc", 34, True, 40, "male"}
```

### Set type()

```py
<class 'set'>
```

```py
#What is the data type of a set?

myset = {"apple", "banana", "cherry"}
print(type(myset))
#<class 'set'>
```

## The set() Constructor

Using the set() constructor to make a set:

```py
thisset = set(("apple", "banana", "cherry")) # note the double round-brackets
print(thisset)
#{'cherry', 'apple', 'banana'}
```

## Access Set Items

### Loop through the set

```py
thisset = {"apple", "banana", "cherry"}

for x in thisset:
  print(x)

cherry
apple
banana
```

### Check Set Items 

```py
# Check if "banana" is present in the set:

thisset = {"apple", "banana", "cherry"}
print("banana" in thisset)
#True

#----------

# Check if "banana" is NOT present in the set:

thisset = {"apple", "banana", "cherry"}
print("banana" not in thisset)
#False

```

## Change Items

>**Once a set is created, you cannot change its items, but you can add new items.**


### Add Set Items (add)

```py
# Add an item to a set, using the add() method:

thisset = {"apple", "banana", "cherry"}
thisset.add("orange")
print(thisset)
#{'orange', 'apple', 'cherry', 'banana'}
```

### Add Sets(update)

```py
thisset = {"apple", "banana", "cherry"}
tropical = {"pineapple", "mango", "papaya"}
thisset.update(tropical)
print(thisset)
#{'apple', 'mango', 'cherry', 'pineapple', 'banana', 'papaya'}
```

### Add Any Iterable

```py
thisset = {"apple", "banana", "cherry"}
mylist = ["kiwi", "orange"]
thisset.update(mylist)
print(thisset)
#{'banana', 'cherry', 'apple', 'orange', 'kiwi'}
```

## Remove Set Items

### Remove


```py
#Remove "banana" by using the remove() method:

thisset = {"apple", "banana", "cherry"}
thisset.remove("banana")
print(thisset)

#Note: If the item to remove does not exist, remove() will raise an error.
```


### Discard

```py
# Remove "banana" by using the discard() method:

thisset = {"apple", "banana", "cherry"}
thisset.discard("banana")
print(thisset)

#Note: If the item to remove does not exist, discard() will NOT raise an error.
```

### Pop

```py
# Remove a random item by using the pop() method:

thisset = {"apple", "banana", "cherry"}
x = thisset.pop()
print(x)
print(thisset)

# The return value of the pop() method is the removed item.
# Note: Sets are unordered, so when using the pop() method, you do not know which item that gets removed.
```

### Clear

```py
#The clear() method empties the set:

thisset = {"apple", "banana", "cherry"}
thisset.clear()
print(thisset)
```

### Delete 

```py
#The del keyword will delete the set completely:

thisset = {"apple", "banana", "cherry"}
del thisset
print(thisset)
```

## Loop Sets

```py
# You can loop through the set items by using a for loop:

thisset = {"apple", "banana", "cherry"}
for x in thisset:
  print(x)
```


## Join Sets

There are several ways to join two or more sets in Python.

- The `union()` and `update()` methods joins all items from both sets.

- The `intersection()` method keeps ONLY the duplicates.

- The `difference()` method keeps the items from the first set that are not in the other set(s).

- The `symmetric_difference()` method keeps all items EXCEPT the duplicates.


### Union

```py
# Join set1 and set2 into a new set:

set1 = {"a", "b", "c"}
set2 = {1, 2, 3}

set3 = set1.union(set2)
print(set3)
#{'a', 'c', 3, 2, 1, 'b'}
```

### Join sets using | operator

```py
set1 = {"a", "b", "c"}
set2 = {1, 2, 3}

set3 = set1 | set2
print(set3)
#{3, 'a', 2, 'c', 1, 'b'}
```

### Join Multiple Sets

```py
set1 = {"a", "b", "c"}
set2 = {1, 2, 3}
set3 = {"John", "Elena"}
set4 = {"apple", "bananas", "cherry"}

myset = set1.union(set2, set3, set4)

#-----------------

set1 = {"a", "b", "c"}
set2 = {1, 2, 3}
set3 = {"John", "Elena"}
set4 = {"apple", "bananas", "cherry"}

myset = set1 | set2 | set3 |set4
print(myset)
```

### Join a Set and a Tuple

```py
# Join a set with a tuple:

x = {"a", "b", "c"}
y = (1, 2, 3)

z = x.union(y)
print(z)

# The result will be a set.
# Note: The  | operator only allows you to join sets with sets, and not with other data types like you can with the  union() method.
```

### Update

```py
# The update() method inserts the items in set2 into set1:

set1 = {"a", "b" , "c"}
set2 = {1, 2, 3}

set1.update(set2)
print(set1)

# Note: Both union() and update() will exclude any duplicate items.
# The update() method inserts all items from one set into another.
# The update() changes the original set, and does not return a new set.
```

## Intersection



```py
# Join set1 and set2, but keep only the duplicates:

set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}

set3 = set1.intersection(set2)
print(set3)
#{'apple'}

# The intersection() method will return a new set, that only contains the items that are present in both sets (Keep ONLY the duplicates).
```

```py
# You can use the & operator instead of the intersection() method, and you will get the same result.

set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}

set3 = set1 & set2
print(set3)
#{'apple'}

#Note: The & operator only allows you to join sets with sets, and not with other data types like you can with the intersection() method.
```

```py
# The intersection_update() method will also keep ONLY the duplicates, but it will change the original set instead of returning a new set.

#Keep the items that exist in both set1, and set2:

set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}

set1.intersection_update(set2)

print(set1)
#{'apple'}

#-----------

# Join sets that contains the values True, False, 1, and 0, and see what is considered as duplicates:

set1 = {"apple", 1,  "banana", 0, "cherry"}
set2 = {False, "google", 1, "apple", 2, True}

set3 = set1.intersection(set2)

print(set3)
#{False, True, 'apple'}
```

## Difference

```py
# The difference() method will return a new set that will contain only the items from the first set that are not present in the other set.

set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}

set3 = set1.difference(set2)

print(set3)
# {'banana', 'cherry'}

```

```py
# You can use the - operator instead of the difference() method, and you will get the same result.

set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}

set3 = set1 - set2
print(set3)
# {'banana', 'cherry'}

# Note: The - operator only allows you to join sets with sets, and not with other data types like you can with the difference() method.
```

```py
# The difference_update() method will also keep the items from the first set that are not in the other set, but it will change the original set instead of returning a new set.

set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}

set1.difference_update(set2)

print(set1)
#{'banana', 'cherry'}
```

## Symmetric Differences

# The symmetric_difference() method will keep only the elements that are NOT present in both sets.

```py
set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}

set3 = set1.symmetric_difference(set2)

print(set3)
#{'google', 'banana', 'microsoft', 'cherry'}
```

# You can use the ^ operator instead of the symmetric_difference() method, and you will get the same result.

```py
set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}

set3 = set1 ^ set2
print(set3)
#{'google', 'banana', 'microsoft', 'cherry'} 

#Note: The ^ operator only allows you to join sets with sets, and not with other data types like you can with the symmetric_difference() method.
```

```py
# The symmetric_difference_update() method will also keep all but the duplicates, but it will change the original set instead of returning a new set.

set1 = {"apple", "banana", "cherry"}
set2 = {"google", "microsoft", "apple"}

set1.symmetric_difference_update(set2)

print(set1)
#{'google', 'banana', 'microsoft', 'cherry'}
```

## Set Methods

|	Method	|	Shortcut	|	Description	|
|	-	|	-	|	-	|
|	`add()`	|		|	Adds an element to the set	|
|	`clear()`	|		|	Removes all the elements from the set	|
|	`copy()`	|		|	Returns a copy of the set	|
|	`difference()`	|	`-`	|	Returns a set containing the difference between two or more sets	|
|	`difference_update()`	|	`-=`	|	Removes the items in this set that are also included in another, specified set	|
|	`discard()`	|		|	Remove the specified item	|
|	`intersection()`	|	`&`	|	Returns a set, that is the intersection of two other sets	|
|	`intersection_update()`	|	`&=`	|	Removes the items in this set that are not present in other, specified set(s)	|
|	`isdisjoint()`	|		|	Returns whether two sets have a intersection or not	|
|	`issubset()`	|	`<=`	|	Returns whether another set contains this set or not	|
|		|	`<`	|	Returns whether all items in this set is present in other, specified set(s)	|
|	`issuperset()`	|	`>=`	|	Returns whether this set contains another set or not	|
|		|	`>`	|	Returns whether all items in other, specified set(s) is present in this set	|
|	`pop()`	|		|	Removes an element from the set	|
|	`remove()`	|		|	Removes the specified element	|
|	`symmetric_difference()`	|	`^`	|	Returns a set with the symmetric differences of two sets	|
|	`symmetric_difference_update()`	|	`^=`	|	Inserts the symmetric differences from this set and another	|
|	`union()`	|	`\|`	|	Return a set containing the union of sets	|
|	`update()`	|	`\|=`	|	Update the set with the union of this set and others	|












