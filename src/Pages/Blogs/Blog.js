import React from 'react'
import Header from '../../Components/Header/Header'
import './blog.css'
import BlogCard from '../../Components/BlogCard/BlogCard'
import DataGridMui from '../../Components/DataGridMui/DataGridMui'
import {DataStore} from '../../Storage/DataStorage'
function Blog() {
  const {blogs} = DataStore()
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
  
  removeKeys(blogs,removeKey)
  return (
    <div>
      <Header />
     <div className='mt-5'>
     <DataGridMui deleteApi={'/api/v1/admin/delete-blog'} data={blogs} />
     </div>
     <div className="row mt-5 m-0 p-0">
        <div className="col-12 col-md-6 col-lg-4">
        <BlogCard/>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
        <BlogCard/>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
        <BlogCard/>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
        <BlogCard/>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
        <BlogCard/>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
        <BlogCard/>
        </div>
     </div>
    </div>
  )
}

export default Blog