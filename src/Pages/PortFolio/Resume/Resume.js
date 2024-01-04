import React, { useState } from 'react';
import Header from '../../../Components/Header/Header';
import { Button, Input } from '@mui/material';
import axios from 'axios';

function Resume() {
//   const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
   let selectedFile = event.target.files[0]
    // setSelectedFile(event.target.files[0])
    if (selectedFile) {
        const formData = new FormData();
        formData.append('resume', selectedFile);
  
        // Replace 'YOUR_UPLOAD_API_ENDPOINT' with the actual API endpoint for file upload
        axios.post(`${process.env.REACT_APP_API_URL}/api/v1/admin/upload-resume`, formData)
          .then(response => {
            // Handle success
            console.log('File uploaded successfully:', response.data);
          })
          .catch(error => {
            // Handle error
            console.error('Error uploading file:', error);
          });
      } else {
        console.warn('No file selected for upload');
      }
  };

//   const handleUpload = () => {
//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append('resume', selectedFile);

//       // Replace 'YOUR_UPLOAD_API_ENDPOINT' with the actual API endpoint for file upload
//       axios.post(`${process.env.REACT_APP_API_URL}/api/v1/admin/upload-resume`, formData)
//         .then(response => {
//           // Handle success
//           console.log('File uploaded successfully:', response.data);
//         })
//         .catch(error => {
//           // Handle error
//           console.error('Error uploading file:', error);
//         });
//     } else {
//       console.warn('No file selected for upload');
//     }
//   };

  return (
    <div>
      <Header
        component={
          <>
            <Input
              type="file"
              onChange={handleFileChange}
              style={{ display: 'none' }}
              id="upload-input"
            />
            <label htmlFor="upload-input">
              <Button variant='outlined' component="span">
                Upload Resume
              </Button>
            </label>
          </>
        }
      />
    </div>
  );
}

export default Resume;
