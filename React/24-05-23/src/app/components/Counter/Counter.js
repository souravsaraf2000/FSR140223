"use client"
import { useState,useEffect } from "react"

const Counter = () => {

    let [value, setValue] = useState(0)
    const increment = () => {
        setValue(value + 1)
    }

    const decrement = () => {
        setValue(value - 1)
    }

    useEffect(()=>{
        console.log("Component Did Mount Called!")
    }, [])

    useEffect(()=>{
        console.log("Component Did Update Called!")

        return () => {
            console.log('Component Unmounted')
        }
    }, [value])

    return <div>
        <button
            onClick = {decrement}
        >
            Decrement
        </button>
        <h2>{value}</h2>
        <button
            onClick = {increment}
        >
            Increment
        </button>
    </div>
}

export default Counter