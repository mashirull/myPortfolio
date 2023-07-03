import React  from 'react';

const About = () => {
  return (
    <section className='about_container' id='about'>
       <div className="heading">
            <div className="blur_text">
                <h1>ABOUT ME</h1>
            </div>
            <div className="highlighted_text">
                <p>Know Me More</p>
            </div>
       </div>

        <div className="flex-2-row about_box">
            <div className="about_text">
                <p className='title'>I'm <span >Mashirul Haque,</span> a Web Developer</p>
                <p className='text'>I help you build brande for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br /><br /> Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>
                <p></p>
            </div>
            <div className="about_address">
                <p>Name: <span>Mashirul Haque</span></p>
                <p>Email: <a  className='email' href="mailto:haquemashirul@gmail.com">chat@mashirul</a></p>
                <p>Age:  <span>{(new Date().getFullYear() -1999)-1}</span></p>
                <p>From: <span>Palamu , Jharkhand INDIA</span> </p>
                <button className='common_btn ab_btn'>Download CV</button>
            </div>
        </div>

        <div className="no_exprience_container flex-4-row">
            <div className="ex_box"><h2>1+</h2> <p>Years Exprience</p></div>
            <div className="ex_box"><h2>5+</h2> <p>Happy Clients</p></div>
            <div className="ex_box"><h2>10+</h2> <p>Projects Done</p></div>
            <div className="ex_box"><h2>10h+</h2> <p>Work/day</p></div>
        </div>
    </section>
  )
}

export default About