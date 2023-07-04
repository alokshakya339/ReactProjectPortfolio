import React from 'react'
import ButtonStyle from './button.module.scss'

const Button = (props) => {
const {btnText,btnWidth,btnHeight} = props 
  return (
    <span className={ButtonStyle.btnDesign}>
    <button style={{width:`${btnWidth}`,height:`${btnHeight}`}}>
        {btnText}
    </button>
    </span>
  )
}

export default Button