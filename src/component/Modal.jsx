import React from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../slider/modalSlice';

const Modal = ({url}) => {

    const dispatch = useDispatch()
   

  return (
    <div className="modal-overlay">
        <div className="modal-content">
            <iframe src={url} frameBorder="0"  width="100%" height="450" title='web'></iframe>
            <button onClick={()=>dispatch(setModal(false))}>X</button>
        </div>
    </div>
  )
}

export default Modal

