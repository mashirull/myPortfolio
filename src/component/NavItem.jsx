import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToggleResNav } from '../slider/responsiveNav';


const NavItem = ({resNav}) => {

  const dispatch = useDispatch()

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition+10 >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 

  return (
    <div className={resNav ? 'nav_items res_nav_items' : 'nav_items'}>
        <li onClick={()=>{scrollToElement('home') ; dispatch(ToggleResNav())} } className={activeSection === 'home' ? 'active' : ''}>Home </li>
        <li onClick={()=>{scrollToElement('about') ; dispatch(ToggleResNav())}} className={activeSection === 'about' ? 'active' : ''}> About Me </li>
        <li onClick={()=>{scrollToElement('service'); dispatch(ToggleResNav())}} className={activeSection === 'service' ? 'active'  : ''}> What I do</li>
        <li onClick={()=>{scrollToElement('resume'); dispatch(ToggleResNav())}} className={activeSection === 'resume' ? 'active' : ''}>Resume</li>
        <li onClick={()=>{scrollToElement('porfolio'); dispatch(ToggleResNav())}} className={activeSection === 'porfolio' ? 'active' : ''}>Portfolio</li>
        <li onClick={()=>{scrollToElement('contact'); dispatch(ToggleResNav())}} className={activeSection === 'contact' ? 'active' : ''}>Contact</li>
    </div>
  )
}

export default NavItem