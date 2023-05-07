<br><HR>

# **Advanced Javascript Concepts**

<br>
<br>

# Table of Content

1. [reduce();](#1-reduce)

<br>
<br>

<!---------------------reduce();----------------------------->

# 1. reduce();
[&#9650;](#table-of-content)

## Example 1: Summing All the Values
Implement array reduce in JavaScript to sum the array elements.

```js
let num = [5, 9, 12, 24, 67]
let sum = num.reduce(function (accumulator, curValue) {
  return accumulator + curValue
}, 0)

//or 

let sum = num.reduce((accumulator, curValue) => accumulator + curValue, 0)

console.log(sum)
```
Output:

```117```

## Example 2: Summing Values in an Object Array Using Array Reduce
```js
let initialValue = 0
let obj = [{n: 5}, {n: 9}, {n: 13}, {n: 25}, {n: 40}]

let sum = obj.reduce(function (accumulator, curValue) {
    return accumulator + curValue.n
}, initialValue)

console.log(sum)
```

Output:

```92```

## Example 3: Flattening an Array of Arrays With Reduce.
```js
let mulArray = [[3, 5], [1, 7], [12, 9]]

let newArray = mulArray.reduce(function(accumulator, curValue) {
    return accumulator.concat(curValue)
  },[]
)

console.log(newArray)
```

Output:

```[ 3, 5, 1, 7, 12, 9 ]```

## Example 4: Counting Instances in an Object Using Array Reduce
```js
let myCars = ['Mercedes-Benz', 'Jeep', 'Ferrari', 'Lamborghini', 'Mercedes-Benz', 'BMW', 'Ferrari']

let instances = myCars.reduce(function (allCars, car) {
  if (car in allCars) {
    allCars[car]++
  }
  else {
    allCars[car] = 1
  }
  return allCars
}, {})

console.log(instances)
```

Output:

```{ 'Mercedes-Benz': 2, Jeep: 1, Ferrari: 2, Lamborghini: 1, BMW: 1 }```

## Example 5: Grouping Objects With Array Reduce
```js
let student = [
  { name: 'David', age: 23, hobby: 'fishing' },
  { name: 'Rachel', age: 25, hobby: 'cooking' },
  { name: 'Rahul', age: 22, hobby: 'fishing' }
];

function myFunc(obj, prop) {
  return obj.reduce(function (acc, item) {
    let key = item[prop]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(item)
    return acc
  }, {})
}

let groupedStudent = myFunc(student, 'hobby')

console.log(groupedStudent)
```

Output:
```js
{
  fishing: [
    { name: 'David', age: 23, hobby: 'fishing' },
    { name: 'Rahul', age: 22, hobby: 'fishing' }
  ],
  cooking: [ { name: 'Rachel', age: 25, hobby: 'cooking' } ]
}
```

## Example 6: Removing Duplicates With Array Reduce

```js
let array = [2, 5, 7, 5, 12, 9, 7, 5, 4, 3, 5, 2, 4, 15]

let newArray = array.reduce(function (accumulator, curValue) {
  if (accumulator.indexOf(curValue) === -1) {
    accumulator.push(curValue)
  }
  return accumulator
}, [])

console.log(newArray)
```
Output:
```js
[
  2, 5, 7, 12,
  9, 4, 3, 15
]
```

## Browsers Supporting Array Reduce in JavaScript
The following list of browsers support the use of array reduce in JavaScript:
- Google Chrome
- Microsoft Edge 9.0
- Mozilla Firefox 3.0
- Safari 5.0
- Opera 10.5



