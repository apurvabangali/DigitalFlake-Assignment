import React from 'react'
import Leftbar from '../Dashboard/Leftbar'
import Header from '../Dashboard/Header'
import '../Dashboard/Header.css'

import { useState } from 'react'
import '../Dashboard/Header.css'
import AddNewProduct from './AddNewProduct'


function AddProduct() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  return (
    <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Leftbar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> 
        <AddNewProduct/>
        
    </div>
  )
}

export default AddProduct