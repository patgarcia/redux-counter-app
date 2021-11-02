import React, { useEffect, useState } from 'react';
import { useCounter } from './useCounter';
const CounterForm = () => {
  const { count, setVal } = useCounter();
  const [counter, setCounter] = useState(count);

  useEffect(() => {
    setCounter(count);
  }, [count]);

  return (
    <form
      onSubmit={ev => {
        ev.preventDefault();
        setVal(counter);
      }}
    >
      <input
        type="text"
        name="counter-field"
        id="counter-field"
        value={counter}
        onChange={ev => setCounter(ev.target.value)}
      />
      <button>submit</button>
    </form>
  );
};

export default CounterForm;
