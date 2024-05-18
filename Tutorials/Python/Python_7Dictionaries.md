# Dictionaries

## Python Dictionaries

- Dictionaries are used to store data values in key:value pairs.
- A dictionary is a collection which is ordered*, changeable and do not allow duplicates.
- Dictionaries are written with curly brackets `{ }`, and have keys and values:


```py
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict)
#{'brand': 'Ford', 'model': 'Mustang', 'year': 1964}
```

### Dictionary Length

```py
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964,
  "year": 2020
}
print(len(thisdict))
#3
```

### Dictionary Items - Data Types

```py
#String, int, boolean, and list data types:

thisdict = {
  "brand": "Ford",
  "electric": False,
  "year": 1964,
  "colors": ["red", "white", "blue"]
}
#{'brand': 'Ford', 'electric': False, 'year': 1964, 'colors': ['red', 'white', 'blue']}
```

### type()

```py
<class 'dict'>
```

```py
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(type(thisdict))
#<class 'dict'>
```

### The dict() Constructor

```py
#Using the dict() method to make a dictionary:

thisdict = dict(name = "John", age = 36, country = "Norway")
print(thisdict)
#{'name': 'John', 'age': 36, 'country': 'Norway'}
```

## Access Dictionary Items

### Accessing Items

```py
#Get the value of the "model" key:

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
x = thisdict["model"]
#Mustang

#--- OR 

thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
x = thisdict.get("model")
print(x)
#Mustang
```

### Get Keys

```py
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

x = thisdict.keys()

print(x)
#dict_keys(['brand', 'model', 'year'])
```

```py
# Add a new item to the original dictionary, and see that the keys list gets updated as well:

car = {
"brand": "Ford",
"model": "Mustang",
"year": 1964
}

x = car.keys()

print(x) #before the change
#dict_keys(['brand', 'model', 'year'])

car["color"] = "white"

print(x) #after the change
#dict_keys(['brand', 'model', 'year', 'color'])
```

### Get Values

```py
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

x = thisdict.values()

print(x)
#dict_values(['Ford', 'Mustang', 1964])
```

```py
# Make a change in the original dictionary, and see that the values list gets updated as well:

car = {
"brand": "Ford",
"model": "Mustang",
"year": 1964
}

x = car.values()

print(x) #before the change
#dict_values(['Ford', 'Mustang', 1964])

car["year"] = 2020

print(x) #after the change
#dict_values(['Ford', 'Mustang', 2020])
```

```py
# Add a new item to the original dictionary, and see that the values list gets updated as well:

car = {
"brand": "Ford",
"model": "Mustang",
"year": 1964
}

x = car.values()

print(x) #before the change
#dict_values(['Ford', 'Mustang', 1964])

car["color"] = "red"

print(x) #after the change
#dict_values(['Ford', 'Mustang', 1964, 'red'])
```

### Get Items

```py
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

x = thisdict.items()

print(x)
#dict_items([('brand', 'Ford'), ('model', 'Mustang'), ('year', 1964)])

#The returned list is a view of the items of the dictionary, meaning that any changes done to the dictionary will be reflected in the items list.
```

### Check if Key Exists

```py
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
if "model" in thisdict:
  print("Yes, 'model' is one of the keys in the thisdict dictionary")
#Yes, 'model' is one of the keys in the thisdict dictionary
```

## Change Dictionary Items

### Change Values

```py
# Change the "year" to 2018:

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict["year"] = 2018
```

### Update Dictionary

```py
# Update the "year" of the car by using the update() method:

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.update({"year": 2020})
```

## Add Dictionary Items

### Adding Items

```py
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict["color"] = "red"
print(thisdict)
#{'brand': 'Ford', 'model': 'Mustang', 'year': 1964, 'color': 'red'}
```

### Update Dictionary

```py
# Add a color item to the dictionary by using the update() method:

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.update({"color": "red"})
```

## Remove Dictionary Items

### Removing Items

```py
#The pop() method removes the item with the specified key name:

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.pop("model")
print(thisdict)
#{'brand': 'Ford', 'year': 1964}
```
### PopItem

```py
# The popitem() method removes the last inserted item (in versions before 3.7, a random item is removed instead):

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.popitem()
print(thisdict)
#{'brand': 'Ford', 'model': 'Mustang'}
```

### del Item

```py
# The del keyword removes the item with the specified key name:

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
del thisdict["model"]
print(thisdict)
#{'brand': 'Ford', 'year': 1964}
```

### del Dictionary  

```py
#The del keyword can also delete the dictionary completely:

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
del thisdict
print(thisdict) 
#this will cause an error because "thisdict" no longer exists.
```

### Clear Dictionary  

```py
# The clear() method empties the dictionary:

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict.clear()
print(thisdict)
```

## Loop Dictionaries

### Loop Keys

```py
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
for x in thisdict:
  print(x)

brand
model
year

#-----OR

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
for x in thisdict.keys():
  print(x)

brand
model
year
```

### Loop Values

```py
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
for x in thisdict:
  print(thisdict[x])

Ford
Mustang
1964

#---- OR

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
for x in thisdict.values():
  print(x)

Ford
Mustang
1964

```

### Loop Keys and Values

```py
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
for x, y in thisdict.items():
  print(x, y)

brand Ford
model Mustang
year 1964
```

## Copy Dictionaries

You cannot copy a dictionary simply by typing `dict2` = `dict1`, because: `dict2` will only be a reference to `dict1`, and changes made in `dict1` will automatically also be made in `dict2`.

```py
#Make a copy of a dictionary with the copy() method:

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
mydict = thisdict.copy()
print(mydict)

#---OR

#Make a copy of a dictionary with the dict() function:

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
mydict = dict(thisdict)
print(mydict)
```

## Nested Dictionaries

```py
#Create a dictionary that contain three dictionaries:

myfamily = {
  "child1" : {
    "name" : "Emil",
    "year" : 2004
  },
  "child2" : {
    "name" : "Tobias",
    "year" : 2007
  },
  "child3" : {
    "name" : "Linus",
    "year" : 2011
  }
}
```

Or, if you want to add three dictionaries into a new dictionary:

```py
# Create three dictionaries, then create one dictionary that will contain the other three dictionaries:

child1 = {
  "name" : "Emil",
  "year" : 2004
}
child2 = {
  "name" : "Tobias",
  "year" : 2007
}
child3 = {
  "name" : "Linus",
  "year" : 2011
}

myfamily = {
  "child1" : child1,
  "child2" : child2,
  "child3" : child3
}
```

## Access Items in Nested Dictionaries

```py
myfamily = {
  "child1" : {
    "name" : "Emil",
    "year" : 2004
  },
  "child2" : {
    "name" : "Tobias",
    "year" : 2007
  },
  "child3" : {
    "name" : "Linus",
    "year" : 2011
  }
}

print(myfamily["child2"]["name"])
```

## Dictionary Methods

|	Method	|	Description	|
|	-	|	-	|
|	`clear()`	|	Removes all the elements from the dictionary	|
|	`copy()`	|	Returns a copy of the dictionary	|
|	`fromkeys()`	|	Returns a dictionary with the specified keys and value	|
|	`get()`	|	Returns the value of the specified key	|
|	`items()`	|	Returns a list containing a tuple for each key value pair	|
|	`keys()`	|	Returns a list containing the dictionary's keys	|
|	`pop()`	|	Removes the element with the specified key	|
|	`popitem()`	|	Removes the last inserted key-value pair	|




