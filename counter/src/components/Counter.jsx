import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decrement, increment, setVal } from '../actions/actions';
import CounterForm from './CounterForm';

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  const actions = bindActionCreators(
    { setVal, decrement, increment },
    dispatch
  );

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
