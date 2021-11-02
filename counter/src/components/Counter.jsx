import React from 'react';
import { useSelector } from 'react-redux';
import { decrement, increment, setVal } from '../actions/actions';
import { useActions } from '../actions/useActions';
import CounterForm from './CounterForm';

const Counter = () => {
  const count = useSelector(state => state.count);
  const actions = useActions({ setVal, decrement, increment });

  return (
    <div>
      <h1>This is counter {count}</h1>
      <button onClick={() => actions.increment()}>INCREMENT</button>
      <button onClick={() => actions.decrement()}>DECREMENT</button>
      <button onClick={() => actions.setVal(0)}>RESET</button>
      <CounterForm />
    </div>
  );
};

export default Counter;
