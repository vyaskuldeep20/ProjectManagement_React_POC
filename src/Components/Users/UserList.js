import React, { useState, useEffect } from "react";
import "./../../Styles/common.css";
import {connect} from 'react-redux'
import * as UserAction from '../../Redux/Actions/UserAction'
import { bindActionCreators } from "redux";
import Loader from "react-loader-spinner";
import UserData from "./UserData";


function UserList(props) {
  const [filteredUsers, setFilteredUsers] = useState(null);
useEffect(() => {
    if(props.users.length==0){
        props.actions.loadUsers()
    }
    else{
        setFilteredUsers(props.users)
    }
    
  }, [props.users]);

  function HandleAddUser() {
    props.history.push("/Dashboard/ManageUser");
  }
  function HandleUserFilter(e){
      if(e.target.value==""){
        setFilteredUsers(props.users)
      }
      else{
        setFilteredUsers(props.users.filter(x=>x.firstName.toLowerCase().includes(e.target.value.toLowerCase())))
      }    
  }
  
  return (     
    <div>
{/* <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      /> */}
      <div className="addItem">
        <button onClick={HandleAddUser} className="btn btn-outline-secondary">
          Add User
        </button>
        <input type='text' className="searchbox" placeholder="Search User Here" onChange={HandleUserFilter}></input>
      </div>
      <div className="listContainer">
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
             
            {filteredUsers==null ? props.users?.map((user) => {
              return (
                <UserData user={user}/>
              );
            }) :
            filteredUsers?.map((user) => {
                return (
                  <UserData user={user}/>
                );
              })
        }
          </tbody>
        </table>
      </div>
    </div>
  );
}

function mapStateToProps(state,ownProps){
    return {
        users:state.UserReducer??[]
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions:{
            loadUsers:bindActionCreators(UserAction.loadUsers,dispatch)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserList);
