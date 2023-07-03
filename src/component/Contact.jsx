import React from 'react';
import {BsFacebook ,BsInstagram ,BsWhatsapp  ,BsFillTelephoneFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import ContactForm from './ContactForm';
import { useSelector } from 'react-redux';
import {AiFillGithub} from 'react-icons/ai'

const Contact = () => {
  const messageStatus = useSelector(state => state.succMessage.showMessage)
 
  return (
    <section className='contact_container' id='contact'>
        <div className="heading">
            <div className="blur_text resume_color">
                <h1>CONTACT</h1>
            </div>
            <div className="highlighted_text">
                <p>Get In Touch</p>
            </div>
       </div>

      <div className="contact_box">
        <div className="adress">
          <h2>ADDRESS</h2>

          <div className='flex_row'>
            <p className="full_adress">Vill-Ramsager PS- Lesliganj Dist- Palamu State- Jharkhand (INDIA)</p>
          </div>

          <div className='flex_row'>
            <span><BsFillTelephoneFill/></span>
            <p className="phone">(+91) 7488152589</p>
          </div>

          <div className='flex_row'>
            <span><BsFillTelephoneFill/></span>
            <p className="phone">(+91) 7091325061</p>
          </div>

          <div className='flex_row'>
            <span><MdEmail/></span>
            <p className="email">haquemashirul@ gmail.com</p>
          </div>

          <h2>FOLLOW ME</h2>
          <div className="social_icon">
          <a href="https://www.facebook.com/profile.php?id=100009243363528" target='_blank' rel='noreferrer' className='icon'><span ><BsFacebook/></span></a>
            <a href="https://www.instagram.com/massi52roc/" target='_blank' rel='noreferrer'  className='icon'><span ><BsInstagram/></span></a>
            <a href="https://wa.me/7488152589" target='_blank' rel='noreferrer'  className='icon'><span ><BsWhatsapp/></span></a>
            <a href="https://github.com/mashirull" target='_blank' rel='noreferrer' className='icon'><span ><AiFillGithub/></span></a>
          </div>
        </div>


        <div className="form">
          <h2>SEND US A NOTE</h2>
          {messageStatus ? <p style={{color : '#1fbc8e', fontSize : '18px'}}>Form has submitted Successfully , Thank You</p> :<ContactForm/>}
        
        </div>
      </div>


    </section>
  )
}

export default Contact