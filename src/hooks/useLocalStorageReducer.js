import { useReducer, useEffect } from 'react';

function useLocalStorageReducer(key, defaultValue, reducer) {
  // make piece of state based off of value in localStorage (or default)
  const [ state, dispatch ] = useReducer(reducer, defaultValue, () => {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem(key) || String(defaultValue));
    }
    catch(err) {
      value = defaultValue;
    }
    return value;
  });

  // useEffect to update localStorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key,state]);

  return [state, dispatch];
}

export { useLocalStorageReducer };