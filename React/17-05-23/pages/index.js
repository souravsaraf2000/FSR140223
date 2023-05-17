import styles from '../styles/Home.module.css'
import Greet from './Greet'
import List from './List'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to React!</h1>
      <Greet/>
      <List/>
    </div>
  )
}
