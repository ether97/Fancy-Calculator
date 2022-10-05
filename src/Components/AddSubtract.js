import React from 'react'
import { useState } from 'react';

const AddSubtract = () => {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count=>count+1);
      }
      
      function decrement() {
        setCount(count=>count-1);
      }
  return (
    <div className="add-subtract">
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default AddSubtract
