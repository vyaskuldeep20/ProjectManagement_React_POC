import * as userApi from '../../api/userApi'
import * as constants from '../ActionType/actionType'
export function UserAction(users){
    return {type : constants.USERS, users: users }
}

export function loadCourseSuccess(users){
    return {type:constants.LOAD_USERS_SUCCESS,payload:users}
}

export function AddUser(user){
    return {type:constants.CREATE_USER,payload:user}
}

export function UpdateUser(user){
    return {type:constants.UPDATE_USER,payload:user}
}

export function DeleteUser(usersId){
    return {type:constants.DELETE_USER,payload:usersId}
}



export function SaveUser(user){
    return function(dispatch){
        return userApi.saveUser(user).then(updatedUser=>{
            user.id?
            dispatch(UpdateUser(updatedUser)) :dispatch(AddUser(updatedUser))
        }).catch(error=>{
            throw error;
        })
    }
}

export function RemoveUser(userId){
    return function(dispatch){
        return userApi.deleteUser(userId).then(response=>{
            dispatch(DeleteUser(userId))
                }).catch(error=>{
            throw error;
        })
    }
}

export function loadUsers(){
    return function(dispatch){
        return userApi.getUsers().then(response=>{
            dispatch(loadCourseSuccess(response))
        }).catch(error=>{
            throw error;
        })
    }
}