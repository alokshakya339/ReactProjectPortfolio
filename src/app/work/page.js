"use client"
import React, { useState } from 'react'
import workstyle from './work.module.scss'
import Navbar from '../Component/NavBar/Navbar'
import Work1 from '../../../public/work-1.svg'
import Work2 from '../../../public/work-2.svg'
import Work3 from '../../../public/work-3.svg'
import Work4 from '../../../public/work-4.svg'
import Work5 from '../../../public/work-5.svg'
import Work6 from '../../../public/work-6.svg'
import Image from 'next/image'
import Footer from '../Component/Shared/Footer/Footer'
const Work = () => {
  const menu = [
    {
      id: 1,
      image: Work1,
      title: "Project Management Illustration",
      category: "Design",
    },
    {
      id: 2,
      image: Work2,
      title: "Guest App Walkthrough Screens",
      category: "Art",
    },
    {
      id: 3,
      image: Work3,
      title: "Delivery App Wireframe",
      category: "Branding",
    },
    ,
    {
      id: 4,
      image: Work4,
      title: "Onboarding Motivation",
      category: "Design",
    },
    ,
    {
      id: 5,
      image: Work5,
      title: "iMac Mockup Design",
      category: "Creative",
    },
    ,
    {
      id: 6,
      image: Work6,
      title: "Game Store App Concept",
      category: "Art" ,
    },
  ];
  const Tabs = ['Everything','Art',"Branding",'Creative','Design']
  const [items, setitems] = useState(menu)
  const [activeTab,setactiveTab]=useState("Everything")
  const itemList = items.map((item)=>{
      return <div className={workstyle.card}>
              <Image src={item.image} alt={item.title}/>
              <div className={workstyle.workMask}></div>
              <span>{item.category}</span>
              <h3>{item.title}</h3>
      </div>
  }) 
  const filterData =(catagory)=>{
    if(catagory !== "Everything"){
      const updatedData = menu.filter((elem)=>{
        return elem.category === catagory
      })
      setitems(updatedData)
      setactiveTab(catagory)
    }
    else{
      setitems(menu)
      setactiveTab(catagory)
    }
  }
  return (
    <React.Fragment>
        <Navbar/>
        <div className={workstyle.DesktopServiceWrraper}>
            <h1>Recent Works</h1>
            <div className={workstyle.tabsName}>
              {Tabs.map((item)=>{
                return(
                  <span className={`${activeTab === item ? workstyle.activetab:''}`} onClick={()=>filterData(item)}>{item}</span>
                )
              })}
            </div>
            <div className={workstyle.innerWrraper}>
                {itemList}
            </div>
            <Footer/>
        </div>
    </React.Fragment>
  )
}

export default Work