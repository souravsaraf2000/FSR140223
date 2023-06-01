"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./Card/Card"
import styles from './page.module.css'
import Form from "./Form/form"

export default function Home() {

  const [products, setProducts] = useState([])

  useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then(res => setProducts(res.data.products))
    .catch(err => console.log(err))
  },[])

  return (
    // <main className={styles.container}>
    //   {
    //     products.length > 0 && products.map((item, idx) => <Card product = {item} key = {idx}/>)
    //   }
    // </main>
    <main>
      <Form/>
    </main>
  )
}
