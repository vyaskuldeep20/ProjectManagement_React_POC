import React from 'react'
import {Switch,Route}from 'react-router-dom'
import ReactDOM from 'react-dom'
import Home from '../Components/Home/Home'
import Login from '../Components/Login'
import Error from '../Components/common/Error'
import UserList from '../Components/Users/UserList'
import Dashboard from '../Components/Home/Dashboard'

function RoutingComponent() {
    return (
        
        <div>
           <Switch>
            <Route exact path="/" component={Home}></Route>
           <Route exact path="/home" component={Home}></Route> */}
            <Route exact path="/Login" component={Login}></Route>
            {/* <Route path="/UserList" component={UserList}></Route> */}
            <Route path="/Dashboard" component={Dashboard}></Route>
            <Route component={Error}></Route>
            </Switch> 
        </div>
    )
}

export default RoutingComponent
