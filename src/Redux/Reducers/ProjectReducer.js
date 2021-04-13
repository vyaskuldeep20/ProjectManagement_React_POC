import * as constants from '../ActionType/actionType'
import  initialState from './InitialState'
export default function ProjectReducer(projects=initialState.projects,action){
    switch (action.type) {
        case constants.LOAD_PROJECTS_SUCCESS:
            return action.payload
            case constants.CREATE_PROJECT:
                return [...projects,{...action.payload}]
            case constants.UPDATE_PROJECT:
                return  projects.map(project=>project.id===action.payload.id ? action.payload : project)
            case constants.DELETE_PROJECT:
                  return projects.filter(x=>x.id!==action.payload)
        default:
            return projects;
    }

}

