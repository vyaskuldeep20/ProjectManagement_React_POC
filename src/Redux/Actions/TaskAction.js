import * as taskApi from '../../api/taskApi'
import * as constants from '../ActionType/actionType'

export function loadTasksSuccess(tasks){
    return {type:constants.LOAD_TASKS_SUCCESS,payload:tasks}
}

export function AddTask(task){
    return {type:constants.CREATE_TASK,payload:task}
}

export function UpdateTask(task){
    return {type:constants.UPDATE_TASK,payload:task}
}

export function DeleteTask(taskId){
    return {type:constants.DELETE_TASK,payload:taskId}
}

export function SaveTask(task){
    return function(dispatch){
        return taskApi.saveTask(task).then(updatedTask=>{
            task.id?
            dispatch(UpdateTask(updatedTask)) :dispatch(AddTask(updatedTask))
        }).catch(error=>{
            throw error;
        })
    }
}

export function RemoveTask(taskId){
    return function(dispatch){
        return taskApi.deleteTask(taskId).then(response=>{
            dispatch(DeleteTask(taskId))
                }).catch(error=>{
            throw error;
        })
    }
}

export function loadTasks(){
    return function(dispatch){
        return taskApi.getTasks().then(tasks=>{
            dispatch(loadTasksSuccess(tasks))
        }).catch(error=>{
            throw error;
        })
    }
}