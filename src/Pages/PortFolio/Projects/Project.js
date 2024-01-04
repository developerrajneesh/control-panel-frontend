import React from 'react'
import DataGridMui from '../../../Components/DataGridMui/DataGridMui'
import Header from '../../../Components/Header/Header'
import { Button } from '@mui/material'
import {useNavigate} from 'react-router-dom'
import { DataStore } from '../../../Storage/DataStorage'

function Project() {
  const navigete = useNavigate()
  const {projects,} = DataStore()
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