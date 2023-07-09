import React from 'react'
import style from './plans.module.scss'
import image1 from './../../../public/html.svg';
import image2 from './../../../public/css.svg';
import image3 from './../../../public/javascript.svg';
import image4 from './../../../public/react.svg';
import image5 from './../../../public/git.svg';
import image6 from './../../../public/nodejs.svg';
import image7 from './../../../public/mongodb.svg';
import Image from 'next/image';
import Navbar from '../Component/NavBar/Navbar';
import Footer from '../Component/Shared/Footer/Footer';

const Plans = () => {
  const data = [
    {
      id: 1,
      category: "HTML",
      icon: image1,
      level: "Advanced",
      type:"frontend",
    },
    {
      id: 2,
      category: "CSS",
      icon: image2,
      level: "Intermedite",
      type:"frontend",
    },
    {
      id: 3,
      category: "JavaScript",
      icon: image3,
      level: "Intermediate",
      type:"frontend",
    },
    {
      id: 4,
      category: "React",
      icon: image4,
      level: "Intermediate",
      type:"frontend",
    },
    {
      id: 5,
      category: "Git",
      icon: image5,
      level: "Advanced",
      type:"frontend",
    },
    {
      id: 6,
      category: "Nodejs",
      icon: image6,
      level: "Learning",
      type:"backend",
    },
    {
      id: 7,
      category: "MongoDB",
      icon: image7,
      level: "Learning",
      type:"backend",
    },
  ];
  return (
    <React.Fragment>
      <Navbar/>
      <div className={style.innerwrraper}>
        <h2 className={style.heading}>Favourate Skills</h2>
        <div className={style.container}>
          <div className={style.boxa}>
            <h2>Frontend</h2>
            <div className={style.frontendskills} >
              {data.map((item)=>{
                if(item.type === 'frontend'){
                  return (<div className={style.box}>
                    <Image src={item.icon} alt={item.category}/>
                    <p>{item.category}</p>
                    <span>{item.level}</span>
                  </div>)
                }
              })}
            </div>
          </div>
          <div className={style.boxb}>
            <h2>Backend</h2>
            <div className={style.backendskills} >
              {data.map((item)=>{
                if(item.type === 'backend'){
                  return (<div className={style.box}>
                    <Image src={item.icon} alt={item.category}/>
                    <p>{item.category}</p>
                    <span>{item.level}</span>
                  </div>)
                }
              })}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </React.Fragment>
  )
}

export default Plans