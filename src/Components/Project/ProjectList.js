import React, { useEffect, useState } from "react";
import "./../../Styles/common.css";
import * as projectApi from "../../api/projectsApi";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as ProjectAction from "../../Redux/Actions/ProjectAction";
import ProjectData from "./ProjectData";
function ProjectList(props) {
  const [filteredProjects, setFilteredProjects] = useState(null);

  useEffect(() => {
    props.actions.loadProjects();
  }, []);

  function HandleAddProject() {
    props.history.push("/Dashboard/ManageProject");
  }
  function HandleProjectFilter(e) {
    if (e.target.value == "") {
      setFilteredProjects(props.projects);
    } else {
      setFilteredProjects(
        props.projects.filter((x) =>
          x.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  }

  return (
    <div>
      <div className="addItem">
        <button
          onClick={HandleAddProject}
          className="btn btn-outline-secondary"
        >
          Add Project
        </button>
        <input
          type="text"
          className="searchbox"
          placeholder="Search Project Here"
          onChange={HandleProjectFilter}
        ></input>
      </div>
      <div className="listContainer">
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Detail</th>
              <th>CreatedOn</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects == null
              ? props?.projects?.map((project) => (
                  <ProjectData project={project} />
                ))
              : filteredProjects?.map((project) => (
                  <ProjectData project={project} />
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  return {
    projects: state.ProjectReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadProjects: bindActionCreators(ProjectAction.loadProjects, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
