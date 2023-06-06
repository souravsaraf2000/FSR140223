"use client"
import Message from './message'
import styles from './page.module.css'

export default function Home() {
  const receiveInfo = (info) => {
    console.log(info)
  }
  return (
    <main className={styles.main}>
      <Message msg={"Hello User! Welcome to greet component!"} receiveInfo={receiveInfo}/>
    </main>
  )
}
