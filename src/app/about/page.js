import React from 'react'
import aboutStyle from './aboutStyle.module.scss' 
import Image from 'next/image'
import AboutPicSrc from './../../../public/avatar-2.svg'
import ProgresData from '../Component/ProgresData/ProgresData'
import Stats from '../Component/Shared/Stats/Stats'
const About = () => {
  return (
    <div className={aboutStyle.aboutContainer}>
      <h2 className={aboutStyle.heading}>About Me</h2>
      <div className={aboutStyle.dtaContaineer}>
        <Image src={AboutPicSrc} alt="AboutPicSrc"/>
        <ProgresData />
      </div>
      <div className={aboutStyle.statsBox} >
        <Stats iconName="fire" count={12} statsName="Project Completed"/>
        <Stats iconName="cofee" count={5670} statsName="Cup of Cofee"/>
        <Stats iconName="client" count={30} statsName="Satisfied Clients"/>
        <Stats iconName="award" count={123} statsName="Nominees Winner"/>
      </div>
    </div>
  )
}

export default About