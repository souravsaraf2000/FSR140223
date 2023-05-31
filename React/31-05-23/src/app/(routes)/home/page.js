"use client"

import { useRouter } from "next/navigation"

const Home = () => {
    let { push } = useRouter()
    const backToHome = () => {
        push('/')
    }
    return <>
        <h1>Home Page!</h1>
        <button onClick={backToHome}>Home</button>
    </>
}

export default Home