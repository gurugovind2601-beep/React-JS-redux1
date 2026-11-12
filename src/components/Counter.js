import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment, decrement,reset} from "../features/counter/counterSlice"

const Counter = () => {
    const  count = useSelector((state)=>state.counter);
    console.log(count);
    const dispatch = useDispatch();

  return (
    <div>
        <h1>Count: {count.value}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter