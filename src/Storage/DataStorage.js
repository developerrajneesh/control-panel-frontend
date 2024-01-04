import React, { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";

const Context = createContext();

function DataStorage({ children }) {
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [contacts, setContacts] = useState([]);

  const fetchAllProjects = () => {
    axios .get(`${process.env.REACT_APP_API_URL}/api/v1/admin/get-project`)
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

  useEffect(() => {
    fetchAllProjects();
    fetchAllBlogs();
    fetchAllContacts();
  }, []);
console.log(projects, blogs, contacts);
  return (
    <Context.Provider value={{ projects, blogs, contacts,fetchAllProjects,fetchAllBlogs ,fetchAllContacts}}>
      {children}
    </Context.Provider>
  );
}

export const DataStore = () => useContext(Context);

export default DataStorage;
