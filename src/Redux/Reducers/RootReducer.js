import { combineReducers } from 'redux';
import LoggedInUserContextReducer from './LoggedInUserContextReducer';
import ProjectReducer from './ProjectReducer';
import TaskReducer from './TaskReducer';
import UserReducer from './UserReducer';
import StatusReducer from './StatusReducer'

const RootReducer=combineReducers({
    LoggedInUserContextReducer:LoggedInUserContextReducer,
    UserReducer:UserReducer,
    TaskReducer:TaskReducer,
    ProjectReducer:ProjectReducer,
    StatusReducer:StatusReducer

})

export default RootReducer; 