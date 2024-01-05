import React, { useEffect, useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { VscReferences, VscFolderLibrary } from "react-icons/vsc";
import { GoProjectSymlink } from "react-icons/go";
import { CgTemplate } from "react-icons/cg";
import { BiSolidContact } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { Button, IconButton } from "@mui/material";

function Layout({ children }) {
    const navigate = useNavigate()
  const [isToggle, setIsToggle] = useState(false);
  const [lastPath, setlastPath] = useState("/");
  const { pathname } = useLocation();
  useEffect(() => {
    const pathArray = pathname.split("/");
    const lastPath = pathArray[pathArray.length - 1];
    setlastPath(lastPath, pathArray.length - 1);
  }, [pathname]);
const handleLogOut=()=>{
    localStorage.clear();
    navigate('/login')
}
  return (
    <>
      {pathname !== "/login" ? (
        <>
          <div id="logo" style={{ width: isToggle ? "100px" : "219px" }}>
            {isToggle ? (
              <span className="small-logo">C P</span>
            ) : (
              <span className="big-logo">Control Panel</span>
            )}
          </div>

          <div
            className="scrollbar-wrapper"
            id="left-menu"
            style={{ width: isToggle ? "100px" : "220px" }}
          >
            <ul className="dashboard">
              <Link to={"/"}>
                {" "}
                <li className={lastPath == "" && "scrollbar-active"}>
                  {" "}
                  <RxDashboard size={18} className="me-3" />{" "}
                  {!isToggle && "Dashboard"}
                </li>
              </Link>
            </ul>
            <p className="mx-3 mt-4 sidebar-item-heading">Blog</p>
            <ul>
              <Link to={"/blog/blog"}>
                {" "}
                <li className={lastPath == "blog" && "scrollbar-active"}>
                  <VscReferences size={18} className="me-3" />{" "}
                  {!isToggle && "Blog"}
                </li>
              </Link>
              <Link to={"/blog/add-blog"}>
                <li className={lastPath == "add-blog" && "scrollbar-active"}>
                  <GoProjectSymlink size={18} className="me-3" />
                  {!isToggle && "Add Blog"}{" "}
                </li>
              </Link>
            </ul>
            <p className="mx-3 mt-4 sidebar-item-heading">PortFolio</p>
            <ul>
              <Link to={"/portfolio/project"}>
                <li className={lastPath == "project" && "scrollbar-active"}>
                  <GoProjectSymlink size={18} className="me-3" />
                  {!isToggle && "Project"}{" "}
                </li>
              </Link>
              <Link to={"/portfolio/skills"}>
                <li className={lastPath == "skills" && "scrollbar-active"}>
                  <VscFolderLibrary size={18} className="me-3" />
                  {!isToggle && "Skills"}
                </li>
              </Link>
              <Link to={"/portfolio/links"}>
                <li className={lastPath == "links" && "scrollbar-active"}>
                  <BiSolidContact size={18} className="me-3" />
                  {!isToggle && "Links"}
                </li>
              </Link>
              <Link to={"/portfolio/contacts"}>
                <li className={lastPath == "contacts" && "scrollbar-active"}>
                  <BiSolidContact size={18} className="me-3" />
                  {!isToggle && "Contact"}
                </li>
              </Link>
              <Link to={"/portfolio/resume"}>
                <li className={lastPath == "resume" && "scrollbar-active"}>
                  <BiSolidContact size={18} className="me-3" />
                  {!isToggle && "Resume"}
                </li>
              </Link>
              <Link to={"/portfolio/email-templet"}>
                <li
                  className={lastPath == "email-templet" && "scrollbar-active"}
                >
                  <CgTemplate size={18} className="me-3" />
                  {!isToggle && "Email Template"}
                </li>
              </Link>
            </ul>
          </div>

          <div id="main-content">
            <div id="header">
              <div
                className="header-left "
                style={{ paddingLeft: isToggle ? "120px" : "240px" }}
              >
                <IconButton onClick={() => setIsToggle(!isToggle)}>
                  <AiOutlineBars className="cursor-pointer" size={20} />
                </IconButton>
              </div>
              <Button className="me-3" onClick={()=>handleLogOut()}>Logout</Button>
            </div>
            <div
              id="page-container"
              style={{ paddingLeft: isToggle ? "100px" : "220px" }}
            >
              <div className="p-3 position-relative">{children}</div>
            </div>
          </div>
        </>
      ) : (
        children
      )}
    </>
  );
}

export default Layout;
