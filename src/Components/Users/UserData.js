import React from 'react'
import {Link} from 'react-router-dom'

function UserData(props) {
    const {user}=props
    return (
        <>        
      <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    <Link to={"/Dashboard/ManageUser/" + user.id}>
                      {user.firstName}
                    </Link>
                  </td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  </tr>
        </>
    )
}

export default UserData
