import React,{useState,useEffect} from 'react'
import TaskForm from './TaskForm'
import * as taskAPi from './../../api/taskApi'
import {  toast } from "react-toastify";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UserAction  from '../../Redux/Actions/UserAction'
import * as StatusAction  from '../../Redux/Actions/StatusAction'
import * as ProjectAction  from '../../Redux/Actions/ProjectAction'
import * as TaskAction  from '../../Redux/Actions/TaskAction'
import * as TaskValidation from './../../Validation/TaskValidation'

function ManageTask(props) {
    const initialState={}
    const [task, setTask] = useState(initialState)

    const HandleChange=(e)=>{
        setTask({...task, [e.target.name]:e.target.value })
    }

    function HandleSubmit(e){
        e.preventDefault()
        if(ValidateTask()) return
        props.action.saveTask(task).then( (response)=>
        {
            props.history.push("/Dashboard/Tasks")
            toast.success( task.id ?'task is successfully updated':'task is successfully created')
        },(error)=>{
            toast.error("Some error has occured. Please try agian later!!")
        })
    }

    const HandleDelete=(e)=>{
        props.action.deleteTask(task.id).then((success)=>{
            props.history.push('/Dashboard/Tasks')
            toast.success("Task is successfully removed from system")
        },(failure)=>{
            toast.failure("So Sorry !! We are not able to delete the task. Please try again later.")
        })
    }
    function ValidateTask(){
        let errors=TaskValidation.Validate(task)
        if(errors.length>0){
            errors.map(x=>toast.warn(x))
            return true
        }   
        return false
    }

    useEffect(() => {
        const taskId=props.match.params.id
        if(taskId!=null){
            taskAPi.getTask(taskId).then(response=>setTask(response),err=>console.log(err))
        }
        if(props.statuses?.length==0){
            props.action.loadStatuses()
        }
        if(props.users?.length==0){
            props.action.loadUsers()
        }
        if(props.projects?.length==0){
            props.action.loadProjects()
        }
        // statusApi.getstatus().then(response=>setStatusList(response),err=>console.log('Not able to fetch status codes'))
        // userApi.getUsers().then((x) => {
        //     setUsers(x)
        // });
        // return () => {
            
        // }
    }, [])
    return (
        <div className="container cover">
            <h2 className="formheading">Manage Task</h2>
            <TaskForm onValueChange={HandleChange} onSubmit={HandleSubmit} onDelete={HandleDelete} users={props.users} projects={props.projects} task={task} statuses={props.statuses} />
        </div>
    )
}

function mapStateToProps(state,ownProps){
    return {
        statuses:state.StatusReducer,
        users:state.UserReducer,
        projects:state.ProjectReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
        action:{
            loadUsers:bindActionCreators(UserAction.loadUsers,dispatch),
            loadStatuses:bindActionCreators(StatusAction.loadStatuses,dispatch),
            loadProjects:bindActionCreators(ProjectAction.loadProjects,dispatch),
            saveTask:bindActionCreators(TaskAction.SaveTask,dispatch),
            deleteTask:bindActionCreators(TaskAction.RemoveTask,dispatch)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ManageTask)
