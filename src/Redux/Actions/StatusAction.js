import * as statusApi from '../../api/statusApi'
import * as constants from '../ActionType/actionType'


export function loadStatusesSuccess(statuses){
    return {type:constants.LOAD_STATUSES_SUCCESS,payload:statuses}
}



export function loadStatuses(){
    return function(dispatch){
        return statusApi.getstatus().then(statuses=>{
            dispatch(loadStatusesSuccess(statuses))
        }).catch(error=>{
            throw error;
        })
    }
}