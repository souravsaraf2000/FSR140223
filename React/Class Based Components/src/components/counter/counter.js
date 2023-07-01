import React from 'react'
import styles from './counter.module.css'
import axios from 'axios'

/*
setState: 
setState is a method provided to us by React. The purpose of this method is 
1. To update the state value
2. After successfully updating the value, it calls the render method again (re-rendering) 
*/

class Counter extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            count: 0,
            users: [],
            products: []
        }
    }

    componentDidMount(){
        axios.get('https://dummyjson.com/users')
        .then(res => localStorage.setItem('users', JSON.stringify(res.data.users)))
        .catch(err => console.log(err))

        axios.get('https://dummyjson.com/users')
        .then(res => this.setState({users:res.data.users}))
        .catch(err => console.log(err))
    }

    increment = () =>{
        this.setState({
            count: this.state.count + 1
        }, () => {
            this.props.receiveDataFromChild(this.state.count)
        })
    }

    /*
        setState accepts another parameter also. It accepts a method and the speciality of this
        method is it gets executed automatically once the state updation is completed!!

        Another speciality is, it gets the updated value of the state. So, if you want to 
        perform any operation which requires the latest value of the state, use this method.
    */

    decrement = () =>{
        this.setState({
            count: this.state.count - 1
        }, () => {
            console.log(this.state)
        })
    }
    
    render(){
        let userData = JSON.parse(localStorage.getItem('users'))
        return(
            <>
                <h1>
                    Counter Component
                </h1>
                <h1>{this.props.name}</h1>
                <button onClick={this.decrement}>Decrement</button>
                <span className={styles.value}>{this.state.count}</span>
                <button onClick={this.increment}>Increment</button>

                <div>
                    {
                        userData.map(user => <h1>{user.firstName}</h1>)
                    }
                </div>
            </>
        )
    }
}

export default Counter;