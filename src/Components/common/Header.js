import React, { useState, useEffect,useContext } from 'react'
import './../../Styles/header.css'
import { useHistory } from 'react-router-dom'
import * as UserContextActions from './../../Redux/Actions/LoggedInUserContextAction'
import {connect} from 'react-redux'
import {toast} from "react-toastify"



function Header(props) {
    const history = useHistory()

    const LogoutUser = () => {
        localStorage.removeItem('_ProjectManagementToken')
        props.dispatch(UserContextActions.LoggedInUserContextAction({isUserLoggedIn:false,username: "",_ProjectManagementToken:localStorage.getItem('_ProjectManagementToken')}))
        toast.warn("you are logged out successfully")
    }


    const LogInUser = () => {
        history.push('/Login')
    }
    return (
        <div className='header'>
            <div className='heading'>
                <label>Project Management</label>
            </div>
            {!props.isUserLoggedIn ? <div className='logout'><button className="btn btn-outline-secondary" onClick={LogInUser}>Login</button></div> : <div className='logout'><button className="btn btn-outline-secondary" onClick={LogoutUser} >Logout</button></div>}
        </div>
    )
}
function mapStateToProps(state,ownProps){
    return{
        isUserLoggedIn:state.LoggedInUserContextReducer.isUserLoggedIn
    }
}

export default connect(mapStateToProps)(Header)
