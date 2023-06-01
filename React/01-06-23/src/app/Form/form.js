"use client"
import { useState } from 'react'
const Form = () => {
    const [formData, setFormData] = useState({
        name : '',
        email: '',
        password: '',
        mobile: 0
    })

    const formControl = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    const updateData = (e, field) => {
        let val = e.target.value
        if(field == "name"){
            setFormData({
                ...formData,
                name: val
            })
        }
        else if(field == "email"){
            setFormData({
                ...formData,
                email: val
            })
        }
        else if(field == "password"){
            setFormData({
                ...formData,
                password: val
            })
        }
        else{
            setFormData({
                ...formData,
                mobile: val
            })
        }
    }

    return <div>
        <form onSubmit={(e)=>formControl(e)}>
            <input type="text" placeholder="Enter Name" onChange={(e)=>updateData(e,"name")}/><br/>
            <input type="email" placeholder="Enter Email" onChange={(e)=>updateData(e,"email")}/><br/>
            <input type="password" placeholder="Enter Password" onChange={(e)=>updateData(e,"password")}/><br/>
            <input type="number" placeholder="Enter mobile" onChange={(e)=>updateData(e,"mobile")}/><br/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
}

export default Form;