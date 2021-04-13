import * as constants from '../ActionType/actionType'
import  initialState from './InitialState'
export default function StatusReducer(statuses=initialState.statuses,action){
    switch (action.type) {
        case constants.LOAD_STATUSES_SUCCESS:
            return action.payload
        // case constants.ADD_USER:
        //     return [...users,{...action.payload}]
        // case constants.UPDATE_USER:
        //     return [...state,state.find(user=>user.id==action.payload.id)=action.payload]
        // case constants.DELETE_USER:
        //     return [...users,users.filter(user => user.id !== action.payload)]
        default:
            return statuses;
    }

}

