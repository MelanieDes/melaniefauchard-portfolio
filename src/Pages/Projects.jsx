import React from 'react';
import Button from '../Components/Button';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import Mouse from '../Components/Mouse';
import Navigation from '../Components/Navigation';
import SocialNetWork from '../Components/SocialNetWork';

const Projects = () => {
    return (
        <div className='projects'>  
            <Mouse />                                               
            <div className='projects-main'>
            <Navigation />
            <SocialNetWork />                               
                <div className="projects-container">
                    <h2 className='card-main-title'>Mes projets</h2>
                    <Card />
                </div>
                <Footer />                
            </div>
            <Button left={"/About"} right={"/Contact"} />
            
        </div>
    );
};

export default Projects;