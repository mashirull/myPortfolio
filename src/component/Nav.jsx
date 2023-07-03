import React from 'react'
import NavItem from './NavItem';
import {BsFacebook ,BsInstagram ,BsWhatsapp ,} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleResNav } from '../slider/responsiveNav';


const Nav = () => {
  const dispatch = useDispatch()
  
  const resNav = useSelector(state => state.resNav.mobileNav)

  return (
    <div className='nav_container'>
        <figure><img src="images/prifile.jpg" alt="proFile" /></figure>
        <p className="name_title">Mashirul Haque</p>
        <NavItem resNav = {resNav}/>
        <div className="social_icon">
            <a href="https://www.facebook.com/profile.php?id=100009243363528" target='_blank' rel='noreferrer' className='icon'><span ><BsFacebook/></span></a>
            <a href="https://www.instagram.com/massi52roc/" target='_blank' rel='noreferrer'  className='icon'><span ><BsInstagram/></span></a>
            <a href="https://wa.me/7488152589" target='_blank' rel='noreferrer'  className='icon'><span ><BsWhatsapp/></span></a>
            <a href="https://github.com/mashirull" target='_blank' rel='noreferrer' className='icon'><span ><AiFillGithub/></span></a>
        <div className={resNav ? 'hamburger active' : 'hamburger'} onClick={()=>dispatch(ToggleResNav())}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        </div>
    </div>
  )
}

export default Nav