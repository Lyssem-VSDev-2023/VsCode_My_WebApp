# **Arrays and Loops**

- [**Arrays and Loops**](#arrays-and-loops)
  - [Manipulate arrays](#manipulate-arrays)
  - [Other array methods](#other-array-methods)
    - [Push and pop](#push-and-pop)
    - [Shift and unshift](#shift-and-unshift)
    - [Concat](#concat)
  - [Work with Arrays and Loops](#work-with-arrays-and-loops)
    - [For loop](#for-loop)
    - [While loops](#while-loops)
    - [For ... of](#for--of)
    - [Loops and arrays](#loops-and-arrays)
    - [forEach() loop](#foreach-loop)
    - [Exit a loop (breack;)](#exit-a-loop-breack)
  - [Query Arrays](#query-arrays)
    - [find()](#find)
    - [filter()](#filter)
    - [some() (Check a condition)](#some-check-a-condition)
    - [Projections map](#projections-map)
    - [Aggregations (Accumulator and Reducer)](#aggregations-accumulator-and-reducer)

<!---------------------Arrays and Loops----------------------------->

---

## Manipulate arrays

[&#9650;](#arrays-and-loops)

**Declare an array**:

```js
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan"];
```

**Access an array element**:

```js
iceCreamFlavors[3] // Pistachio
```

**Change a value**:

```js
iceCreamFlavors[4] = "Butter Pecan"; //Changes "Neapolitan" to "Butter Pecan"
```

**Add more values**:

```js
iceCreamFlavors.push("Mint Chip");
```

**Array length**:

```js
iceCreamFlavors.length // 6 flavors, because you recently added "Mint Chip"
```

**Remove a value**:

```js
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];
delete iceCreamFlavors[iceCreamFlavors.length-1];
console.log(iceCreamFlavors[length-1]) // undefined

iceCreamFlavor[iceCreamFlavor.length-1] = "your choice";
```

**Remove an item**:

**Syntax**:

```js
array.splice(<position index, <number of elements to remove>)
```

**Exmaple**:

```js
iceCreamFlavor.splice(2,1); 
// iceCreamFlavor is now [ 'Chocolate', 'Strawberry', 'Pistachio', 'Neapolitan', 'Mint Chip' ]
// "Vanilla" removed
```

## Other array methods

### Push and pop

```js
let arr1 = ["A", true, 2];
console.log("\n********Push and pop********\n");

console.log(arr1.push("new value")); // add an item to the array retun thye new length 
console.log(arr1);
console.log(arr1.pop()); //Remove last value and return it
console.log(arr1);
```

Output

```js
********Push and pop********
4
[ 'A', true, 2, 'new value' ]
new value
[ 'A', true, 2 ]
```

### Shift and unshift

```js
//Shift and unshift
console.log("\n********Shift and unshift********\n");
console.log(arr1.unshift("new value")); // return the lengthof the array after adding an item to the begining of the array
console.log(arr1);
console.log(arr1.shift()); //Remove first value of the array and return it
console.log(arr1);
```

Output:

```js
********Shift and unshift********
4
[ 'new value', 'A', true, 2 ]
new value
[ 'A', true, 2 ]
```

### Concat

```js
//Concat
console.log("\n********Concat********\n");
let arr2 = ["B", false, 3];
let newArr = arr1.concat(arr2);
let newArr2 = arr2.concat([1,2,3]);
console.log(newArr);
console.log(newArr2);
```

```js
********Concat********
[ 'A', true, 2, 'B', false, 3 ]
[ 'B', false, 3, 1, 2, 3 ]
```

## Work with Arrays and Loops

### For loop

```js
for (let i = 0; i < 10; i++ ) { // i +=2 would work too and increases by 2
  console.log(i);
}
```

### While loops

Require a condition

```js
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

### For ... of

Equivalent to forEach

```js
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];

while (i < 10) {
 console.log(i);
 i++;
}
```

### Loops and arrays

```js
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];

for (let flavor of iceCreamFlavors) {
  console.log(flavor);
} 
```

### forEach() loop

```js
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => console.log(number)); // 1 2 3 4 5
// or the following to access the index
numbers.forEach((number, index) => console.log(`Number ${number} ${index}`));
```

### Exit a loop (breack;)

```js
let numbers = [1, 2, -1, 4, 5];
for(let i = 0; i< numbers.length; i++>) {
  if (numbers[i] < 0) {
    break;
  }
  console.log(numbers[i]);
}
```

## Query Arrays

### find()

```js
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Neapolitan", "Mint Chip"];
iceCreamFlavors.find(flavor => flavor === "Chocolate") // "Chocolate"
```

### filter()

```js
let iceCreamFlavors = [
  { name: "Chocolate", type: "Chocolate" }, 
  { name: "Strawberry", type: "fruit"}, 
  { name: "Vanilla", type: "Vanilla"}, 
  { name: "Pistachio", type: "Nuts"}, 
  { name: "Neapolitan", type: "Chocolate"}, 
  { name: "Mint Chip", type: "Chocolate"}
];

iceCreamFlavors.filter(flavor => flavor.type === "Chocolate") 
// [{ name: "Chocolate", type: "Chocolate" }, 
//  { name: "Neapolitan", type: "Chocolate"}, 
//  { name: "Mint Chip", type: "Chocolate"}]
```

### some() (Check a condition)

```js
iceCreamFlavors.some(flavor => flavor.type === "Nuts") // true

iceCreamFlavors.filter(flavor => flavor.type !== "Nuts") // returns everything except for Pistachio.
```

### Projections map

```js
let iceCreamFlavors = [
  { name: "Chocolate", type: "Chocolate" }, 
  { name: "Strawberry", type: "fruit"}, 
  { name: "Vanilla", type: "Vanilla"}, 
  { name: "Pistachio", type: "Nuts"}, 
  { name: "Neapolitan", type: "Chocolate"}, 
  { name: "Mint Chip", type: "Chocolate"}
];
iceCreamFlavors.map(flavor => {
  flavor.price = 1;
  return flavor;
}) // every item now has a new property price: 1 
```

### Aggregations (Accumulator and Reducer)

```js
let sales = [{
 date : '2021-05-01',
 amount: 2
},
{
 date : '2021-05-01',
 amount: 1
}
// and so on...
]

let sum = 0;
for( let i =0; i< sales.length; i++) {
  sum += sales[i].amount; 
}

//or - more elegant and concise
sales.reduce((acc, curr) => acc + curr.amount, 0);

```

**Full Aggregation Example**:

[See Advanced reduce(); exmaples](ReadMeAdvancedJS.md#1-reduce)

```js
// { scoops: [], total: }
let transactions = []

transactions.push({ scoops: ["Chocolate", "Vanilla", "Mint Chip"], total: 5.5 })
transactions.push({ scoops: ["Raspberry", "StrawBerry"], total: 2 })
transactions.push({ scoops: ["Vanilla", "Vanilla"], total: 4 })

const total = transactions.reduce((acc, curr) => acc + curr.total, 0);
console.log(`You've made ${total} $ today`); // You've made 11.5 $ today

let flavorDistribution = transactions.reduce((accumulator, currValue) => {
    currValue.scoops.forEach(scoop => {
      if (!accumulator[scoop]) {
        accumulator[scoop] = 0;
      }
      accumulator[scoop]++;
    })
    return accumulator;
  }, {}) // { Chocolate: 1, Vanilla: 3, Mint Chip: 1, Raspberry: 1, StrawBerry: 1 }

  console.log(transactions);
  console.log(flavorDistribution);
```
