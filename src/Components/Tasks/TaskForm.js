import React from 'react'

function TaskForm(props) {
    return (
        <form onSubmit={props.onSubmit} >
        <div className="formGroup">
           <label htmlFor="name">Task Name</label>
           <input type='text' className="form-control" onChange={props.onValueChange} name='name' value={props.task.name}></input> 
        </div>
        <div className="formGroup">
           <label htmlFor="detail">Task Detail</label>
           <input type='text' className="form-control" onChange={props.onValueChange} name='detail' value={props.task.detail}></input> 
        </div>
        <div className="formGroup">
           <label htmlFor="project">Project</label>
           <select name="projectId" value={props.task.projectId} onChange={props.onValueChange}>
               {props.projects?.map(x=> <option key={x.id} value={x.id}>{x.name}</option>)}
           </select>
          </div>
        <div className="formGroup">
           <label htmlFor="userId">Assigned User</label>
           <select name="userId" value={props.task.userId} onChange={props.onValueChange}>
               {props.users?.map(x=> <option key={x.id} value={x.id}>{x.firstName}</option>)}
           </select>
        </div>
        <div className="formGroup">
           <label htmlFor="status">Status</label>
           <select name="status" value={props.task.status} onChange={props.onValueChange}>
               {props.statuses?.map(x=> <option key={x.id} value={x.id}>{x.status}</option>)}
           </select>
           </div>
        <button className="btn btn-outline-secondary" type='submit'>Save Task</button>
        {props.task.id && <button onClick={props.onDelete} className="btn btn-outline-danger spacinginBetween " type='button'>Delete Task</button>}
        </form>
    )
}

export default TaskForm
