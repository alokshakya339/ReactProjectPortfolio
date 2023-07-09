'use client';
import React, { useState } from 'react'
import contactStyle from './contactstyle.module.scss'
import Navbar from '../Component/NavBar/Navbar'
import emailjs from '@emailjs/browser'
import Footer from '../Component/Shared/Footer/Footer';
const Contact = () => {
  const [disablebtn, setdisablebtn] = useState('')
  const MailerFunction = (e) =>{
    e.preventDefault();
    if(empty()){
      emailjs.sendForm('service_hryo49x','template_f7wa2fj',e.target,'AN6UodYbQR42Eng3n').then((res)=>console.log(res)).catch((error)=>console.log(error))
      setdisablebtn(true)
      e.target.reset();
    }
    else{
      alert("Please Enter All details");
    }
  }
  const empty=()=> {
   var name,message,email,subject;
    name = document.getElementById("name").value;
    message = document.getElementById("lmessage").value;
    email = document.getElementById("email").value;
    subject = document.getElementById("subject").value;
    if ((name && message && email && subject ) !== "") {
        return true;
    };
}
  return (
    <React.Fragment>
      <Navbar/>
      <div className={contactStyle.container}>
        <h2>Get in touch</h2>
        <div className={contactStyle.innercontainer}>
          <div className={contactStyle.letstalk}>
            <p>Lets talk about everything!</p>
            <span>Dont'like form send an email</span>
          </div>
          <div className={contactStyle.formcontainer}>
            <form onSubmit={(e)=>MailerFunction(e)}>
                <div className={contactStyle.details}>
                  <div className={contactStyle.detailsone}>
                    <input type="text" id="name" name="name" placeholder='Full Name' className={contactStyle.dnwidth}/>
                    <input type="email" id="email" placeholder='Type your email' name="email" className={contactStyle.dnwidth} />
                  </div>
                  <input type="text" id="subject" name="subject" placeholder='Write your subject'/>
                  <textarea type="text" id="lmessage" name="lmessage" placeholder='Your Message' className={contactStyle.message}/>
                  <button type="submit" value="Submit" className={disablebtn? contactStyle.disableformbtn: contactStyle.formbtn} disabled={disablebtn}>Send Message</button>
                </div>
            </form>
            {disablebtn && <span>Your response has been submitted !!!</span>}
          </div>
          
        </div>
        <Footer/>
      </div>
    </React.Fragment>
  )
}

export default Contact