import React from "react";
import Header from "../../Components/Header/Header";
import "./dashboard.css";
import { DataStore } from "../../Storage/DataStorage";
function Dashboard() {
  const { link,
    skill,
    projects,
    blogs,
    contacts,resume}=DataStore()

  return (
    <div>
      
      <Header />
      <div className="row m-0">
        <div className="col-6 col-md-4 p-0">
          <div className="border-custom-2">
            <h6>Blogs</h6>
            <h1>{blogs.length}</h1>
          </div>
        </div>
        <div className="col-6 col-md-4 p-0">
          <div className="border-custom-2">
            <h6>Projects</h6>
            <h1>{projects.length}</h1>
          </div>
        </div>
        <div className="col-6 col-md-4 p-0">
          <div className="border-custom-2">
            <h6>Skills</h6>
            <h1>{skill.length}</h1>
          </div>
        </div>
        <div className="col-6 col-md-4 p-0">
          <div className="border-custom-2">
            <h6>Link</h6>
            <h1>{link.length}</h1>
          </div>
        </div>
        <div className="col-6 col-md-4 p-0">
          <div className="border-custom-2">
            <h6>Contacts</h6>
            <h1>{contacts.length}</h1>
          </div>
        </div>
        <div className="col-6 col-md-4 p-0">
          <div className="border-custom-2">
            <h6>Resume</h6>
            <h1>{resume.length}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
