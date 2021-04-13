import React from 'react'
import {Link} from 'react-router-dom'

function TaskData(props) {
    const {task,users,statuses,projects}=props
    return (
        <>
          <tr key={task.id}>
                <td>{task.id}</td>
                <td><Link to={"/Dashboard/ManageTask/"+task.id}>{task.name}</Link></td>
                <td>{task.detail}</td>
                <td>{projects.find(x=>x.id==task.projectId)?.name}</td>
                <td>{users.find(x=>x.id==task.userId)?.firstName}</td>
                <td>{statuses.find(x=>x.id==task.status)?.status}</td>
                <td>{task.createdAt}</td>
              </tr>  
        </>
    )
}

export default TaskData
