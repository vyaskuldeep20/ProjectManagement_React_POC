import * as constants from '../ActionType/actionType'
import  initialState from './InitialState'
export default function TaskReducer(tasks=initialState.tasks,action){
    switch (action.type) {
        case constants.LOAD_TASKS_SUCCESS:
            return action.payload
        case constants.CREATE_TASK:
                return [...tasks,{...action.payload}]
        case constants.UPDATE_TASK:
                return  tasks.map(task=>task.id===action.payload.id ? action.payload : task)
        case constants.DELETE_TASK:
                  return tasks.filter(x=>x.id!==action.payload)
        default:
            return tasks;
    }

}

