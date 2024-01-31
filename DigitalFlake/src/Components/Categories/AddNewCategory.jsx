import React from 'react'
import '../Products/AddNewProduct.css'
import { MdOutlineKeyboardBackspace } from "react-icons/md";

function AddNewCategory() {
  return (
    <div>
      <div className='top-icon'>
      <a href="/Categories" id='link'>
      <MdOutlineKeyboardBackspace className="icon" />
      </a>
      <h2>Category</h2>
      </div>
    <div className="input-container">
 <div className="inputBox">
    <input type="text" required/>
    <label>Category</label>
 </div> 
 <div className="inputBox">
    <input type="text" required/>
    <label>Product Name</label>
 </div> 
 <div className="inputBox">
    <input type="text" required/>
    <label>Pack size</label>
 </div> 
 </div>
    </div>
  )
}

export default AddNewCategory
