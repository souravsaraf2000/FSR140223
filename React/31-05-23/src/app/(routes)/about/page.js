"use client"

import { useRouter } from "next/navigation"

const About = () => {
    let { push } = useRouter()
    const backToHome = () => {
        push('/')
    }
    return <>
        <h1>About Page!</h1>
        <button onClick={backToHome}>Home</button>
    </>
}

export default About