import React from 'react'
import ProgressStyle from './progres.module.scss'
import Button from '../Shared/Button/Button'
import Progressbar from '../Shared/ProgressBar/Progressbar'
const ProgresData = () => {
  return (
   <div className={ProgressStyle.progressContainer}>
    <div className={ProgressStyle.content}>
        <p> I am Alok kushawaha , web developer from Noida India. I have rich experience in website design and building and customization.also i had one year of experience in Front-end development</p>
        <Button btnText="Download CV"/>
    </div>
    <div className={ProgressStyle.skills}>
        <Progressbar skill="Web Development" progress="60%" color="red"/>
        <Progressbar skill="HTML/CSS" progress="90%" color="green"/>
        <Progressbar skill="React Development" progress="80%" color="yellow"/>
    </div>
   </div>
  )
}

export default ProgresData