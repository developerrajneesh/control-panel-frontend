import React from 'react'
import Editor from '../../../Components/Editor/Editor'
import Header from '../../../Components/Header/Header'
import { TextField } from '@mui/material'

function EmailTemplate() {
  return (
    <div>
        <Header/>
        <div className="mt-5">
        <TextField
          sx={{ width: "100%" }}
          id="outlined-password-input"
          label="Title"
          type="text"
          className='mb-3'
          autoComplete="current-password"
        />
        <Editor/> 
        </div> 
    </div>
  )
}

export default EmailTemplate