import React from 'react'
import educationStyle from './education.module.scss'
import Navbar from '../Component/NavBar/Navbar'
import Card from '../Component/Shared/Card/Card'
import Footer from '../Component/Shared/Footer/Footer'

const Education = () => {
  const data = [
    {
      id: 1,
      category: "education",
      icon: "icon-graduation",
      year: "2019 - present",
      title: "Academic Degree",
      desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
    },
    {
      id: 2,
      category: "education",
      icon: "icon-graduation",
      year: "2013 - 2017",
      title: "Bachelor's Degree",
      desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
    },
    {
      id: 3,
      category: "education",
      icon: "icon-graduation",
      year: "2009 - 2013",
      title: "Honours Degree",
      desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
    },
    {
      id: 4,
      category: "experience",
      icon: "icon-briefcase",
      year: "2019 - present",
      title: "Web Designer",
      desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
    },
    {
      id: 5,
      category: "experience",
      icon: "icon-briefcase",
      year: "2013 - 2017",
      title: "Front-End Developer",
      desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
    },
    {
      id: 6,
      category: "experience",
      icon: "icon-briefcase",
      year: "2009 - 2013",
      title: "Back-End Developer",
      desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
    },
  ];
  return (
    <React.Fragment>
      <Navbar/>
      <div className={educationStyle.desktopWrraper}>
        <div className={educationStyle.innerContainer} >
          <h1>Education And Experience</h1>
          <div className={educationStyle.mainBox} >
            <div className={educationStyle.eduConatiner}>
              {data.map((item)=>{
                if(item.category === 'education'){
                  return (<Card year={item.year} title={item.title} desc={item.desc} iconName={item.icon}/>)
                }
              })}
            </div>
            <div className={educationStyle.eduConatiner}>
            {data.map((item)=>{
                if(item.category === 'experience'){
                  return (<Card year={item.year} title={item.title} desc={item.desc} iconName={item.icon}/>)
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

export default Education