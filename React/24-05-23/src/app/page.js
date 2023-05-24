"use client"
import styles from './page.module.css'
import Counter from './components/Counter/Counter'
import { useState } from 'react'
import axios from 'axios'

export default function Home() {
  let [showCounter, setShowCounter] = useState(true)

  const updateShow = () => {
    setShowCounter(!showCounter)
  }
  console.log(showCounter)

  fetch('https://dummyjson.com/products')
  .then(data => data.json())
  .then(finalData => console.log(finalData))
  .catch(err => console.log(err))

  axios('https://dummyjson.com/products')
  .then(response => console.log(response.data))
  .catch(err => console.log(err))

  return (
    <main className={styles.main}>
      {showCounter == true ? <Counter/> : ""}
      <button onClick={updateShow}>Toggle</button>
    </main>
  )
}
