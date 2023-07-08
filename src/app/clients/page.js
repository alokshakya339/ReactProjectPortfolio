"use client";
import Image1 from './../../../public/avatar-1.svg'
import Image3 from './../../../public/avatar-3.svg'
import testimonialStyle from "./services.module.scss"
import React, { useRef } from 'react';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Client = () => {
  const data = [
    {
      id: 1,
      image: Image1,
      title: "John Doe",
      subtitle: "Product designer at Dribble",
      comment:
        "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
    },
    {
      id: 2,
      image: Image3,
      title: "John Doe",
      subtitle: "Product designer at Dribble",
      comment:
        "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
    },
  ];
  

  let listitem = data.map((item)=>{
    return <SwiperSlide className={testimonialStyle.subPart}>
              <Image src={item.image} alt={item.title} width="90" height="90px"/>
              <h2>{item.title}</h2>
              <span>{item.subtitle}</span>
              <div className={testimonialStyle.comment}>
                <p>{item.comment}</p>
              </div>
            </SwiperSlide>
            })

  return (
    <div className={testimonialStyle.container} >
      <h2 className={testimonialStyle.heading}>Client & Review</h2>
      <Swiper 
      loop={true}
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      grabCursor={true}
      pagination={{clickable:true}}
      className={testimonialStyle.testimonialContiner}>
        {listitem}
      </Swiper>
    </div>
  )
}

export default Client