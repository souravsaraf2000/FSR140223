"use client"
import { useState } from 'react'

export default function Home() {
  let [tasks, setTasks] = useState([])
  let [insertedTask, setInsertedTask] = useState('')

  const getDataFromInput = (e) => {
    setInsertedTask(e.target.value)
  }

  const insertTask = () => {
    let allTasks = [...tasks]
    allTasks.push(insertedTask)
    setTasks(allTasks)
    setInsertedTask('')
  }

  return (
    <main>
      {
        console.log("Component Re-Rendered")
      }
      <input 
        type='text' 
        placeholder='Enter a task'
        onChange={(e) => getDataFromInput(e)}
        value = {insertedTask}
      />
      <button 
        onClick={insertTask}
      >Add Task</button>

      <div>
        <ol>
          {
            tasks.length!==0 && tasks.map((item,idx) => <li key={idx}>{item}</li>)
          }
        </ol>
      </div>
    </main>
  )
}
