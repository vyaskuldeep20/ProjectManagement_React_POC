import React,{useState,useEffect} from 'react'
import ProjectForm from './ProjectForm'
import * as projectAPi from './../../api/projectsApi'
import {  toast } from "react-toastify";
import { connect } from 'react-redux';
import * as ProjectAction from './../../Redux/Actions/ProjectAction'
import * as TaskAction from './../../Redux/Actions/TaskAction'
import { bindActionCreators } from 'redux';
import * as ProjectValidation from './../../Validation/ProjectValidation'

function ManageProject(props) {
    const initialState={name:"",detail:""}
    const [project, setProject] = useState(initialState)

    const HandleChange=(e)=>{
        setProject({...project, [e.target.name]:e.target.value })
    }

    useEffect(() => {
        const projectId=props.match.params.id
        if(projectId!=null){
            if(props.projects.length==0){
                props.actions.loadProjects()
            }
            else{
                setProject(props.projects.find(project=>project.id==projectId))
            }
           }
        return () => {
            
        }
    }, [])

    const HandleDelete=(e)=>{
        if(props.tasks.some(x=>x.projectId==project.id)){
            toast.warn('Task with this project exists. Kindly change/remove that.')
            return
        }
        props.actions.deleteProject(project.id).then((success)=>{
            props.history.push('/Dashboard/Projects')
            toast.success("Project is successfully removed from system")
        },(failure)=>{
            toast.failure("So Sorry !! We are not able to delete the project. Please try again later.")
        })
    }
    function ValidateProject(){
        let errors=ProjectValidation.Validate(project)
        if(errors.length>0){
            errors.map(x=>toast.warn(x))
            return true
        }
        return false
        
    }
    function HandleSubmit(e){
        e.preventDefault()
        if(ValidateProject()) return
        props.actions.saveProject(project).then( (response)=>
        {
            props.history.push("/Dashboard/Projects")
            toast.success( project.id ?'project is successfully updated':'project is successfully created')
        },(error)=>{
            toast.error( 'Some error occured')
        })
    }
    return (
        <div className="container cover">
            <h2 className="formheading">Manage Project</h2>
            <ProjectForm onValueChange={HandleChange} onSubmit={HandleSubmit} onDelete={HandleDelete} userContext={props.userContext} project={project} />
        </div>
    )
}
function mapStateToProps(state,ownProps){
    return {
        projects:state.ProjectReducer,
        userContext:state.LoggedInUserContextReducer,
        tasks:state.TaskReducer
    }
}


function mapDispatchToProps(dispatch){
    return {
      actions:{
        loadProjects:bindActionCreators(ProjectAction.loadProjects,dispatch),
        loadTasks:bindActionCreators(TaskAction.loadTasks,dispatch),
        saveProject:bindActionCreators(ProjectAction.SaveProject,dispatch),
        deleteProject:bindActionCreators(ProjectAction.RemoveProject,dispatch)
         }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ManageProject)
