import React from 'react'
import HomeStyle from './homeStyle.module.scss'
import Image from 'next/image'
import ProfileImgSrc from './../../../public/avatar-1.svg'
import SocialHandel from '../Component/SocialHandels/SocialHandel'
import Button from '../Component/Shared/Button/Button'
import Shapes from '../Component/Shapes/Shapes'
import Navbar from '../Component/NavBar/Navbar'
import About from '../about/page'
import Client from '../clients/page'
import Footer from '../Component/Shared/Footer/Footer'
import Blog from '../Component/Blog/Blog'
const Home = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <div className={HomeStyle.DesktopHomeWrraper}>
        <div className={HomeStyle.homeWrraper}>
          <div  className={HomeStyle.homeContainer}>
          <Image src={ProfileImgSrc} alt="profileimage"/>
          <h1>Alok Kushawaha</h1>
          <p>I'am a Front-end developer</p>
          <SocialHandel/>
          <Button btnText="Hire me"/>
          </div>
          <Shapes/>
        </div>
        <div className={HomeStyle.aboutWrraper} >
          <About/>
        </div> 
        <div className={HomeStyle.blogWrraper} >
          <Blog/>
        </div>
        <div className={HomeStyle.servicesWrraper} >
          <Client/>
        </div>
        <Footer/>
      </div>
    </React.Fragment>
  )
}

export default Home

