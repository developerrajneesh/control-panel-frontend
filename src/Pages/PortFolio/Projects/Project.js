import React from 'react'
import DataGridMui from '../../../Components/DataGridMui/DataGridMui'
import Header from '../../../Components/Header/Header'
import { Button } from '@mui/material'
import {useNavigate} from 'react-router-dom'
import { DataStore } from '../../../Storage/DataStorage'

function Project() {
  const navigete = useNavigate()
  const {projects,} = DataStore()

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
  
  removeKeys(projects,removeKey)
  return (
    <div>
<Header component={<Button  onClick={()=> navigete('/portfolio/project/add')} variant='outlined'>Add Project</Button>} />
<div className="mt-5">
<DataGridMui deleteApi={'/api/v1/admin/delete-project'} data={projects}/>

</div>
    </div>
  )
}

export default Project