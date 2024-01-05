
import "./App.css";

import { Routes,Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Blog from "./Pages/Blogs/Blog";
import AddBlog from "./Pages/Blogs/AddBlog/AddBlog";
import Project from "./Pages/PortFolio/Projects/Project";
import Skill from "./Pages/PortFolio/Skills/Skill";
import Links from "./Pages/PortFolio/Links/Links";
import Contact from "./Pages/PortFolio/Contact/Contact";
import EmailTemplate from "./Pages/PortFolio/EmailTemplate/EmailTemplate";
import AddProject from "./Pages/PortFolio/Projects/AddProject/AddProject";
import Resume from "./Pages/PortFolio/Resume/Resume";
import Login from "./Pages/Login/Login";
import { useEffect } from "react";


function App() {
const navigate = useNavigate()
const {pathname} = useLocation()

useEffect(()=>{
   const tokendata = localStorage.getItem('tokenData');
  if (!tokendata) {
    navigate('/login')
  }
 },[pathname])

  return (
    <div>
    
   <Layout>
     <Routes>
     <Route path="/login" element={<Login/>}/>


      <Route path="/" element={ <Dashboard/>}/>
      <Route path="/blog/blog" element={<Blog/>}/>
      <Route path="/blog/add-blog" element={<AddBlog/>}/>
      <Route path="/portfolio/project" element={<Project/>}/>
      <Route path="/portfolio/Skills" element={<Skill/>}/>
      <Route path="/portfolio/resume" element={<Resume/>}/>
      <Route path="/portfolio/links" element={<Links/>}/>
      <Route path="/portfolio/contacts" element={<Contact/>}/>
      <Route path="/portfolio/email-templet" element={<EmailTemplate/>}/>
      <Route path="/portfolio/project/add" element={<AddProject/>}/>

     </Routes>
   </Layout>
   
    </div>
  );
}

export default App;
