import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, setVal } from '../actions/actions';
import { useActions } from '../actions/useActions';

export const useCounter = () => {
  const dispatch = useDispatch();
  const actions = useActions({ increment, decrement, setVal }, dispatch);
  const count = useSelector(state => state.count);
  return { count, ...actions };
};
