import React,{useState,useEffect} from 'react'
import './../Styles/login.css'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import * as UserContextActions from '../Redux/Actions/LoggedInUserContextAction'
import * as userApi from './../api/userApi'
import {toast} from "react-toastify"

function Login(props) {
    const [users,setUsers]=useState([])
    const [userInfo, setUserInfo] = useState({username:'',password:'',isUserAuthenticated: null})

   const setUserDetails=(e)=>{
        setUserInfo({...userInfo ,[e.target.name]: e.target.value})         
   }

   useEffect(() => {
       userApi.getUsers().then(response=>setUsers(response),error=>console.log("some error occured"))
       return () => {
           
       }
   }, [])
  const history=useHistory()

   const submitButton=(e)=>{
        e.preventDefault()
        let user=users.find(x=>x.email.toLowerCase()==userInfo.username.toLowerCase() && x.password==userInfo.password)
        if(user!=null){
            localStorage.setItem('_ProjectManagementToken','dbljlsvjddjldjvldjvslvsjasjlwjvldjvoevjeovjodjvsvj')
            props.dispatch(UserContextActions.LoggedInUserContextAction({isAdmin:user.isAdmin,isUserLoggedIn:true,user:user,_ProjectManagementToken:localStorage.getItem('_ProjectManagementToken')}))
            history.push('/Dashboard/Users')
            toast.success("user is successfully logged in ")
        }
        else{
            toast.error("Invalid Credentials")
            props.dispatch(UserContextActions.LoggedInUserContextAction({isAdmin:false,isUserLoggedIn:false,user: {},_ProjectManagementToken:localStorage.getItem('_ProjectManagementToken')}))
            setUserInfo({...userInfo,isUserAuthenticated:false})
        }
   }

   const ValidateForm=()=>{
       return userInfo.username.length>0 && userInfo.password.length>0
   }
    return (
        <div className="login">
            <div>
               <h2>Login</h2>
           </div>
           {/* {userInfo.isUserAuthenticated==null  || userInfo.isUserAuthenticated==true ? '':'UserName or Password are incorrect'} */}
            <form onSubmit={submitButton}>
            <div className="formGroup">
                <label className='label'>Username</label>
                <input className="form-control" type='text' name='username' onChange={setUserDetails} />
            </div>
            <div className="formGroup">
                <label className='label'>Password</label>
                <input type='password' className="form-control" name='password' onChange={setUserDetails} />
            </div>
            <div>
            <button disabled={ValidateForm} className="submit btn btn-outline-secondary" type='submit'>Login</button>
            </div>
            </form>
        </div>
    )
}

function mapStateToProps(state,ownProps){
    return{
        isUserLoggedIn:state.LoggedInUserContextReducer.isUserLoggedIn
    }
}

export default connect(mapStateToProps)(Login)
