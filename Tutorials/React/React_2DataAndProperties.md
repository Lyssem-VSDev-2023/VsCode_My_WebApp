# **Working with data and properties in React**

- [**Working with data and properties in React**](#working-with-data-and-properties-in-react)
  - [Props](#props)
  - [Create a Component with Props](#create-a-component-with-props)
  - [Ternary and JSX](#ternary-and-jsx)
  - [Use complex data types as props](#use-complex-data-types-as-props)
  - [Use map to display data inside an array](#use-map-to-display-data-inside-an-array)
  - [Access the index to generate a key](#access-the-index-to-generate-a-key)
  - [map with React](#map-with-react)
  - [Display list data](#display-list-data)
  - [Challenge](#challenge)

---

## Props

[&#9650;](#working-with-data-and-properties-in-react)

`React` components are designed to be **reusable units**. To enable reuse, components allow for data **to be passed** into them through **`properties`** or **`props`**.

**`props`** are **read-only** values available to a single instance of a component. They can be set **programmatically** or with the **same syntax** you use when **setting attributes for HTML** elements. Unlike normal `HTML`, **`props`** aren't limited to strings or primitive values; they can be **`complex objects or arrays`**. props is available as a property of **`this`** inside a component. props can contain as many properties as your component needs, and is capable of storing objects or any other data type.

## Create a Component with Props

[&#9650;](#working-with-data-and-properties-in-react)

**`PS:`**
Refer to the following folder for the exercise files:

> **ReactApp_4_Props**

Modify the **`RecipeTitle.jsx`** as follows:

```js
import React from 'react';

function RecipeTitle(props) {
    return (
        <section>
            <h2>{ props.title }</h2>
        </section>
    )
};

export default RecipeTitle;
```

To use the component with props, modify the **`App.jsx`** as follows:

```js
import RecipeTitle from './RecipeTitle'

const recipe = {
        title: 'Mashed potatoes',
        feedback: {
            rating: 4.8,
            reviews: 20
        },
        ingredients: [
            { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: true },
            { name: 'Pepper', prepared: true },
        ],
    };
```

Then add the **`RecipeTitle`** component

```js
<RecipeTitle title={ recipe.title } />
```

## Ternary and JSX

[&#9650;](#working-with-data-and-properties-in-react)

- You can take advantage of **`Ternary syntax`** to determine how values should be **displayed**. If you want to dynamically set the `class` of an `HTML` element based on a **value**, you can use the following:

```js
<div className={ isComplete ? 'done' : 'normal' }>{ value }</div>
```

**`Note:`**

You might notice the attribute used is **`className`** rather than **`class`**. This is because the word **`class`** is **reserved** in `JavaScript`. To avoid confusing the runtime, use **`className`** instead.

## Use complex data types as props

[&#9650;](#working-with-data-and-properties-in-react)

Crate a new file **`RecipeTitle.css`**

```css
.red {
    color: red;
}
.green {
    color: green;
}
```

Update **`RecipeTitle.jsx`**

```js
import './RecipeTitle.css';
```

Then add this code under the **`H2`** tag:

```xml
<h3 className={ props.feedback.rating <= 3.5 ? 'red' : 'green' }>
    { props.feedback.rating } from { props.feedback.reviews } reviews
</h3>
```

**Pass ratings** in **`App.jsx`**, modify the existing **`RecipeTitle`** element to add the **`feedback`** **attribute**:

```xml
<RecipeTitle title={ recipe.title } feedback={ recipe.feedback } />
```

## Use map to display data inside an array

[&#9650;](#working-with-data-and-properties-in-react)

**`map`** behaves similarly to a **`for...of`** loop or the **`forEach`** method. It runs once **for each** item in the array. The key difference is that it generates a new array with the values returned by the function passed into map.

Let's a new array:

```js
const numbers = [2, 5, 8];
```

Then use **`map`**. **`map`** accepts a `function` with a `single parameter`. The `parameter` will be set to the value of `each number` in the original array. You'll create an anonymous function for this purpose by using the => or fat arrow syntax.

```js
const squared = numbers.map((number) => {
    return number * number;
});
```

This would be the result:

```js
console.log(squared);
// Output: [4, 25, 64]
```

## Access the index to generate a key

[&#9650;](#working-with-data-and-properties-in-react)

When you display **lists** in `React`, set a **`key`** for each item. This **allows** both `React` and `you` to refer to **individual items** currently being displayed, and **relate them** back to the **`bound data`**. The most common way to **generate a key** is to **use the index** of the item in the array.

When you use **`map`**, you can access the **`index`** by using a **second parameter** in the delegate function. The second parameter is **automatically** set to the **current index**.

```js
const squared = numbers.map((number, index) => {
    console.log(`Processing item ${index + 1}`);
    return number * number;
});
```

## map with React

[&#9650;](#working-with-data-and-properties-in-react)

```js
const squared = numbers.map((number, index) => {
    return (
        <div key={index}>{ number * number }</div>
    );
});
```

## Display list data

[&#9650;](#working-with-data-and-properties-in-react)

Add **`IngredientList.css`** to the app

```js
.prepared {
    text-decoration: line-through;
}
```

Create the component **`IngredientList.jsx`**

```js
import './IngredientList.css'
import React from 'react';

function IngredientList(props) {
    // Create the list items using map
    const ingredientListItems = props.ingredients.map((ingredient, index) => {
        return (
            // Return the desired HTML for each ingredient
            <li key={index} className={ ingredient.prepared ? 'prepared' : '' }>
                { ingredient.name }
            </li>
        );
    });

    // return the HTML for the component
    // ingredientListItems will be rendered as li elements
    return (
        <ul>
            { ingredientListItems }
        </ul>
    );
}

export default IngredientList;
```

Update **`App.jsx`** to use **`IngredientList.jsx`** component to deplay the list of ingredients.

Add the import:

```js
import IngredientList from './IngredientList'
```

Add **`IngredientList`** component

```js
<IngredientList ingredients={recipe.ingredients} />
```

## Challenge

[&#9650;](#working-with-data-and-properties-in-react)

Add a new component to display the steps for the recipe. The steps should be displayed as part of an ordered list (ol).

The recipe steps are as follows:

1. Add cut potatoes to a pot of heavily salted water.
2. Bring pot to a boil.
3. Boil the potatoes until fork tender, about 15-20 minutes.
4. Strain the potatoes.
5. Return potatoes to pot.
6. Add butter, cream, salt, and pepper to taste.
7. Mash potatoes.
8. Reseason and add butter and cream as desired.

---

Add a **`IngredientSteps.jsx`** file

import React from 'react';

```js
function IngredientSteps(props) {

    const ingredientStepsItems = props.steps.map((step, index) => {
        return (
            <li key={index}>
                { step.step }
            </li>
        );
    });

    return (
        <div>
            <h3>Recipie Steps</h3>
            <ol>
                { ingredientStepsItems }
            </ol>
        </div>
    );
}

export default IngredientSteps;
```

Update the **`App.jsx`** by importing the **`IngredientSteps`** component:

```js
import IngredientSteps from './IngredientSteps';
```

Update the **`App.jsx`** by adding an array of the steps:

```js
const mySteps = {
        steps: [
            {step: 'Add cut potatoes to a pot of heavily salted water.'},
            {step: 'Bring pot to a boil.'},
            {step: 'Boil the potatoes until fork tender, about 15-20 minutes.'},
            {step: 'Strain the potatoes.'},
            {step: 'Return potatoes to pot.'},
            {step: 'Add butter, cream, salt, and pepper to taste.'},
            {step: 'Mash potatoes.'},
            {step: 'Reseason and add butter and cream as desired.'}
        ],
    };
```

Update the **`App.jsx`** by including  **`IngredientSteps`** component and passing the array:

```js
<IngredientSteps steps={mySteps.steps} />
```
