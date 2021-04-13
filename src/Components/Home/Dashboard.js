import React from 'react'
import SideNav from './SideNav'
import {BrowserRouter, Link,NavLink,Redirect,Route,Router,Switch} from 'react-router-dom'
import './../../Styles/dashboard.css'
import './../../Styles/sidenav.css'
import './../../Styles/common.css'
import UserList from '../Users/UserList'
import ProjectList from '../Project/ProjectList'
import TaskList from '../Tasks/TaskList'
import ManageUser from '../Users/ManageUser'
import ManageTask from '../Tasks/ManageTask'
import ManageProject from '../Project/ManageProject'
import {connect} from 'react-redux'


function Dashboard(props) {
    if(!props.isUserLoggedIn) return <Redirect to="/login"/>
    return (
        <>            
            <div className='dashboard'>
                <div className='sidenav'>
                <NavLink  activeClassName="activeLink" to='/Dashboard/Users'><div className='items'>Users</div></NavLink>
                <NavLink  activeClassName="activeLink" to='/Dashboard/Projects'><div className='items'>Projects</div></NavLink>
                <NavLink activeClassName="activeLink" to='/Dashboard/Tasks'><div className='items'>Tasks</div></NavLink>
            </div>
            <div>
            <Switch>
                <Route path='/Dashboard/Users' component={UserList}></Route>
                <Route path='/Dashboard/Projects' component={ProjectList}></Route>
                <Route path='/Dashboard/Tasks' component={TaskList}></Route>
                <Route path='/Dashboard/ManageTask/:id' component={ManageTask}></Route>
                <Route path='/Dashboard/ManageUser/:id' component={ManageUser}></Route>
                <Route path='/Dashboard/ManageProject/:id' component={ManageProject}></Route>
                <Route path='/Dashboard/ManageTask' component={ManageTask}></Route>
                <Route path='/Dashboard/ManageUser' component={ManageUser}></Route>
                <Route path='/Dashboard/ManageProject' component={ManageProject}></Route>
            </Switch>
            
            </div>
             
            </div>
        </>
    )
}

function mapStateToProps(state,ownProps){
    return{
        isUserLoggedIn:state.LoggedInUserContextReducer.isUserLoggedIn
    }
}
export default connect(mapStateToProps)(Dashboard)
