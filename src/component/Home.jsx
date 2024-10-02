import React from 'react'
import Typewriter from "typewriter-effect";
import Button from './Button';
import {BiChevronDown} from 'react-icons/bi';

const Home = () => {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='home_container' id='home'>
        <div className="middle_text">
        <h4>Hi, This is <span className='common_clr'>MASHIRUL HAQUE</span></h4>
        <h1>
            <Typewriter
  
                
                options={{
                    strings: ["I'm a Web Developer." , "I'm Wordpress developer", "I'm UX/UI Developer.", "I'm Frelancer." , "I'm React Developer.", "I'm Graphic Designer."],
                    autoStart: true,
                    loop: true,
                  }}
            />
        </h1>
        <p>Based in Palamu , Jharkhand (India)</p>
        <span onClick={()=>scrollToElement('contact')}><Button/></span>
        <span className='down_arrow' onClick={()=>scrollToElement('about')}><BiChevronDown/></span>
        </div>
    </section>
  )
}

export default Home