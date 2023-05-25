"use client"

import axios from "axios";
import Card from "../Cards/Card";
import { useEffect, useState } from "react";
import styles from './ProductPage.module.css'

const ProductPage = () => {

    let [products, setProducts] = useState([])

    // componentDidMount
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(res => setProducts(res.data.products))
        .catch(err => console.log(err))
    },[])

    return <>
            <h1 style={{textAlign:'center'}}>Product Lists</h1>
            <div className={styles.wrapper}>
            {
                products.length !== 0 ? products.map(item => <Card product={item}/>) : ''
            }
            </div>
        </>
}

export default ProductPage;