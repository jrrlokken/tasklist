import { useState, useEffect } from 'react';

function useLocalStorageState(key, initialValue) {
  // make piece of state based off of value in localStorage (or default)
  const [ state, setState ] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(initialValue));
    }
    catch(err) {
      val = initialValue;
    }
    return val;
  });

  // useEffect to update localStorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
}

export default useLocalStorageState;