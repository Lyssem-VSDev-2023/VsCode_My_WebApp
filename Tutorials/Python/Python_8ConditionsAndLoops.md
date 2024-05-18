# Conditions and Loops

## If ... Else

Python supports the usual logical conditions from mathematics:

| Operation                | Operator |
| ------------------------ | -------- |
| Equals                   | `a == b` |
| Not Equals               | `a != b` |
| Less than                | `a < b`  |
| Less than or equal to    | `a <= b` |
| Greater than             | `a > b`  |
| Greater than or equal to | `a >= b` |

```py
a = 33
b = 200

if b > a:
  print("b is greater than a")

#b is greater than a
```

### Indentation

```py
#If statement, without indentation (will raise an error):

a = 33
b = 200
if b > a:
print("b is greater than a") 
# you will get an error
```