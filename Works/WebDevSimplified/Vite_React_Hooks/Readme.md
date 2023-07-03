# React Hooks

## Most Used

---

### UseState Hook

[Course Video](https://courses.webdevsimplified.com/view/courses/react-hooks-simplified/1327055-must-know-hooks/4076826-01-usestate)

- Hooks can be only inside **function**, not inside classes, classes have their own way to do the same (**class components**)
- Hooks execute in the **same order**, they should be in teh top level, cannot be in an if statement or any other block.
- To use useState:
  - useState returns an array of two values
    - the current state (= default value)
    - a function to update the state
  - Assign the useState to a variable (`const`)

---

### UseEffect Hook

[Course Video](https://courses.webdevsimplified.com/view/courses/react-hooks-simplified/1327055-must-know-hooks/4076830-02-useeffect)

- UseEffect is a hook that take place when a parameter/state changes
- Executes at application renders if no 2nd parameter is specified
- if a second parameter (Array []) is specified, then the useEffect take place when this resource is updated
- if an empty array is passed, then it is executed onMount (1 time only)

---

### UseContext Hook

[Course Video](https://courses.webdevsimplified.com/view/courses/react-hooks-simplified/1327055-must-know-hooks/4076825-03-usecontext)

- Context is a way to share Data between the Components of an application, instead of passing props in each component
- **Class Components:**
  - We can wrap the components within a **`Context.Provider`** that take a **`props`** being the data to be passed to the children
  - The child component need to have a **`Context.Consumer`** to use the passed context
- **Function Component:**
  - **`useContext`** is used to get the context
  - No need for nesting inside **`Context.Consumer`**
- **Custom useContext Hook:**
  - All Context logic is extracted in an external **custom hook component**

---

## Less Used

---

### UseRef Hook

[Course Video](https://courses.webdevsimplified.com/view/courses/react-hooks-simplified/1327056-lesser-used-hooks/4076822-04-useref)

- **`UseRef`** instead of **`UseState`** when re-rendering (**`UseEffect`**), not to get into infinite loop
- **`UseRef`** **does not cause** the component to **re-render** when it is changed
- Don'y use it for onChange events, need to use **`useState`** or **`props`**

### UseMemo Hook

[Course Video](https://courses.webdevsimplified.com/view/courses/react-hooks-simplified/1327056-lesser-used-hooks/4076824-05-usememo)

- For long running functions, all the states will take time when a component is re-rendered
- Use **`useMemo`** is useful to overcome **performance issues**
- useMemo => Memoazation => Cache a value not to recompute it every time
- Do not use it excessively, as it has a performance and memory overhead
  
---

### UseCallback Hook

[Course Video](https://courses.webdevsimplified.com/view/courses/react-hooks-simplified/1327056-lesser-used-hooks/4076821-06-usecallback)

- Same as use Memo, but return a whole function instead of values/array
- Allow to trigger the rending only if some states change
- Since returning a function (the return value of the function), we can pass parameters

### UseReducer Hook

[Course Video](https://courses.webdevsimplified.com/view/courses/react-hooks-simplified/1327056-lesser-used-hooks/4122941-07-usereducer)

- There other ways to manage states, instead of useState => useReducer
- Used to manage complex states, so typically use objects and not values

### UseTransition Hook

[Course Video](https://courses.webdevsimplified.com/view/courses/react-hooks-simplified/1327056-lesser-used-hooks/4089459-08-usetransition)

- Used to make the rendering look more responsive, even if there are long activities going on
- Expensive in term of re-rendering

### UseDeferredValue Hook

[Course Video](https://courses.webdevsimplified.com/view/courses/react-hooks-simplified/1327056-lesser-used-hooks/4089457-09-usedeferredvalue)

- Will wait for all the typing to be done, before updated the state

---

## Optional Hooks

---

### useLayoutEffect

[Course Video](https://courses.webdevsimplified.com/view/courses/react-hooks-simplified/1327244-optional-hooks/4121584-10-uselayouteffect)

- useEffect is Asynchronous, and will not block the DOM
- useLayoutEffect is Synchronous, and could be useful to immediately render

### useDebugValue

[Course Video](https://courses.webdevsimplified.com/view/courses/react-hooks-simplified/1327244-optional-hooks/4376394-11-usedebugvalue)

- Give you a way to write something next to the Custom hook (description): values for instance.
- Work only inside of Custom Hooks
- Using multiple useDebugValue is allowed, but it is automatically converted to an array by React, the best is to directly use an array, which will help to debug more complex values and objects
- useDebugValue if used as is will be pushed to production as well, use the function version of it, especially in case of very slow function

### useImperativeHandle

[Course Video](https://courses.webdevsimplified.com/view/courses/react-hooks-simplified/1327244-optional-hooks/4376394-11-usedebugvalue)

- 

---

## Custom Hooks

---

### useCustomHooks

[Course Video](https://courses.webdevsimplified.com/view/courses/react-hooks-simplified/1327246-custom-hooks/4121572-14-how-to-create-custom-hooks)

[GitHub](https://github.com/WebDevSimplified/useful-custom-react-hooks)

- Could be used as any React hook
- Should start with the keyword "use" (React naming convention), it will allow to run some internal mechanisms related to hooks
  