# Booleans and Operators

## Python Booleans

Booleans represent one of two values: True or False.

```py
print(10 > 9)
print(10 == 9)
print(10 < 9)

#------------

a = 200
b = 33

if b > a:
  print("b is greater than a")
else:
  print("b is not greater than a")
```

### Evaluate Values and Variables

```py
# Evaluate Values 
print(bool("Hello"))    # => True
print(bool(15))         # => True

#------------

# Or Evaluate Variables
x = "Hello"
y = 15
print(bool(x))          # => True
print(bool(y))          # => True
```

### Most Values are True

- Almost any value is evaluated to True if it has some sort of content.
- Any string is True, except empty strings.
- Any number is True, except 0.
- Any list, tuple, set, and dictionary are True, except empty ones.

```py
bool("abc")                         # => True
bool(123)                           # => True
bool(["apple", "cherry", "banana"]) # => True
```

### Some Values are False

```py
bool(False)         # => False
bool(None)          # => False
bool(0)             # => False
bool("")            # => False
bool(())            # => False
bool([])            # => False
bool({})            # => False

#------------

class myclass():
  def __len__(self):
    return 0

myobj = myclass()
print(bool(myobj))  # => False
```

### Functions can Return a Boolean

```py
def myFunction() :
  return True

print(myFunction())  # => False

#------------

def myFunction() :
  return True

if myFunction():
  print("YES!")     # YES!
else:
  print("NO!")

#------------

x = 200
print(isinstance(x, int)) # => True

```

## Python Oprators

### Python Arithmetic Operators

|	Operator	|	Name	|	Example	|
|	-	|	-	|	-	|
|	`+`	|	Addition	|	`x + y`	|
|	`-`	|	Subtraction	|	`x - y`	|
|	`*`	|	Multiplication	|	`x * y`	|
|	`/`	|	Division	|	`x / y`	|
|	`%`	|	Modulus	|	`x % y`	|
|	`**`	|	Exponentiation	|	`x ** y`	|
|	`//`	|	Floor division	|	`x // y`	|

### Python Assignment Operators


|	Operator	|	Example	|	Same As	|
|	-	|	-	|	-	|
|	`=`	|	`x = 5`	|	`x = 5`	|
|	`+=`	|	`x += 3`	|	`x = x + 3`	|
|	`-=`	|	`x -= 3`	|	`x = x - 3`	|
|	`*=`	|	`x *= 3`	|	`x = x * 3`	|
|	`/=`	|	`x /= 3`	|	`x = x / 3`	|
|	`%=`	|	`x %= 3`	|	`x = x % 3`	|
|	`//=`	|	`x //= 3`	|	`x = x // 3`	|
|	`**=`	|	`x **= 3`	|	`x = x ** 3`	|
|	`&=`	|	`x &= 3`	|	`x = x & 3`	|
|	`\|=`	|	`x \|= 3`	|	`x = x \| 3`	|
|	`^=`	|	`x ^= 3`	|	`x = x ^ 3`	|
|	`>>=`	|	`x >>= 3`	|	`x = x >> 3`	|
|	`<<=`	|	`x <<= 3`	|	`x = x << 3`	|
|	`:=`	|	`print(x := 3)`	|	`x = 3` <br /> `print(x)`	|


### Python Comparison Operators

|	Operator	|	Name	|	Example	|
|	-	|	-	|	-	|
|	`==`	|	Equal	|	`x == y`	|
|	`!=`	|	Not equal	|	`x != y`	|
|	`>`	|	Greater than	|	`x > y`	|
|	`<`	|	Less than	|	`x < y`	|
|	`>=`	|	Greater than or equal to	|	`x >= y`	|
|	`<=`	|	Less than or equal to	|	`x <= y`	|


### Python Logical Operators

|	Operator	|	Description	|	Example	|
|	-	|	-	|	-	|
|	`and `	|	Returns True if both statements are true	|	`x < 5 and  x < 10`	|
|	`or`	|	Returns True if one of the statements is true	|	`x < 5 or x < 4`	|
|	`not`	|	Reverse the result, returns False if the result is true	|	`not(x < 5 and x < 10)`	|


### Python Identity Operators

|	Operator	|	Description	|	Example	|
|	-	|	-	|	-	|
|	`is `	|	Returns True if both variables are the same object	|	`x is y`	|
|	`is not`	|	Returns True if both variables are not the same object	|	`x is not y`	|


### Python Membership Operators

|	Orator	|	Description	|	Example	|
|	-	|	-	|	-	|
|	`in `	|	Returns True if a sequence with the specified value is present in the object	|	`x in y`	|
|	`not in`	|	Returns True if a sequence with the specified value is not present in the object	|	`x not in y`	|

### Python Bitwise Operators

Bitwise operators are used to compare (binary) numbers:

|	Operator	|	Name	|	Description	|	Example	|
|	-	|	-	|	-	|	-	|
|	`& `	|	AND	|	Sets each bit to 1 if both bits are 1	|	`x & y`	|
|	`\|`	|	OR	|	Sets each bit to 1 if one of two bits is 1	|	`x \| y`	|
|	`^`	|	XOR	|	Sets each bit to 1 if only one of two bits is 1	|	`x ^ y`	|
|	`~`	|	NOT	|	Inverts all the bits	|	`~x`	|
|	`<<`	|	Zero fill left shift	|	Shift left by pushing zeros in from the right and let the leftmost bits fall off	|	`x << 2`	|
|	`>>`	|	Signed right shift	|	Shift right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off	|	`x >> 2`	|

### Operator Precedence

|	Operator	|	Description	|
|	-	|	-	|
|	`()`	|	Parentheses	|
|	`**`	|	Exponentiation	|
|	`+x  -x  ~x`	|	Unary plus, unary minus, and bitwise NOT	|
|	`*  /  //  %`	|	Multiplication, division, floor division, and modulus	|
|	`+  -`	|	Addition and subtraction	|
|	`<<  >>`	|	Bitwise left and right shifts	|
|	`&`	|	Bitwise AND	|
|	`^`	|	Bitwise XOR	|
|	`\|`	|	Bitwise OR	|
|	`==  !=  >  >=  <  <=  is  is not  in  not in `	|	Comparisons, identity, and membership operators	|
|	`not`	|	Logical NOT	|
|	`and`	|	AND	|
|	`or`	|	OR	|
























<br /><br /><br />




