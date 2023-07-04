import React from 'react'
import progressbarstyle from './progressbar.module.scss'
const Progressbar = (props) => {
    const {skill , progress, color} =props
  return (
    <div className={progressbarstyle.progressContainer}>
      <div className={progressbarstyle.subHeading}>
        <span>{skill}</span>
        <span>{progress}</span>
      </div>  
      <div className={progressbarstyle.container}>
        <div className={progressbarstyle.skill} style={{width:`${progress}`,backgroundColor:`${color}`}}></div>
      </div>
    </div>
  )
}

export default Progressbar