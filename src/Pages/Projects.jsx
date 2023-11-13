import React from 'react';
import Button from '../Components/Button';
import Card from '../Components/Card';

const Projects = () => {
    return (
        <div>            
            <div className='card-container'>
                <h2 className='card-main-title'>Mes projets</h2>
                <Card />            
            </div>
            <Button left={"/About"} right={"/Contact"} />
        </div>
    );
};

export default Projects;