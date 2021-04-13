import React,{useState,useEffect} from 'react'
import UserForm from './UserForm'
import * as userAPi from './../../api/userApi'
import {  toast } from "react-toastify";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserAction  from '../../Redux/Actions/UserAction';
import * as TaskAction  from '../../Redux/Actions/TaskAction';
import * as UserContextActions  from '../../Redux/Actions/LoggedInUserContextAction';
import * as UserValidation from './../../Validation/UserValidation'

function ManageUser(props) {
    const initialState={firstName:"",lastName:"",email:"",id:null,password:""}
    const [user, setUser] = useState(initialState)

    const HandleChange=(e)=>{
        if(e.target.id=='isAdmin'){
            setUser({...user, [e.target.name]:e.target.checked })
        }
        else{
            setUser({...user, [e.target.name]:e.target.value })
        }
        
    }
    const getNoOfAdminProfiles=()=>props.users.reduce((initialcount, user) =>{
        return initialcount + (user.isAdmin === true);
    }, 0);

    const HandleDelete=(e)=>{

        if(props.tasks.some(x=>x.userId==user.id)){
            toast.warn("User is Assigned with a task. Please deallocate task from his name.")
            return
        }
        if(getNoOfAdminProfiles()==1 && user.id==props.userContext.user.id){
            toast.error('You are the only admin in Users. If you want to delete,kindly give admin access to any other user');
            return
        }
        if(user.id!==props.userContext.user.id && user.isAdmin){
            toast.error("You can't delete other admin user data without his consent.Super admin access is required to do that.")
            return
        }
        
        props.actions.deleteUser(user.id).then((success)=>{
            if(user.id==props.userContext.user.id){
                localStorage.removeItem('_ProjectManagementToken')
                props.actions.updateUserContext({isAdmin:false,isUserLoggedIn:false,user:{},_ProjectManagementToken:localStorage.getItem('_ProjectManagementToken')}) 
            }
            props.history.push('/Dashboard/Users')
            toast.success("user is successfully removed from system")
        },(failure)=>{
            toast.error("So Sorry !! We are not able to delete the user. Please try again later.")
        })
    }

    useEffect(() => {
        const userId=props.match.params.id
        if(userId!=null){
            if(props.users.length==0){
                props.actions.loadUsers()
            }
            if(props.tasks?.length==0){
                props.actions.loadTasks()
            }
            setUser(props.users.find(user=>user.id==userId))
            }
        return () => {
            
        }
    }, [])


    function ValidateUser(){
        let errors=UserValidation.Validate(user,props.userContext,props.users)
        if(errors.length>0){
            errors.map(x=>toast.warn(x))
            return true
        }
        return false
    }

    function HandleSubmit(e){
        e.preventDefault()
        if(ValidateUser()) return
        props.actions.saveUser(user).then( (response)=>
        {
            if(user.id==props.userContext.user.id){
                props.actions.updateUserContext({isAdmin:user.isAdmin,isUserLoggedIn:true,user:user,_ProjectManagementToken:localStorage.getItem('_ProjectManagementToken')}) 
            }
            props.history.push("/Dashboard/Users")
            toast.success( user.id ?'user is successfully updated':'user is successfully created')
        },(error)=>{
            toast.error('some error has occured. Please try again later')
        })
    }
    return (
        <div className="container cover">
            <h2 className="formheading">Manage User</h2>
            <UserForm onValueChange={HandleChange} onSubmit={HandleSubmit} onDelete={HandleDelete} user={user} userContext={props.userContext}/>
        </div>
    )
}

function mapStateToProps(state,ownProps){
    return {
        users:state.UserReducer,
        userContext:state.LoggedInUserContextReducer,
        tasks:state.TaskReducer
    }
}


function mapDispatchToProps(dispatch){
    return {
      actions:{
        loadusers:bindActionCreators(UserAction.loadUsers,dispatch),
        loadTasks:bindActionCreators(TaskAction.loadTasks,dispatch),
        updateUserContext:bindActionCreators(UserContextActions.LoggedInUserContextAction,dispatch),
        saveUser:bindActionCreators(UserAction.SaveUser,dispatch),
        deleteUser:bindActionCreators(UserAction.RemoveUser,dispatch)

         }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ManageUser)
