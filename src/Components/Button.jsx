import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = (props) => {
    return (
        <div className="button-arrow">
            <div className='scroll-bottom'>
                {props.left && (
                    <NavLink to={props.left} className="left hover">
                    <span>&#10092;</span>
                </NavLink>
                )}
                {props.right && (
                    <NavLink to={props.right} className="right hover">
                    <span>&#10093;</span>
                </NavLink>
                )}                 
            </div>
            <div className="bottom-button">
            {props.bottom && (
                    <NavLink to={props.bottom} className="bottom hover">
                    <span>&#x2EF;</span>
                </NavLink>
                )} 
            </div>
        </div>
    );
};

export default Button;