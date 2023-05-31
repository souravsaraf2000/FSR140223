"use client"

import { useRouter } from "next/navigation"

const Contact = () => {
    let { push } = useRouter()
    const backToHome = () => {
        push('/')
    }
    return <>
        <h1>Contact Page!</h1>
        <button onClick={backToHome}>Home</button>
    </>
}

export default Contact