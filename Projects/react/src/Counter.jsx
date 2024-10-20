import { useState } from "react"

function Counter(){
    const[count, setCount]= useState(0);

    const handleInc = () => {
        const newCount = count+1;
        setCount(newCount)
  }

const handleRed = () => {
    const newCount = count-1;
    setCount(newCount)
   }
    return (
        <div>
            <h3>Counter: {count}</h3>
            <button onClick={handleInc}>Increase Count</button>
            <button onClick={handleRed}>Decrease Count</button>
        </div>
    )
}

export default Counter