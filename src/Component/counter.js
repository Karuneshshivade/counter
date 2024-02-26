import React from 'react';
import { useState } from 'react';

function Counter(){
    const start=0;
    const [count, setCount] = useState(start);
    function increment() {
        setCount(count+1);
    }function decrement(){
        setCount(count-1)
    }
    function reset()
    {
        setCount(start);
    }
    return (
        <div>
            Counter: {count} <br></br>
            <button onClick={() =>increment()}>Increment</button>
            <button onClick={()=>decrement()}>Decrement</button>
            <button onClick={()=>reset()}>Reset</button>
        </div>
    )
}
export default Counter