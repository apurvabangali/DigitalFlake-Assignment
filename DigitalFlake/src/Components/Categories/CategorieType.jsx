import React from 'react'
import '../Categories/Type.css'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill,}
 from 'react-icons/bs';
 import { MdDelete } from "react-icons/md";
 import { MdModeEdit } from "react-icons/md";

function CategorieType() {
  return (
      <div className="category-container">
        <div className="top">
        <h2><BsFillGrid3X3GapFill className='icon'/>Category</h2>
        <input type='text'></input>
        <a href='/AddNewCategory' id='link'><button>Add New</button></a>
        </div>    
        <div className='tbl_container'>
            <table class="tbl">
                <thead>
                    <tr>
                        <th> ID</th>
                        <th> Name</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                    <tr>
                        <td> 123</td>
                        <td> Amul Taza</td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. </td>
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
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
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
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
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

export default CategorieType
