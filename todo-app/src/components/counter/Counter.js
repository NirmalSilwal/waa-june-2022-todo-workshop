import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementByAmount, decrement } from "../redux/CounterSlice";

export default function Counter() {
    
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter</h2><br />
      <div>
        <label>{count}</label>
        <br />
        <button onClick={() => dispatch(increment)}>Increment</button>
        <br />
        <button onClick={() => dispatch(decrement)}>Decrement</button>
      </div>
    </div>
  );
}
