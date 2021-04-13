import React from "react";
import {Link} from 'react-router-dom'

function ProjectData(props) {
    const {project} =props
  return (
    <>
      <tr key={project.id}>
        <td>{project.id}</td>
        <td>
          <Link to={"/Dashboard/ManageProject/" + project.id}>
            {project.name}
          </Link>
        </td>
        <td>{project.detail}</td>
        <td>{project.createdAt}</td>
      </tr>
    </>
  );
}

export default ProjectData;
