"use client"
import { useRouter } from "next/navigation"

export default function Home() {
  let { push } = useRouter()

  // const directToHome = () => {
  //   push('/home')
  // }
  const directTo = (path) => {
    push(path)
  }

  return (
    <main>
      {/* <button onClick={directToHome}>Home</button> */}
      <button onClick={()=>directTo('/home')}>Home</button>
      <button onClick={()=>directTo('/about')}>About</button>
      <button onClick={()=>directTo('/contact')}>Contact</button>
    </main>
  )
}
