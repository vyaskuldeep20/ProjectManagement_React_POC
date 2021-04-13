import React, { useState, useEffect } from "react";
import "./../../Styles/common.css";
import * as TaskAction from '../../Redux/Actions/TaskAction'
import * as StatusAction from '../../Redux/Actions/StatusAction'
import * as ProjectAction from '../../Redux/Actions/ProjectAction'
import {connect} from 'react-redux'
import { bindActionCreators } from "redux";
import TaskData from "./TaskData";

function TaskList(props) {
  const [Tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState(null);

  useEffect(() => {
    
    if(props.statuses.length==0){
      props.actions.loadStatuses()
    }
    if(props.projects.length==0){
      props.actions.loadProjects()
    }
    if(props.tasks?.length==0){
      props.actions.loadTasks()
    }
    
    
  }, []);
 
  function HandleAddTask(){
    props.history.push("/Dashboard/ManageTask")
}
function HandleTaskFilter(e){
  if(e.target.value==""){
    setFilteredTasks(props.tasks)
  }
  else{
    setFilteredTasks(props.tasks.filter(x=>x.name.toLowerCase().includes(e.target.value.toLowerCase())))
  }    
}
  return (
    <div>
      <div className="addItem"><button onClick={HandleAddTask} className="btn btn-outline-secondary">Add Task</button>
      <input type='text' className="searchbox" placeholder="Search Task Here" onChange={HandleTaskFilter}></input>
      </div>
      <div className="listContainer">
      <table className="table table-hover">
        <thead className="thead-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Details</th>
            <th>Project</th>
            <th>AssignedUser</th>
            <th>Status</th>
            <th>CreatedOn</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks==null? props?.tasks?.map(task=><TaskData task={task} projects={props.projects} statuses={props.statuses} users={props.users} />) :filteredTasks?.map(task => <TaskData task={task} projects={props.projects} statuses={props.statuses} users={props.users} /> 
            
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
}

function mapStateToProps(state,ownProps){
  return {
      tasks:state.TaskReducer,
      users:state.UserReducer,
      statuses:state.StatusReducer,
      projects:state.ProjectReducer
  }
}

function mapDispatchToProps(dispatch){
    return {
      actions:{
        loadTasks:bindActionCreators(TaskAction.loadTasks,dispatch),
        loadStatuses:bindActionCreators(StatusAction.loadStatuses,dispatch),
        loadProjects:bindActionCreators(ProjectAction.loadProjects,dispatch)
      }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(TaskList);
