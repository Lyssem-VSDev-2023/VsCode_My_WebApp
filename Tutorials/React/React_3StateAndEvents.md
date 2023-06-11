# **React State and Events**

- [**React State and Events**](#react-state-and-events)
  - [State concept](#state-concept)
  - [Add state to an application](#add-state-to-an-application)
  - [User Events](#user-events)
  - [Update state](#update-state)
  - [Add event handlers and update state](#add-event-handlers-and-update-state)
  - [Effect Hook](#effect-hook)
  - [useEffect](#useeffect)
  - [Add Hooks](#add-hooks)

---

## State concept

[&#9650;](#react-state-and-events)

- **`Props:`** `Props` are **values passed** to React `components`. These copies of the data are designed to allow the component to render itself. `Props` are **immutable (read-only)** values.

- **`State:`** `State` stores **any data** we expect to **change** during the application's life cycle. Changes might be:
  - values updated through a form,
  - to-do items marked as completed,
  - or updated server data that needs to be displayed on the page.
  
  Basically, if the **value can change**, it should be part of the **`application's state`**.

- **`Immutability:`** One of the **tenets** of React is the concept of **immutability**. Immutability means that values **aren't updated** but are rather set to **new copies of data**.

    By keeping state **immutable**, `React` can better determine **what has changed**, because the original values still exist. This continual use of new copies allows you to store history or apply other advanced functionality.

## Add state to an application

[&#9650;](#react-state-and-events)

- `React` manages state in a few ways. We'll focus on one of the main ways, **`React Hooks`**.

- A **`Hook`** is a mechanism that allows you to access the **inner workings** of `React`. You can use **`Hooks`** to
  - **run code** when something **`changes in React`**.
  - Or use them to **register** something with `React`, such as **`state`**.
  
- When we create **`state`** by using the **`useState`** **Hook**, for example, we get the **`state object`** and **`an updater`** function to update the **Hook value**.

In our recipe application, we want to **allow users** to tap ingredients to **mark** them as **prepared**. We'll start by creating the **`state`** and passing the display information to the **`component`**.

Any `JavaScript` `object` or `data type` can be registered as **`stateful`** in `React`. The function used to **register** the object is **`useState`**. The **`useState`** function **specifies the initial value**. It **returns** the newly created **stateful object** and **another function** you can use to update the value.

>**`Note:`**
>
>In `React`, **`state`** is **immutable**, meaning it can't be changed. To **modify** the value of a **`stateful`** object, **replace** it with a **new instance** that contains the appropriate values. The **function** returned by **`useState`** manages this process.

**`PS:`**
Refer to the following folder for the exercise files:

> **ReactApp_5_StateEvents**

From the previous exmaple, in the **App.jsx** file:

- Import the **`useState`** (**`useEffect`** needed later)

```js
import React, { useEffect, useState } from 'react';
```

- Update the object name of the following `declaration`:

```js
const recipe = {
        title: 'Mashed potatoes',
    ...
    };
```

- by the following new `const` name:

```js
const initialRecipe = {
        title: 'Mashed potatoes',
    ...
    };
```

- Create the **`recipe`** **`state`** object and **`setRecipe`** function from `useState` as follows:

```js
const [ recipe, setRecipe ] = useState(initialRecipe);
```

- You can run the app to test the result``

## User Events

[&#9650;](#react-state-and-events)

- Events allow you to run code in **response** to **user actions** in your application. Because `JSX` is built on `JavaScript`, `XML`, and `HTML`, adding **`event listeners`** looks relatively familiar.

- You add attributes to the `HTML` to indicate the `name` of the **`event`** you want to **handle**.

```js
class Demo extends React.Component {
    render() {
        <button onClick={ () => alert('Hello, world!') }>Click me!</button>
    }
}
```

- We can create a `function` to `listen` to an **`event`** as well. We add the `function` to our `component`. We then **call** it by using the same syntax we used for alert.

```js
class Demo extends React.Component {
    displayMessage() {
        alert('Hello, world!');
    }

    render() {
        <button onClick={ () => displayMessage() }>Click me!</button>
    }
}
```

- We can also **pass parameters** into the **event handler** as needed.

```js
class Demo extends React.Component {
    displayMessage(message) {
        alert(message);
    }

    render() {
        <button onClick={ () => displayMessage('Clicked button!') }>Click me!</button>
    }
}
```

## Update state

[&#9650;](#react-state-and-events)

- Because state in `React` is immutable, to **m**odify the value of a **stateful object**, we **replace** it with a **`new object`**.

- Primitive types, such as `Boolean` values or `numbers`, are **value-based objects** as opposed to **reference objects**. So any change automatically **replaces** the entire object.

- .`Strings` behave **similarly** because they're **immutable**. We modify a `string` by **replacing** it with a **new value**.

```js
let message = 'Hello, ';
message = message + 'world!';
```

- When we work with **an object**, we need to **create a new instance** of it to ensure **immutability**. The most **common syntax** for creating a copy of an object is the **`spread`** syntax, also called the **`spread operator`**.

```js
let message = {
    text: 'Hello, world',
    color: 'red'
}

let messageCopy = { ...message };
```

- **To modify individual properties**, the **`spread operator`** can be used to create an **initial version** of the new object. It allows us to **specify updated values** for certain properties. If we have a **new value** for `color` but want **to keep** the `text`, for example, we can use the following code.

```js
let message = {
    text: 'Hello, world',
    color: 'red'
}

let messageCopy = {
    ...message,
    color: 'green'
};
```

The result would be:

```js
// new object
{
    text: 'Hello, world',
    color: 'green'
}
```

## Add event handlers and update state

[&#9650;](#react-state-and-events)

**Add the method for click events:**

Open the **`App.jsx`** and add the following `ingredientClick event listener`

```js
function ingredientClick(index) {
    const updatedRecipe = { ... recipe };
    updatedRecipe.ingredients[index].prepared = !updatedRecipe.ingredients[index].prepared;
    setRecipe(updatedRecipe);
}
```

- We start by creating a copy of **`recipe`** by using the **`spread`** operator.
- Then **retrieve** the **updated ingredient** by using the **`index`**.
- We reverse the `value` of **`prepared`**.
- Finally, we replace the **`recipe`** object in `state` by using **`setRecipe`**.

Pass **`ingredients`** and **`event listener`** to **`IngredientList`**

```xml
<IngredientList ingredients={recipe.ingredients}  onClick={ ingredientClick }  />
```

**Update IngredientList to use event listener:**

We can set up an **event handler** as a `prop`. This setup allows us to centralize event handling.

Let's update **`IngredientList`** to use the **`ingredientClick`** `function` we created earlier in **`IngredientList.jsx`** file.

```js
onClick={ () => props.onClick(index) }
```

**`Note`**
There's no particular reason we used the name **`onClick`** on the `component's` **`props`**. It was just the name we chose. It was passed in earlier from the App.jsx file.

## Effect Hook

[&#9650;](#react-state-and-events)

**`Hooks`** are a **common pattern** in frameworks where **values change** or other **events occur**. In a centralized way, they inject your own code to run **when state changes** or at other stages in an **application's life cycle**.

The **`Effect Hook`** allows you to **run code** in response to the **setting of the value**. The code you run can have side effects, so you can update values as needed.

**When to use the Effect Hook:**

You can use the **Effect Hook** whenever you need to **centralize code** to respond to a **state change**. Imagine a complex form that includes many values. You should typically disable the Submit button until the data that needs to be sent to the server is in a valid state. Let's say you have events for individual values that are changed in the data. After a user selects a country/region in your application, you need to retrieve a list of provinces from the server.

You wouldn't want each event listener to examine the state to see if the data is ready to be sent to the server. This setup would be inefficient. Instead, you could use an Effect Hook. An Effect Hook can create one function that looks at the data. If the data is in a valid state, it can enable the Submit button.

## useEffect

[&#9650;](#react-state-and-events)

To **register** a **`listener`** for the **`Effect Hook`**, use **`useEffect`**. **`useEffect`** accepts a **parameter-less** function to run when **state changes**.

```js
useEffect(() => {
    // code goes here
});
```

By default, **`useEffect`** runs whenever state is changed on any stateful object. You can provide a dependency to enable the Hook for only a particular group of objects.

```js
useEffect(() => {
    // code goes here
}, [ someStatefulObject ]);
```

## Add Hooks

[&#9650;](#react-state-and-events)

In the **`App.jsx`** file, add the **`state property`**, as follows:

```js
const [ prepared, setPrepared ] = useState(false);
```

Add the **`Effect Hook listener`**

```js
useEffect(() => {
    setPrepared(recipe.ingredients.every(i => i.prepared));
}, [recipe]);
```

- The code uses **`setPrepared`** to update **`prepared`**.
- It uses the **`every`** method, which returns a `Boolean` value based on every item that **matches** the **criteria** we specify. In our case, we're checking whether every item is **`prepared`**. If not, the method returns `false`.
- The second parameter on **`useEffect`** is set to **`[recipe]`**. This setting provides the dependency to ensure our code **runs only** when the **`recipe`** object **changes**.

We look at the **`prepared`** object. If it's `true`, we **display Prep work done!** `Otherwise`, we display **Just keep chopping**.

```js
{ prepared ? <h2>Prep work done!</h2> : <h2>Just keep chopping.</h2>}
```
