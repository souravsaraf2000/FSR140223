"use client"
import axios from 'axios'
import styles from './page.module.css'

export default function Home() {

  const getData = async () => {
    let response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(response.data)
  }

  getData()
  console.log("hello world")

  return (
    <main className={styles.main}>
      <h1>Welcome to React Week 3</h1>
    </main>
  )
}
