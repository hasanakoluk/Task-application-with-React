import { useState } from "react";

function TaskCreate({onCreate,task,taskFormUpdate,onUpdate}) {
    const [title, setTitle] = useState(task ? task.title : "")
    const [tascDesc, setTaskDesc] = useState(task ? task.tascDesc : "")
    const handleChange = (event)=>{
        setTitle(event.target.value)
    }
    const handleTascDesc = (event)=>{
        setTaskDesc(event.target.value)
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        if(taskFormUpdate){
            onUpdate(task.id,title,tascDesc)
        }else{
            onCreate(title,tascDesc)
        }
        
        setTitle("")
        setTaskDesc("")
    }
    
    return ( 
    <div>{taskFormUpdate ? 
    <div className="task-updatee">
    <h3>Taskı Düzenleyiniz</h3>
    <form className="task-form">
       <label className="task-label">Başlığı Düzenleyiniz</label>
       <input value={title} onChange={handleChange}  className="task-input"/>
       <label className="task-label">Taskı Düzenleyiniz</label>
       <textarea value={tascDesc} onChange={handleTascDesc} className="task-input" rows={5}/>
       <button className="update-button" onClick={handleSubmit}>Düzenle</button>
    </form>
    </div>
    :<div className="task-create">
     <h3 className="title-create">Task Ekleyiniz</h3>
     <form className="task-form">
        <label className="task-label">Başlık</label>
        <input value={title} onChange={handleChange}  className="task-input"/>
        <label className="task-label">Task Giriniz</label>
        <textarea value={tascDesc} onChange={handleTascDesc} className="task-input" rows={5}/>
        <button className="task-button" onClick={handleSubmit}>Oluştur</button>
     </form>
     </div>}</div>
    
    
    );
}

export default TaskCreate;