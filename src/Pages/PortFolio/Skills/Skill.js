import React, { useState } from "react";
import DataGridMui from "../../../Components/DataGridMui/DataGridMui";
import Header from "../../../Components/Header/Header";
import Modal from "../../../Components/Modal/Modal";
import { TextField } from "@mui/material";
import { DataStore } from "../../../Storage/DataStorage";

function Skill() {
const { skill}=DataStore()
const [skills ,setSkill] = useState(null)
const [color ,setcolor] = useState(null)

function formatDate(inputDate) {
  const dateObject = new Date(inputDate);
  
  const day = String(dateObject.getDate()).padStart(2, '0');
  const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = dateObject.getFullYear();

  return `${day}/${month}/${year}`;
}

const removeKey = [  ,'createdAt','updatedAt','__v'];
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

removeKeys(skill,removeKey)
  return (
    <div>
      <Header
        component={
          <Modal
          api={'/api/v1/admin/create-skill'}
            button={"Add Skill"}
            title={"Add Skills"}
            data={{skill:skills,color}}
            component={
              <>
                <TextField
                  sx={{ width: "100%" }}
                  label="Skill"
                  type="text"
                  className="my-2"
                  value={skills}
                  onChange={(e)=>setSkill(e.target.value)}
                />
                <TextField
                  sx={{ width: "100%" }}
                  label="color"
                  type="text"
                  className="my-2"

                  value={color}
                  onChange={(e)=>setcolor(e.target.value)}
                />
              </>
            }
          />
        }
      />
      <div className="mt-5">
        <DataGridMui deleteApi={'/api/v1/admin/delete-skill'}  data={skill}/>
      </div>
    </div>
  );
}

export default Skill;
