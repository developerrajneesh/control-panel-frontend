import React, { useState } from "react";
import DataGridMui from "../../../Components/DataGridMui/DataGridMui";
import Header from "../../../Components/Header/Header";
import Modal from "../../../Components/Modal/Modal";
import { TextField } from "@mui/material";
import { DataStore } from "../../../Storage/DataStorage";

function Contact() {
const {contacts} = DataStore()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    subject: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAddContact = () => {
    // Handle adding contact logic using formData
    console.log("Adding contact:", formData);
    // Reset the form after adding the contact
    setFormData({
      name: "",
      phone: "",
      email: "",
      company: "",
      subject: ""
    });
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
  
  removeKeys(contacts,removeKey)
  return (
    <div>
      <Header


component={
  <Modal
  button={"Add Contact"}
  title={"Add Contact"}
  api={'/api/v1/admin/create-contact'}
  data={formData}
            component={
             <>
              <TextField
                  sx={{ width: "100%" }}
                  label="Name"
                  type="text"
                  className="my-2"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <TextField
                  sx={{ width: "100%" }}
                  label="Phone"
                  type="text"
                  className="my-2"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <TextField
                  sx={{ width: "100%" }}
                  label="Email"
                  type="text"
                  className="my-2"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <TextField
                  sx={{ width: "100%" }}
                  label="Company"
                  type="text"
                  className="my-2"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                />
                <TextField
                  sx={{ width: "100%" }}
                  label="Subject"
                  type="text"
                  className="my-2"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
             </>
            }
          />
        }
      />

      <div className="mt-5">
        <DataGridMui d
        deleteApi={'/api/v1/admin/delete-contact'}
        
        data={contacts} />
      </div>
    </div>
  );
}

export default Contact;
