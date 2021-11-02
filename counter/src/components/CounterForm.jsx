import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { setVal } from '../actions/actions';
import { useActions } from '../actions/useActions';
const CounterForm = () => {
  const actions = useActions({ setVal });
  const counterState = useSelector(state => state.count);
  const [counter, setCounter] = useState(counterState);

  useEffect(() => {
    setCounter(counterState);
  }, [counterState]);

  return (
    <form
      onSubmit={ev => {
        ev.preventDefault();
        actions.setVal(counter);
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
