import React from 'react'
import Leftbar from '../Dashboard/Leftbar'
import Header from '../Dashboard/Header'
import '../Dashboard/Header.css'

import { useState } from 'react'
import ProductName from './ProductName'



function Products() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  return (
    <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Leftbar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> 
        <ProductName/>
        
    </div>
  )
}

export default Products
