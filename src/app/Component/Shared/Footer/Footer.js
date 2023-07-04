import React from 'react'
import footerStyle from './footerStyle.module.scss'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className={footerStyle.footerContainer}>
      <div className={footerStyle.innerContainer}>
        <div className={footerStyle.socialIcons}>
          <span>
                <AiFillInstagram fontSize={28}/>
            </span>
            <span>
                <AiFillLinkedin fontSize={27}/>
            </span>
            <span>
                <FaTwitter fontSize={25}/>
            </span>
        </div>
        <span>
          &#169; Alok Shakya
        </span>
      </div>
    </div>
  )
}

export default Footer