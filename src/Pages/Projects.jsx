import React from 'react';
import Button from '../Components/Button';
import Card from '../Components/Card';
import Mouse from '../Components/Mouse';
import Navigation from '../Components/Navigation';
import SocialNetWork from '../Components/SocialNetWork';

const Projects = () => {
    return (
        <div>  
            <Mouse />                      
            <div className='projects-main'>
                <Navigation />
                <SocialNetWork />
                <div className="projects-container">
                    <h2 className='card-main-title'>Mes projets</h2>
                    <Card />
                </div>                
            </div>
            <Button left={"/About"} right={"/Contact"} />
        </div>
    );
};

export default Projects;