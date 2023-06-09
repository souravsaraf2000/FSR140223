"use client"

import { useDispatch, useSelector } from "react-redux"

const Counter = () => {
    const incrementAction = {
        type : "INCREMENT_VALUE"
    }
    const decrementAction = {
        type : "DECREMENT_VALUE"
    }
    const dispatch = useDispatch()
    const val = useSelector(state => state.count)
    
    return <div>
        <h1>{val}</h1>
        <button
            onClick = {()=>dispatch(incrementAction)}
        >
            Increment
        </button>
        <button
            onClick={()=>dispatch(decrementAction)}
        >
            Decrement
        </button>
    </div>
}

export default Counter