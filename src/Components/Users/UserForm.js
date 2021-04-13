import React from 'react'

function UserForm(props) {
    return (
        <form  onSubmit={props.onSubmit} >
        <div className="formGroup">
           <label htmlFor="firstName">First Name</label>
           <input type='text' className="form-control" onChange={props.onValueChange} name='firstName' value={props.user.firstName}></input> 
        </div>
        <div className="formGroup">
           <label htmlFor="lastName">Last Name</label>
           <input type='text' className="form-control" onChange={props.onValueChange} name='lastName' value={props.user.lastName}></input> 
        </div>
        <div className="formGroup">
           <label htmlFor="email">Email</label>
           <input type='text' className="form-control" onChange={props.onValueChange} name='email' value={props.user.email}></input> 
        </div>
        <div className="formGroup">
           <label htmlFor="password">Password</label>
           <input type='password' className="form-control" onChange={props.onValueChange} name='password' value={props.user.password}></input> 
        </div>
        {props.userContext.isAdmin? <div className="formGroup">
           <label htmlFor="isAdmin">Admin Role</label>
           <input type="checkbox" checked={props.user.isAdmin} onChange={props.onValueChange} id="isAdmin" value={props.user.isAdmin} name="isAdmin" />

        </div> : ""}
        
        <button className="btn btn-outline-secondary" type='submit'>Save User</button>
        {props.user.id && <button onClick={props.onDelete} disabled={!props.userContext.isAdmin}  className="btn btn-outline-danger spacinginBetween " type='button'>Delete User</button>}
        </form>
    )
}

export default UserForm
