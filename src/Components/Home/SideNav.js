import React from 'react'
import './../../Styles/sidenav.css'
import {Link,Switch} from 'react-router-dom'

function SideNav() {
    return (
        <div className='sidenav'>
            <Link activeClassName="active" to='UserList'><div className='items'>Users</div></Link>
            <Link><div className='items'>Projects</div></Link>
            <Link><div className='items'>Tasks</div></Link>
        </div>
    )
}

export default SideNav
