"use client"
import axios from 'axios'
import { useEffect } from 'react'

export default function Home() {
  useEffect(()=>{
    // axios.get("https://dummyjson.com/products")
    // .then(res => console.log(res.data))
    // .catch(err => console.log(err))


    // let courseInfo = {
    //   "title" : "React Interview Preparation Guide Course",
    //   "description" : "This course will help you prepare for the interview",
    //   "price" : 10,
    //   "rating" : 4.5
    // }

    // axios.post("https://dummyjson.com/products/add", courseInfo)
    // .then(res => console.log(res.data))
    // .catch(err => console.log(err))


    // let updatedInfo = {
    //     "title" : "Blue Perfume",
    //     "description" : "ITC Engage Blue Perfume",
    //     "price" : 1000,
    //     "rating" : 4.8
    //   }

    // axios.patch("https://dummyjson.com/products/12", updatedInfo)
    // .then(res => console.log(res.data))
    // .catch(err => console.log(err))

    axios.delete("https://dummyjson.com/products/15")
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  },[])


  return (
    <main>
      
    </main>
  )
}
