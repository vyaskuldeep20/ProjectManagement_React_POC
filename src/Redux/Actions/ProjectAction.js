
import * as projectApi from '../../api/projectsApi'
import * as constants from '../ActionType/actionType'
// export function ProjectAction(projects){
//     return {type : constants.projectS, projects: projects }
// }

export function loadProjectsSuccess(projects){
    return {type:constants.LOAD_PROJECTS_SUCCESS,payload:projects}
}

export function AddProject(project){
    return {type:constants.CREATE_PROJECT,payload:project}
}

export function UpdateProject(project){
    return {type:constants.UPDATE_PROJECT,payload:project}
}

export function DeleteProject(projectId){
    return {type:constants.DELETE_PROJECT,payload:projectId}
}


export function SaveProject(project){
    return function(dispatch){
        return projectApi.saveProject(project).then(updatedProject=>{
            project.id?
            dispatch(UpdateProject(updatedProject)) :dispatch(AddProject(updatedProject))
        }).catch(error=>{
            throw error;
        })
    }
}

export function RemoveProject(projectId){
    return function(dispatch){
        return projectApi.deleteProject(projectId).then(response=>{
            dispatch(DeleteProject(projectId))
                }).catch(error=>{
            throw error;
        })
    }
}
export function loadProjects(){
    return function(dispatch){
        return projectApi.getProjects().then(projects=>{
            dispatch(loadProjectsSuccess(projects))
        }).catch(error=>{
            throw error;
        })
    }
}