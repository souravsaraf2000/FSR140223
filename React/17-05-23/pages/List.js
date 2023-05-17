import React from 'react'

class List extends React.Component{
    list = ["Learn React", "Practice Hands-on", "Dedicate 2hrs daily!"]
    render(){
        return(
            <div>
                <ol>
                {
                    this.list.map(task => <li key={task}>{task}</li>)
                }
                </ol>
            </div>
        )
    }
}

export default List