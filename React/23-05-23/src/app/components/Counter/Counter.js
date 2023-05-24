"use client"
import { useState, useEffect } from "react"
import Message from "../Message/Message"
import Greet from "../Greet/Greet"

const Counter = () => {
    let [count, setCount] = useState(0)
    let [countNew, setCountNew] = useState(0)
    // componentDidMount
    useEffect(()=>{
        console.log("Component Did Mount")
    }, [])

    // componentDidUpdate
    useEffect(()=>{
        console.log("Component Did Update")
    }, [count, countNew])

    const incrementCounter = () => {
        setCount(count+1)
    }

    const decrementCounter = () => {
        if(count !== 0){
            setCount(count-1)
        }
    }

    const incrementCounterNew = () => {
        setCountNew(countNew+1)
    }

    const decrementCounterNew = () => {
        if(countNew !== 0){
            setCountNew(countNew-1)
        }
    }

    console.log("Counter Component Loaded")

    return <div>
        <button onClick={decrementCounter}>Decrement</button>
        <h2>{count}</h2>
        <button onClick={incrementCounter}>Increment</button> <br/>
        <button onClick={decrementCounterNew}>Decrement</button>
        <h2>{countNew}</h2>
        <button onClick={incrementCounterNew}>Increment</button>
        <Message/>
        <Greet/>
    </div>
}

export default Counter