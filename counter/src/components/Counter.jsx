import React from 'react';
import CounterForm from './CounterForm';
import { useCounter } from './useCounter';

const Counter = () => {
  const { count, increment, decrement, setVal } = useCounter();

  return (
    <div>
      <h1>This is counter {count}</h1>
      <button onClick={() => increment()}>INCREMENT</button>
      <button onClick={() => decrement()}>DECREMENT</button>
      <button onClick={() => setVal(0)}>RESET</button>
      <CounterForm />
    </div>
  );
};

export default Counter;
