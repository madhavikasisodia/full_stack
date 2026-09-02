import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }
    function decrease() {
        if(count > 0){
            setCount(count - 1);
        }
    }
    function reset() {
        setCount(0);
    }
    return (
        <>
            <h4>Counter: {count}</h4>
            <button onClick={increase}>Increase</button>
            <br></br>
            <button onClick={decrease}>Decrease</button>
            <br></br>
            <button onClick={reset}>Reset</button>
        </>
    );
}

export default Counter;