import React, { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";

const Context = createContext();

function DataStorage({ children }) {
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [link, setlink] = useState([]);
  const [skill, setskill] = useState([]);
  const [resume, setResume] = useState([]);

  const fetchAllProjects = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/admin/get-project`)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  };

  const fetchAllBlogs = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/admin/get-blog`)
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  };

  const fetchAllContacts = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/admin/get-contact`)
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching contacts:", error);
      });
  };
  const fetchAllLink = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/admin/get-link`)
      .then((response) => {
        setlink(response.data);
      })
      .catch((error) => {
        console.error("Error fetching contacts:", error);
      });
  };
  const fetchAllSkill = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/admin/get-skill`)
      .then((response) => {
        setskill(response.data);
      })
      .catch((error) => {
        console.error("Error fetching contacts:", error);
      });
  };
  const fetchAllResume = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/admin/get-resume`)
      .then((response) => {
        setResume(response.data);
      })
      .catch((error) => {
        console.error("Error fetching contacts:", error);
      });
  };

  useEffect(() => {
    fetchAllProjects();
    fetchAllBlogs();
    fetchAllContacts();
    fetchAllSkill()
    fetchAllLink()
    fetchAllResume()
  }, []);
  
  return (
    <Context.Provider
      value={{
        link,
        skill,
        projects,
        blogs,
        contacts,
        resume,
        fetchAllLink,
        fetchAllSkill,
        fetchAllProjects,
        fetchAllBlogs,
        fetchAllContacts,
        fetchAllResume,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const DataStore = () => useContext(Context);

export default DataStorage;
