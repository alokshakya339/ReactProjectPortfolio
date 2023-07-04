
import React from 'react'
import socialStyle from './SocialHandelStyles.module.scss'
import {FaFacebook} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'
const SocialHandel = () => {
  return (
    <div className={socialStyle.socialStyleContainer}>
        <span>
            <FaFacebook fontSize={25}/>
        </span>
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
  )
}

export default SocialHandel