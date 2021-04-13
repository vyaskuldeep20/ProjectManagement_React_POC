import * as constants from './../ActionType/actionType'
const initialState={}
export default function LoggedInUserContextReducer(state=initialState,action){
    switch (action.type) {
        case constants.USER_CONTEXT:
            return action.payload
        default:
            return state;
    }

}