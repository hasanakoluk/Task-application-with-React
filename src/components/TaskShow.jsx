import { useState } from "react"
import TaskCreate from "./TaskCreate"
function TaskShow({task,onDelete,onUpdate}) {

    const [showEdit, setShowEdit] = useState(false)

    const handleDeleteClick =()=>{
        onDelete(task.id)
    }
    const handleEditClick =()=>{
        setShowEdit(!showEdit)
    }

    const handleSubmit =(id,updatedTitle,updatedTascDesc)=>{
        setShowEdit(false)
        onUpdate(id,updatedTitle,updatedTascDesc)
    }

    console.log(task)
    return ( 
    <div className="task-show">
        {showEdit ? 
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit}/> 
        
        :
        <div><h2 className="task-title">Göreviniz</h2>
        <p>{task.title}</p>
        <h2 className="task-title">Yapılacaklar</h2>
        <p>{task.tascDesc}</p>
        <button className="task-delete" onClick={handleDeleteClick}>Sil</button>
        <button className="task-update" onClick={handleEditClick}>Güncelle</button>
        </div>
        }
        
    </div>
   
     );
}

export default TaskShow;