import { createContext } from "react";
import { useState } from 'react';
import axios from 'axios';

const TasksContext = createContext()

function Provider({children}){

    const [tasks, setTasks] = useState([])
  const createTask = async (title,tascDesc)=>{
  const response = await axios.post("http://localhost:3004/tasks",{
      title,
      tascDesc
    })
      
  const createdTasks = [
   
    ...tasks,
       response.data
  ]
  setTasks(createdTasks)
  }

  const fetchTask = async ()=>{
    const response = await axios.get("http://localhost:3004/tasks")
    console.log(response.data)
    setTasks(response.data)
  }

  const deleteTaskById = async (id)=>{
    await axios.delete(`http://localhost:3004/tasks/${id}`)
    const afterDeletingTasks = tasks.filter((task)=>{
         return task.id !== id
       })
       setTasks(afterDeletingTasks)
    }
 
    const editTaskById = async(id,updatesTitle,updatedTaskDesc)=>{
     await axios.put(`http://localhost:3004/tasks/${id}`,{
       title:updatesTitle,
       tascDesc:updatedTaskDesc
     })
     const updatedTasks = tasks.map((task)=>{
        if(task.id === id){
         return {
           id,
           title:updatesTitle,
           tascDesc:updatedTaskDesc
         }
        }else{
         return task
        }
          
        })
        setTasks(updatedTasks)
     }

     const sharedValuesAndMethods = {
        tasks,
        createTask,
        fetchTask,
        deleteTaskById,
        editTaskById
     }

    return (
        <TasksContext.Provider value={sharedValuesAndMethods}>
            {children}
        </TasksContext.Provider>
    )
}

export {Provider}
export default TasksContext