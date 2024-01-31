import React from 'react'
import './AddNewProduct.css'
import { MdOutlineKeyboardBackspace } from "react-icons/md";


const AddNewProduct = () => {
  return (
   <div>
      <div className='top-icon'>
      <a href="/Products" id='link'>
      <MdOutlineKeyboardBackspace className="icon" />
      </a>
      <h2>Products</h2>
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
 <div className='input-display'>
 <div className="inputBox">
    <input type="text" required/>
    <label>MRP</label>
 </div> 
 <div className="inputBox">
    <input type="text" required/>
    <label>Product Image</label>
 </div> 
 <div className="inputBox">
    <input type="text" required/>
    <label>Status</label>
 </div> 
 </div>
 </div>
  )
}

export default AddNewProduct
