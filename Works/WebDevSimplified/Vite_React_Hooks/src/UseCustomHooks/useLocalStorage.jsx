import React, { useDebugValue, useEffect, useState } from "react";

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

function getValueSlowly(value) {
  for (let i = 0; i < 300000000; i++) {
    return value;
  }
}

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  //useDebugValue(value);
  //useDebugValue(key);

  //useDebugValue([key, value]);

  useDebugValue("Hi");
  useDebugValue({ key, value });

  useDebugValue(value, (v) => getValueSlowly(v));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

export default useLocalStorage;
