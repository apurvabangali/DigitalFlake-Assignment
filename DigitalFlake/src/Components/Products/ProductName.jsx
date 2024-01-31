import React from 'react'
import '../Products/ProductName.css'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill,}
 from 'react-icons/bs'
 import { MdDelete } from "react-icons/md";
 import { MdModeEdit } from "react-icons/md";
 import Symbol from '../assets/Symbol.png'

function ProductName() {
  return (
   <div className="category-container">
   <div className="top">
   <h2><BsFillArchiveFill className='icon'/>Product</h2>
   <input type='text'></input>
    <a href="/AddProduct" id='link'>
      <button>Add New</button>
   </a>
   </div>    
   <div className='tbl_container'>
       <table class="tbl">
           <thead>
               <tr>
                   <th> ID</th>
                   <th> Name</th>
                   <th>Pack Size</th>
                   <th>Category</th>
                   <th>MRP</th>
                   <th>Image</th>
                   <th>Status</th>
               </tr>
           </thead>
               <tr>
                   <td> 123</td>
                   <td> Amul Taza</td>
                   <td>500ml</td>
                   <td>Milk</td>
                   <td>Rs 27</td>
                   <td><img></img></td>
                   <td>Active</td>
                   <td>
                    <MdModeEdit/>
                   </td>
                   <td>
                    <MdDelete/>
                   </td>
               </tr>
               <tr>
                   <td> 123</td>
                   <td> Amul Taza</td>
                   <td>500ml</td>
                   <td>Milk</td>
                   <td>Rs 27</td>
                   <td><img></img></td>
                   <td>Active</td>
                   <td>
                    <MdModeEdit/>
                   </td>
                   <td>
                    <MdDelete/>
                   </td>
               </tr>
               <tr>
                   <td> 123</td>
                   <td> Amul Taza</td>
                   <td>500ml</td>
                   <td>Milk</td>
                   <td>Rs 27</td>
                   <td><img></img></td>
                   <td>Active</td>
                   <td>
                    <MdModeEdit/>
                   </td>
                   <td>
                    <MdDelete/>
                   </td>
               </tr>
       </table>
   </div>



 </div> 

  )
}

export default ProductName
