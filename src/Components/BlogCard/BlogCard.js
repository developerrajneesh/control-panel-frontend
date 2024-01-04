import React from 'react'
import './blogCard.css'
function BlogCard() {
  return (
    <div className="custom-card">
    <img src={'/gkTruckImg.png'} className="img-blog" alt="img-blog" />
    <div className="d-flex justify-content-between align-items-center">
      <h3 className="my-3">{'Lorem jdqjd efwefi ewfewf fewfwef'}</h3>{" "}
      <p className="my-3">20/12/2023</p>
    </div>
   
  </div>
  )
}

export default BlogCard