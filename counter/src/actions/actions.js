export const DECREMENT = 'DECREMENT';
export const INCREMENT = 'INCREMENT';
export const SET = 'SET';

export const decrement = () => ({ type: DECREMENT });
export const increment = () => ({ type: INCREMENT });
export const setVal = val => ({ type: SET, payload: val });
