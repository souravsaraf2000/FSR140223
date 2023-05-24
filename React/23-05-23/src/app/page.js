"use client"

import { useEffect } from 'react'
import Counter from './components/Counter/Counter'
import Greet from './components/Greet/Greet'
import Message from './components/Message/Message'
import styles from './page.module.css'

// First create the Home component in DOM -> Create Its Child Components --> componentDidMount is executed

// Property of componentDidMount() --> Executes automatically when the component is mounted on DOM. This method executes only ONCE.

// useEffect Hook accepts 2 values, 1st -> Callback function, 2nd -> Dependency List

// Dependency List -> List of variables upon which the useEffect hook depends for execution

const Home = () => {
  console.log("Home Component Loaded")

  // useEffect(()=>{
  //   console.log('Component Did Mount Executed!')
  // },[])

  return (
    <main className={styles.main}>
      {/* <Message/>
      <Greet/> */}
      {/* <Counter/> */}
    </main>
  )
}

export default Home
