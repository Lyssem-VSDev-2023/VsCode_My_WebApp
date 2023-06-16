# React Hooks

## UseState Hook

[Course Video](https://courses.webdevsimplified.com/view/courses/react-hooks-simplified/1327055-must-know-hooks/4076826-01-usestate)

- Hooks can be only inside **function**, not inside classes, classes have their own way to do the same (**class components**)
- Hooks execute in the **same order**, they should be in teh top level, cannot be in an if statement or any other block.
- To use useState:
  - useState returns an array of two values
    - the current state (= default value)
    - a function to update the state
  - Assign the useState to a variable (`const`)

## UseEffect Hook

[Course Video](https://courses.webdevsimplified.com/view/courses/react-hooks-simplified/1327055-must-know-hooks/4076830-02-useeffect)

- UseEffect is a hook that take place when a parameter/state changes
- Executes at application renders if no 2nd parameter is specified
- if a second parameter (Array []) is specified, then the useEffect take place when this resource is updated
- if an empty array is passed, then it is executed onMount (1 time only)

## useContext Hook
