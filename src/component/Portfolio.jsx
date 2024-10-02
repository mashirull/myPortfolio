import React, { useState } from 'react';
import { myProjectData } from '../Data/projectData';
import Modal from './Modal';
import { useSelector  , useDispatch} from 'react-redux';
import  { setModal } from '../slider/modalSlice';
import {BiChevronDown} from 'react-icons/bi';
import { FaRegShareSquare } from "react-icons/fa";


const Portfolio = () => {

  const showModal = useSelector((state)=>state.modal.showModal)
  const dispatch = useDispatch();

  const [url , setUrl] = useState(null)
  const [visibleCards, setVisibleCards] = useState(6);
  
  return (
    <section className='portfolio_container' id='porfolio'>
        <div className="heading">
            <div className="blur_text service_color">
                <h1>PORTFOLIO</h1>
            </div>
            <div className="highlighted_text">
                <p>My Work</p>
            </div>
       </div>

      <div className="project_container">
        {showModal && <Modal url = {url}/>}
        {<div className="grid_3_column">
          {myProjectData.slice(0 , visibleCards).map((project)=> {
            return (
              <div className="proj_card" key={project.id}>
                <div className='image' onClick={()=>{dispatch(setModal(true));setUrl(project.url) }}>
                  <img src={project.image_url} alt={project.title} />
                </div>
                <div className="text"> 
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
                <a href= {project.url} target='_blank' rel='noreferrer'><button className=' proj_btn'> <span><FaRegShareSquare/></span> </button></a>
                
              </div>
            )
          })};
        </div>}
        {visibleCards < myProjectData.length ?  <button onClick={()=>setVisibleCards(myProjectData.length)} className='common_btn center'>See More <span className='icon_down'><BiChevronDown/></span></button>
        : <button onClick={()=>setVisibleCards(6)} className='common_btn center'>See Less <span className='icon_up'><BiChevronDown/></span></button>}
      </div>
      
   
    </section>
  )
}

export default Portfolio