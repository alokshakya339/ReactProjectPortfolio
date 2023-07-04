import React from 'react'
import statsStyle from './statsstyle.module.scss'
import {SlFire} from "react-icons/sl"
import {PiCoffeeLight} from "react-icons/pi"
import {SlPeople} from "react-icons/sl"
import {LiaAwardSolid} from "react-icons/lia"
const Stats = (props) => {
  const {iconName , count , statsName }=props 
  const getIconFromName = (iconName) => {
    switch (iconName) {
      case 'fire':
        return <SlFire fontSize={40}/>;
      case 'cofee':
        return <PiCoffeeLight fontSize={40}/> ;
      case 'client':
        return <SlPeople fontSize={40}/>;
      case 'award':
        return <LiaAwardSolid fontSize={40}/>;         
    }
  }  

  return (
    <div className={statsStyle.statsConatiner}>
        <span>{getIconFromName(iconName)}</span>
        <div className={statsStyle.countBox}>
            <p>{count}</p>
            <span>{statsName}</span>
        </div>
       
    </div>
  )
}

export default Stats