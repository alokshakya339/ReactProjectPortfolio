import React from 'react'
import blogStyle from './blog.module.scss'
import Image from 'next/image';
import image1 from './../../../../public/blog-1.svg'
import image2 from './../../../../public/blog-2.svg'
import image3 from './../../../../public/blog-3.svg'

const Blog = () => {
  const blogData = [
    {
      id: 1,
      category: "Reviews",
      icon: "Bolby",
      year: "07 February, 2022",
      title: "5 Best App Development Tool for Your Projects",
      image:image1,
    },
    {
      id: 2,
      category: "Tutorial",
      icon: "Bolby",
      year: "07 February, 2022",
      title: "Common Misconceptions About Payment",
      image:image2,
    },
    {
      id: 3,
      category: "Business",
      icon: "Bolby",
      year: "05 February, 2022",
      title: "3 Things to know about startup business",
      image:image3,
      
    },
  ]; 
  return (
    <div className={blogStyle.container}>
        <h2>Blogs</h2>
        <div className={blogStyle.InnerContainer} >
            {blogData.map((item)=>{
                return (
                    
                        <div className={blogStyle.card}>
                            <Image src={item.image} alt={item.title} />
                            <span className={blogStyle.tag} >{item.category}</span>
                            <p>{item.title}</p>
                            <div>
                                <span>{item.year}</span>
                                <span>{item.icon}</span>
                            </div>
                        </div>
                )
            })}
        </div>
    </div>
  )
}

export default Blog