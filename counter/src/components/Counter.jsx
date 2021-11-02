import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DECREMENT, INCREMENT, SET } from '../actions/actions';
import CounterForm from './CounterForm';

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>This is counter {count}</h1>
      <button onClick={() => dispatch({ type: INCREMENT })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>DECREMENT</button>
      <button onClick={() => dispatch({ type: SET, payload: 0 })}>RESET</button>
      <CounterForm />
    </div>
  );
};

export default Counter;
