import React from 'react'
import navbarStyle from './navbar.module.scss'
import { AiFillHome } from 'react-icons/ai'
import {RiContactsFill} from 'react-icons/ri'
import {MdOutlineWork} from 'react-icons/md'
import {IoSchool} from 'react-icons/io5'
import {BiSolidMessageAltEdit} from 'react-icons/bi'
import {IoIosChatbubbles}  from 'react-icons/io'
const Navbar = () => {
  return (
    <div className={navbarStyle.container}>
      <div className={navbarStyle.IconContainer}>
        <span>
            <AiFillHome fontSize={30}/>
        </span>
        <span>
            <RiContactsFill fontSize={30}/>
        </span>
        <span>
            <MdOutlineWork fontSize={30}/>
        </span>
        <span>
            <IoSchool fontSize={30}/>
        </span>
        <span>
            <BiSolidMessageAltEdit fontSize={30}/>
        </span>
        <span>
            <IoIosChatbubbles fontSize={30}/>
        </span>
        
      </div>
    </div>
  )
}

export default Navbar