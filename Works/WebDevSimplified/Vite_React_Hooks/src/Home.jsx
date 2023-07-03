import React from "react";

function Home() {
  return (
    <div>
      <b>Most Used</b>
      <ul>
        <li>
          <a href="/useState">useState</a>
        </li>
        <li>
          <a href="/useEffect">useEffect</a>
        </li>
        <li>
          <a href="/useContext">useContext</a>
        </li>
      </ul>
      <br /> <b>Less Used</b>
      <ul>
        <li>
          <a href="/useRef">useRef</a>
        </li>
        <li>
          <a href="/useMemo">useMemo</a>
        </li>
        <li>
          <a href="/useCallback">useCallback</a>
        </li>
        <li>
          <a href="/useReducer">useReducer</a>
        </li>
        <li>
          <a href="/useTransition">useTransition</a>
        </li>
        <li>
          <a href="/useDeferredValue">useDeferredValue</a>
        </li>
      </ul>
      <br /> <b>Optional Hooks</b>
      <ul>
        <li>
          <a href="/useLayoutEffect">useLayoutEffect</a>
        </li>
        <li>
          <a href="/UseDebugValuePage">useDebugValue</a>
        </li>
        <li>
          <a href="/useImperativeHandlePage">useImperativeHandle</a>
        </li>
        <li>
          <a href="/useIdPage">useId</a>
        </li>
      </ul>
      <br /> <b>Custom Hooks</b>
      <ul>
        <li>
          <a href="/useCustomHooksPage">UseCustomHooks</a>
        </li>
      </ul>
    </div>
  );
}

export default Home;
