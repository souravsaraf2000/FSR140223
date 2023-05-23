"use client"
import { useState } from "react"

const Counter = () => {
    let [count, setCount] = useState(0)
    const incrementCounter = () => {
        setCount(count+1)
    }

    const decrementCounter = () => {
        if(count !== 0){
            setCount(count-1)
        }
    }

    return <div>
        <button onClick={decrementCounter}>Decrement</button>
        <h2>{count}</h2>
        <button onClick={incrementCounter}>Increment</button>
    </div>
}

export default Counter