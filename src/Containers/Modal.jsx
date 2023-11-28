import React from 'react';
import icons from '../Data/aboutIcon.json'

const Modal = () => {
    return(
        <div className='modal-main'>
            {icons.map((icon) => {
                return(
                    <div className='modal-container'>
                        <div className="modal-title" key={icon.id}>
                            <h2>{icon.title}</h2>
                        </div>
                        <div className="modal-img">
                            <img src={icon.img} alt={icon.title} />
                       </div>
                    </div>                    
                )                
            })}                              
        </div>
    );   
   
};

export default Modal;