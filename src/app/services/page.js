import React from 'react'
import servicestyle from './servicestyle.module.scss'
import Navbar from '../Component/NavBar/Navbar'
import Image1 from '../../../public/service-1.svg'
import Image2 from '../../../public/service-2.svg'
import Image3 from '../../../public/service-3.svg'
import Image from 'next/image'
import Footer from '../Component/Shared/Footer/Footer'
const Services = () => {
    const data = [
        {
          id: 1,
          image: Image1,
          title: "UI/UX design",
          description:
            "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
          color:"#4942E4",
          font_color:"#fff"
        },
        {
          id: 2,
          image: Image2,
          title: "Web Development",
          description:
            "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
          color:"#F9D949",
          font_color:"black"
        },
        {
          id: 3,
          image: Image3,
          title: "Photography",
          description:
            "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
          color:"#FF6666",
          font_color:"#fff"
        },
      ];
    
    const itemList = data.map((item)=>{
        return <div className={servicestyle.card} style={{backgroundColor:item.color,color:item.font_color, boxShadow:` 0 4px 4px 0 ${item.color}, 0 6px 20px 0 rgba(0, 0, 0, 0.19)`}}>
                <Image src={item.image} alt={item.title}/>
                <span>{item.title}</span>
                <p>{item.description}</p>
        </div>
    }) 
  return (
    <React.Fragment>
        <Navbar/>
        <div className={servicestyle.DesktopServiceWrraper}>
            <h1>Services</h1>
            <div className={servicestyle.innerWrraper}>
                {itemList}
            </div>
            <Footer/>
        </div>
    </React.Fragment>
  )
}

export default Services