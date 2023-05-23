import { useState } from "react"

const User = () => {
    let [userData, setUserData] = useState({
        name : '',
        mob : 0
    })
    const updateStateValue  = (e, field) =>{
        if(field == "name"){
            setUserData({
                ...userData,
                name: e.target.value
            })
        }
        else if(field == "number"){
            setUserData({
                ...userData,
                mob: e.target.value
            })
        }
    }
    const printInfo = () => {
        console.log(userData)
    }
    return <div>
        <input 
            type="text" 
            placeholder="Enter name"
            onChange = {(e) => updateStateValue(e,"name")}
        />
        <input 
            type="number" 
            placeholder="Enter mobile number"
            onChange = {(e) => updateStateValue(e,"number")}
        />
        <button
            onClick = {printInfo}
        >Submit</button>
    </div>
}

export default User