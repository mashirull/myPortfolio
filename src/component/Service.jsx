import React from 'react';
import {TbBrandReact} from 'react-icons/tb';
import {MdOutlineDesktopMac } from 'react-icons/md';
import {FaPaintBrush} from 'react-icons/fa';
import {DiJqueryUiLogo} from 'react-icons/di';
import {CgWebsite} from 'react-icons/cg';
import { FaWordpress } from "react-icons/fa";



const Service = () => {

  const serviceData = [
    {
      title : 'React Developer',
      describe : "I am a React developer .I can design good attractive UI with all functionality . I am also know nextjs",
      icon : <TbBrandReact/>
    },
    {
      title : 'Web Design',
      describe : "Web designing with pure HTML , CSS JAVASCRIPT and many more technology like  jquery etc. ",
      icon : <MdOutlineDesktopMac/>
    },
    {
      title : 'Wordpress Developer',
      describe : "I am a WordPress developer with a passion for creating dynamic and user-friendly websites",
      icon : <FaWordpress/>
    },
    {
      title : 'App Design & Develop',
      describe : "App design with react.js next.js-13 jquery etc . I have good Knowledged of this technology ",
      icon : <FaPaintBrush/>
    },
    {
      title : 'Jquery Developer',
      describe : "Knowledge of Jquery is much that I can build an app with help of it  .",
      icon : <DiJqueryUiLogo/>
    },
    {
      title : 'Full Stock Developer',
      describe : "I am full stack developer with react, node ,mongodb ,express , next.js , strapi , tailwind css , scss",
      icon : <CgWebsite/>
    },

  ]



  return (
    <section className='service_container' id='service'>
        <div className="heading">
            <div className="blur_text service_color">
                <h1>SERVICES</h1>
            </div>
            <div className="highlighted_text">
                <p>What I Do?</p>
            </div>
       </div>


       <div className="service_grid grid">
          {serviceData.map((curElem , i)=>{
            return (
              <div className="ser_box" key={i}>
                <div className="icon">{curElem.icon}</div>
                <div className="ser_text">
                    <h2>{curElem.title}</h2>
                    <p>{curElem.describe}</p>
                </div>
              </div>
            )
          })}
       </div>
    </section>
  )
}

export default Service