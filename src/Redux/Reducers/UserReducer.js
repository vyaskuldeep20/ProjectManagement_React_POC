import * as constants from '../ActionType/actionType'
import  initialState from './InitialState'
export default function UserReducer(users=initialState.users,action){
    switch (action.type) {
        case constants.LOAD_USERS_SUCCESS:
            return action.payload
        case constants.CREATE_USER:
            return [...users,{...action.payload}]
        case constants.UPDATE_USER:
            return  users.map(user=>user.id===action.payload.id ? action.payload : user)
        case constants.DELETE_USER:
              return users.filter(x=>x.id!==action.payload)
        default:
            return users;
    }

}

