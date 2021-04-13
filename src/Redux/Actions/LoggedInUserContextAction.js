import * as constants from './../ActionType/actionType'
export function LoggedInUserContextAction(userContext){
    return {type : constants.USER_CONTEXT, payload: userContext }
}