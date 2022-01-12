import {useReducer} from "react";
export default function Counter() {
  function reducer(state, action) {
    // action.type에 따라 다르게 처리
    switch (action.type){
      case 'INCREASE':
        return state + 1;
      case 'DECREASE':
        return state -1;
      default:
        return state;
    }
  }
  const [number, dispatch] = useReducer(reducer,0);
  const onIncrease = () => {
    dispatch({type: 'INCREASE'});
  }
  const onDecrease = () => {
    dispatch({type: 'DECREASE'});
  }
  return (
    <div>
      <h1>{number}</h1>
      <p>
        <button onClick={onDecrease}>-1</button>
        <button onClick={onIncrease}>+1</button>
      </p>
    </div>
  )
}