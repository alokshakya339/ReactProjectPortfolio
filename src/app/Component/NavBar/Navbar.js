"use client"
import React from 'react'
import navbarStyle from './navbar.module.scss'
import { AiFillHome } from 'react-icons/ai'
import {RiContactsFill} from 'react-icons/ri'
import {MdOutlineWork} from 'react-icons/md'
import {IoSchool} from 'react-icons/io5'
import {BiSolidMessageAltEdit} from 'react-icons/bi'
import {IoIosChatbubbles}  from 'react-icons/io'
import { useRouter } from 'next/navigation'
const Navbar = () => {
  const router = useRouter()
  return (
    <div className={navbarStyle.container}>
      <div className={navbarStyle.IconContainer}>
        <span onClick={()=>router.push('/')}>
            <AiFillHome fontSize={30}/>
        </span>
        <span onClick={()=>router.push('/services')}>
            <RiContactsFill fontSize={30}/>
        </span>
        <span onClick={()=>router.push('/work')}>
            <MdOutlineWork fontSize={30}/>
        </span>
        <span onClick={()=>router.push('education')}>
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