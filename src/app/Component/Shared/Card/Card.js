import React from 'react'
import CardStyle from './card.module.scss'
import {PiSuitcaseSimple} from 'react-icons/pi'
import {PiGraduationCap} from 'react-icons/pi'

const Card = (props) => {
    const {year,title,desc,iconName}=props
    const getIconFromName = (iconName) => {
        switch (iconName) {
          case 'icon-briefcase':
            return <PiSuitcaseSimple fontSize={25} color='#FF0060'/>;
          case 'icon-graduation':
            return <PiGraduationCap fontSize={25} color='#FF0060'/> ;    
        }
      }  
  return (
    <div className={CardStyle.container}>
        <span>{getIconFromName(iconName)}</span>
        <div className={CardStyle.details}>
            <span>{year}</span>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default Card