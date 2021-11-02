import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVal } from '../actions/actions';
const CounterForm = () => {
  const dispatch = useDispatch();
  const counterState = useSelector(state => state.count);
  const [counter, setCounter] = useState(counterState);

  useEffect(() => {
    setCounter(counterState);
  }, [counterState]);

  return (
    <form
      onSubmit={ev => {
        ev.preventDefault();
        dispatch(setVal(counter));
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
