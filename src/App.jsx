
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
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

    useEffect(()=>{
      fetchTask()
    },[]) 

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
        return {id,
          title:updatesTitle,
          tascDesc:updatedTaskDesc
        }
       }else{
        return task
       }
         
       })
       setTasks(updatedTasks)
    }

  return (
    <div className="App">
      <TaskCreate onCreate={createTask}/>
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById}/>
    </div>
  );
}

export default App;
