import React from 'react'

function ProjectForm(props) {
    return (
        <form onSubmit={props.onSubmit} >
        <div className="formGroup">
           <label htmlFor="name">Name</label>
           <input type='text' className="form-control" onChange={props.onValueChange} name='name' value={props.project.name}></input> 
        </div>
        <div className="formGroup">
           <label htmlFor="detail">Detail</label>
           <input type='text' className="form-control" onChange={props.onValueChange} name='detail' value={props.project.detail}></input> 
        </div>
        <div className="formGroup"></div>
        <button className="btn btn-outline-secondary" type='submit'>Save project</button>
        {props.project.id && <button onClick={props.onDelete} disabled={!props.userContext.isAdmin} className="btn btn-outline-danger spacinginBetween " type='button'>Delete Project</button>}
        </form>
    )
}

export default ProjectForm
