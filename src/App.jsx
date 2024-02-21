
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useState } from 'react';
function App() {
const [tasks, setTasks] = useState([])
  const createTask = (title,tascDesc)=>{
  const createdTasks = [
    ...tasks,{
        id:Math.round(Math.random()*999999),
        title,
        tascDesc
      }
  ]
  setTasks(createdTasks)
  }
   const deleteTaskById = (id)=>{
   const afterDeletingTasks = tasks.filter((task)=>{
        return task.id !== id
      })
      setTasks(afterDeletingTasks)
   }

   const editTaskById = (id,updatesTitle,updatedTaskDesc)=>{
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
