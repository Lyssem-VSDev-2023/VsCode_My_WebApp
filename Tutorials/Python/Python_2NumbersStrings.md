# Python Numbers & Strings

## Python Numbers

```py
x = 1    # int
y = 2.8  # float
z = 1j   # complex
```

### Int

```py
x = 1
y = 35656222554887711
z = -3255522

print(type(x))
print(type(y))
print(type(z))
```

### Float

```py
x = 1.10
y = 1.0
z = -35.59

print(type(x))
print(type(y))
print(type(z))

#---Scientific------------

x = 35e3
y = 12E4
z = -87.7e100

print(type(x))
print(type(y))
print(type(z))
```

### Complex

```py
x = 3+5j
y = 5j
z = -5j

print(type(x))
print(type(y))
print(type(z))
```

### Random Number

```py
import random

print(random.randrange(1, 10))
```

## Python Casting

```py
# Integers
x = int(1)   # x will be 1
y = int(2.8) # y will be 2
z = int("3") # z will be 3

# Floats
x = float(1)     # x will be 1.0
y = float(2.8)   # y will be 2.8
z = float("3")   # z will be 3.0
w = float("4.2") # w will be 4.2

# Strings
x = str("s1") # x will be 's1'
y = str(2)    # y will be '2'
z = str(3.0)  # z will be '3.0'
```

## Python Strings

### Quotes Inside Quotes

```py
print("It's alright")
print("He is called 'Johnny'")
print('He is called "Johnny"')
```

### Multiline Strings

```py
a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
print(a)

#----Or

a = '''Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.'''
print(a)
```

### Strings are Arrays

```py
a = "Hello, World!"
print(a[1])

#--- Looping
for x in "banana":
  print(x)

#--- Length
a = "Hello, World!"
print(len(a))
```

### Check String

```py
txt = "The best things in life are free!"
print("free" in txt)

# use with if

txt = "The best things in life are free!"
if "free" in txt:
  print("Yes, 'free' is present.")

# or Check if Not in String

txt = "The best things in life are free!"
print("expensive" not in txt)

# Check if not with if

txt = "The best things in life are free!"
if "expensive" not in txt:
  print("No, 'expensive' is NOT present.")
```

## Slicing A string 

### Slicing a Range

You can return a range of characters by using the slice syntax

```py
b = "Hello, World!"
print(b[2:5])
```

### Slice From the Start

```py
b = "Hello, World!"
print(b[:5])
```

### Slice To the End

```py
b = "Hello, World!"
print(b[2:])
```

### Negative Indexing

Use negative indexes to start the slice from the end of the string:

Get the characters:

From: "o" in "World!" (position -5)

To, but not included: "d" in "World!" (position -2):

```py
b = "Hello, World!"
print(b[-5:-2])
```

## Modify Strings

### Upper & Lower Case

```py
a = "Hello, World!"
print(a.upper())

#----------

a = "Hello, World!"
print(a.lower())
```

### Remove Whitespace

```py
a = " Hello, World! "
print(a.strip()) # returns "Hello, World!"
```

### Replace String

```py
a = "Hello, World!"
print(a.replace("H", "J"))
```

### Split String

```py
a = "Hello, World!"
print(a.split(",")) # returns ['Hello', ' World!']
```

### String Concatenation

```py
a = "Hello"
b = "World"
c = a + b
print(c)

#-------------------

a = "Hello"
b = "World"
c = a + " " + b
print(c)
```

## Format - Strings

```py
#we cannot combine strings and numbers like this
age = 36
txt = "My name is John, I am " + age # Error
print(txt) 
```

### F-Strings or format()

```py
age = 36
txt = f"My name is John, I am {age}"
print(txt)
```

### Placeholders and Modifiers

```py
# add placeholders {}
price = 59
txt = f"The price is {price} dollars"
print(txt)
#-----------
# A placeholder can also include a modifier to format the value. 
# : followed by a legal formatting type, like .2f 
price = 59
txt = f"The price is {price:.2f} dollars"
print(txt)
#-----------
# Or format directly
txt = f"The price is {95:.2f} dollars"
print(txt)
#-----------
# We can do maths inside a placeholder
txt = f"The price is {20 * 59} dollars"
print(txt)
#-----------
price = 59
tax = 0.25
txt = f"The price is {price + (price * tax)} dollars"
print(txt)

```

### if ... else in Placeholders

```py
price = 49
txt = f"It is very {'Expensive' if price>50 else 'Cheap'}"

print(txt)
```

### if ... else in Placeholders


```py
fruit = "apples"
txt = f"I love {fruit.upper()}"
print(txt)

#----------

def myconverter(x):
  return x * 0.3048

txt = f"The plane is flying at a {myconverter(30000)} meter altitude"
print(txt)
```

## String format()

```py
price = 49
txt = "The price is {} dollars"  # or txt = "The price is {:.2f} dollars"
print(txt.format(price))

# --- Multiple Values ----

quantity = 3
itemno = 567
price = 49
myorder = "I want {} pieces of item number {} for {:.2f} dollars."
print(myorder.format(quantity, itemno, price))

# --- Use Index Numbers ----

quantity = 3
itemno = 567
price = 49
myorder = "I want {0} pieces of item number {1} for {2:.2f} dollars."
print(myorder.format(quantity, itemno, price))

# --- Or using the index multiple times

age = 36
name = "John"
txt = "His name is {1}. {1} is {0} years old."
print(txt.format(age, name))

# --- Use Named Index ----

myorder = "I have a {carname}, it is a {model}."
print(myorder.format(carname = "Ford", model = "Mustang"))


```

## Escape Characters

|	Code	|	Result	|
|	-	|	-	|
|	`\'`	|	Single Quote	|
|	`\\`	|	Backslash	|
|	`\n`	|	New Line	|
|	`\r`	|	Carriage Return	|
|	`\t`	|	Tab	|
|	`\b`	|	Backspace	|
|	`\f`	|	Form Feed	|
|	`\ooo`	|	Octal value	|
|	`\xhh`	|	Hex value	|



## More Modifiers

|	Formatting Types	|		|		|
|	-	|	-	|	-	|
|	`:<`	|	Left aligns the result (within the available space)	|	`txt = f"We have {49:<8} chickens."`	|
|	`:>`	|	Right aligns the result (within the available space)	|	`txt = f"We have {49:>8} chickens."`	|
|	`:^`	|	Center aligns the result (within the available space)	|	`txt = f"We have {49:^8} chickens."`	|
|	`:=`	|	Places the sign to the left most position	|	`txt = f"The temperature is {-5:=8} degrees celsius."`	|
|	`:+`	|	Use a plus sign to indicate if the result is positive or negative	|	`txt = f"The temperature is between {-3:+} and {7:+} degrees celsius."`	|
|	`:-`	|	Use a minus sign for negative values only	|	`txt = f"The temperature is between {-3:-} and {7:-} degrees celsius."`	|
|	`: `	|	Use a space to insert an extra space before positive numbers (and a minus sign before negative numbers)	|	`txt = f"The temperature is between {-3: } and {7: } degrees celsius."`	|
|	`:,`	|	Use a comma as a thousand separator	|	`txt = f"The universe is {13800000000:,} years old."`	|
|	`:_`	|	Use a underscore as a thousand separator	|	`txt = f"The universe is {13800000000:_} years old."`	|
|	`:b`	|	Binary format	|	`txt = f"The binary version of 5 is {5:b}"`	|
|	`:f`	|	Fix point number format	|	`txt = f"The price is {45:.2f} dollars."`	|
|	`:%`	|	Percentage format	|	`txt = f"You scored {0.25:.0%}"`	|


## All String Methods

|	Method	|	Description	|
|	-	|	-	|
|	`capitalize()`	|	Converts the first character to upper case	|
|	`casefold()`	|	Converts string into lower case	|
|	`center()`	|	Returns a centered string	|
|	`count()`	|	Returns the number of times a specified value occurs in a string	|
|	`encode()`	|	Returns an encoded version of the string	|
|	`endswith()`	|	Returns true if the string ends with the specified value	|
|	`expandtabs()`	|	Sets the tab size of the string	|
|	`find()`	|	Searches the string for a specified value and returns the position of where it was found	|
|	`format()`	|	Formats specified values in a string	|
|	`format_map()`	|	Formats specified values in a string	|
|	`index()`	|	Searches the string for a specified value and returns the position of where it was found	|
|	`isalnum()`	|	Returns True if all characters in the string are alphanumeric	|
|	`isalpha()`	|	Returns True if all characters in the string are in the alphabet	|
|	`isascii()`	|	Returns True if all characters in the string are ascii characters	|
|	`isdecimal()`	|	Returns True if all characters in the string are decimals	|
|	`isdigit()`	|	Returns True if all characters in the string are digits	|
|	`isidentifier()`	|	Returns True if the string is an identifier	|
|	`islower()`	|	Returns True if all characters in the string are lower case	|
|	`isnumeric()`	|	Returns True if all characters in the string are numeric	|
|	`isprintable()`	|	Returns True if all characters in the string are printable	|
|	`isspace()`	|	Returns True if all characters in the string are whitespaces	|
|	`istitle()`	|	Returns True if the string follows the rules of a title	|
|	`isupper()`	|	Returns True if all characters in the string are upper case	|
|	`join()`	|	Converts the elements of an iterable into a string	|
|	`ljust()`	|	Returns a left justified version of the string	|
|	`lower()`	|	Converts a string into lower case	|
|	`lstrip()`	|	Returns a left trim version of the string	|
|	`maketrans()`	|	Returns a translation table to be used in translations	|
|	`partition()`	|	Returns a tuple where the string is parted into three parts	|
|	`replace()`	|	Returns a string where a specified value is replaced with a specified value	|
|	`rfind()`	|	Searches the string for a specified value and returns the last position of where it was found	|
|	`rindex()`	|	Searches the string for a specified value and returns the last position of where it was found	|
|	`rjust()`	|	Returns a right justified version of the string	|
|	`rpartition()`	|	Returns a tuple where the string is parted into three parts	|
|	`rsplit()`	|	Splits the string at the specified separator, and returns a list	|
|	`rstrip()`	|	Returns a right trim version of the string	|
|	`split()`	|	Splits the string at the specified separator, and returns a list	|
|	`splitlines()`	|	Splits the string at line breaks and returns a list	|
|	`startswith()`	|	Returns true if the string starts with the specified value	|
|	`strip()`	|	Returns a trimmed version of the string	|
|	`swapcase()`	|	Swaps cases, lower case becomes upper case and vice versa	|
|	`title()`	|	Converts the first character of each word to upper case	|
|	`translate()`	|	Returns a translated string	|
|	`upper()`	|	Converts a string into upper case	|
|	`zfill()`	|	Fills the string with a specified number of 0 values at the beginning	|











