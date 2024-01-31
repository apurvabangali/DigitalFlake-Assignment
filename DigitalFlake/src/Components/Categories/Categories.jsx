import React from 'react'
import CategorieType from './CategorieType'
import Leftbar from '../Dashboard/Leftbar'
import Header from '../Dashboard/Header'
import '../Dashboard/Header.css'

import { useState } from 'react'

function Categories() {
  
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  return (
    <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Leftbar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> 
        <CategorieType/>
    </div>  
  )
}

export default Categories
