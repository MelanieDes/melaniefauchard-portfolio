import { useState } from 'react';
import ArrowOpen from '../assets/arrow_open-24px.png';

const DropDown = ({ title, icon, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const clickOnArrow = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`dropdown-container ${isOpen ? "open" : ""}`}>
        <div className="headband">
          <div className="dropdown-title">{title}</div>
          <div className="content-icon">{icon}</div>
          <div className={`dropdown-arrow ${isOpen ? "rotate" : ""}`}>
            <img src={ArrowOpen} alt="Flèche vers le haut"  onClick={clickOnArrow} />
          </div>
        </div>
        <div className={`content ${isOpen ? "open" : ""}`}>
          <div className="content-img">{content}</div>
        </div>
      </div>
    );
};

export default DropDown;