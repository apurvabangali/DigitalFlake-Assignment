import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill,}
 from 'react-icons/bs'
import Capture from '../assets/Capture.PNG'

const Leftbar = ({openSidebarToggle, OpenSidebar}) => {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
    <div className='sidebar-title'>
        <div className='sidebar-brand'>
            <img src={Capture}></img>
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
    </div>

    <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
            <a href="/Home">
                <BsGrid1X2Fill className='icon'/> Home
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="/Categories">
                <BsFillGrid3X3GapFill className='icon'/> Categories
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="/Products">
                <BsFillArchiveFill className='icon'/> Products
            </a>
        </li>  
        </ul>
    </aside>
  )
}

export default Leftbar

