import React, { useState } from 'react'
import {BiChevronDown} from 'react-icons/bi';

const UpaArrow = () => {
    const scrollToElement = (id) => {
        const element = document.getElementById('home');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const [upArrow , setUpArrow] = useState(false)

      window.onscroll = ()=>{
        if(window.scrollY > 200 ){
            setUpArrow(true)
        }
        else{
            setUpArrow(false)
        }
      }

  return (
    <span className={upArrow ? 'up_arrow show_arrow' : 'up_arrow'} onClick={scrollToElement}><BiChevronDown/></span>
  )
}

export default UpaArrow