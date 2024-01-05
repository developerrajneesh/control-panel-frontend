import React, { useState } from "react";
import DataGridMui from "../../../Components/DataGridMui/DataGridMui";
import Header from "../../../Components/Header/Header";
import Modal from "../../../Components/Modal/Modal";
import { TextField } from "@mui/material";
import { DataStore } from "../../../Storage/DataStorage";

function Links() {

  const { link}=DataStore()
  const [githubLink, setGithubLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [emailLink, setEmailLink] = useState("");
  const [whatsappLink, setWhatsappLink] = useState("");
  const [phoneLink, setPhoneLink] = useState("");

  const data = {
    github: githubLink,
    linkedin: linkedinLink,
    instagram: instagramLink,
    email: emailLink,
    whatsapp: whatsappLink,
    phone: phoneLink,
  };
  function formatDate(inputDate) {
    const dateObject = new Date(inputDate);
    
    const day = String(dateObject.getDate()).padStart(2, '0');
    const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = dateObject.getFullYear();
  
    return `${day}/${month}/${year}`;
  }
  
  const removeKey = [  ,'createdAt','contant','img','updatedAt','__v'];
  function removeKeys(obj, keysToRemove) {
    for (const key of keysToRemove) {
      for (const item of obj) {
        if (key == 'createdAt') {
          item[key] = formatDate(item[key])
          console.log(item);
        }else{
  
          delete item[key];
        }
      }
    }
  }
  
  removeKeys(link,removeKey)
  return (
    <div>
      <Header
        component={
          <Modal
            button={"Add Link"}
            api={'/api/v1/admin/create-link'}
            title={"Add Links"}
            data={data}
            component={
              <>
                <TextField
                  sx={{ width: "100%" }}
                  label="GitHub"
                  type="text"
                  className="my-2"
                  value={githubLink}
                  onChange={(e) => setGithubLink(e.target.value)}
                />
                <TextField
                  sx={{ width: "100%" }}
                  label="LinkedIn"
                  type="text"
                  className="my-2"
                  value={linkedinLink}
                  onChange={(e) => setLinkedinLink(e.target.value)}
                />
                <TextField
                  sx={{ width: "100%" }}
                  label="Instagram"
                  type="text"
                  className="my-2"
                  value={instagramLink}
                  onChange={(e) => setInstagramLink(e.target.value)}
                />
                <TextField
                  sx={{ width: "100%" }}
                  label="Email"
                  type="text"
                  className="my-2"
                  value={emailLink}
                  onChange={(e) => setEmailLink(e.target.value)}
                />
                <TextField
                  sx={{ width: "100%" }}
                  label="Whatsapp"
                  type="text"
                  className="my-2"
                  value={whatsappLink}
                  onChange={(e) => setWhatsappLink(e.target.value)}
                />
                <TextField
                  sx={{ width: "100%" }}
                  label="Phone"
                  type="text"
                  className="my-2"
                  value={phoneLink}
                  onChange={(e) => setPhoneLink(e.target.value)}
                />
              </>
            }
          />
        }
      />

      <div className="mt-5">
        <DataGridMui 
        deleteApi={'/api/v1/admin/delete-link'}
        data={link} />
      </div>
    </div>
  );
}

export default Links;
