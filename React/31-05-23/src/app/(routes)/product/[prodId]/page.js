"use client"

import axios from "axios"
import { useEffect } from "react"

const Product = (props) => {
    console.log(props)
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${props.params.prodId}`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    })
    return <>
        <h1>The product you are searching for is : {props.params.prodId}</h1>
    </>
}

export default Product