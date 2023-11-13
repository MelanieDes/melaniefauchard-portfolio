import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import projets from '../Data/projectsData.json';
import { motion } from 'framer-motion';
import Navigation from '../Components/Navigation';
import Logo from '../Components/Logo';
import Circle from '../Components/Circle';
import Button from '../Components/Button';

const Project = () => {
    
    const variants = {
        initial: {
            opacity: 0,
            transition: { duration: 0.5},
            x: 200,
        },
        visible: {
            opacity: 1,            
            x: 0,
        },
        exit: {
            opacity: 0.4,
            transition: { duration: 0.35},
            x: -800,
        }
    }

    const { id } = useParams();
    const selectProject = projets.find((item) => item.id === id);

    if(!selectProject) {
        return <Navigate to="/NotFound" />;
    }

    const { title, date, languages, infos, img, link } = selectProject;

    
    return (
        <div className="project" id="projets">
            <Navigation />
            <Logo />            
                <motion.div className='project-main' initial="initial" animate="visible" exit="exit" variants={variants}>
                    <div className="project-content">
                        <h1>{title}</h1>
                        <p>{date}</p>
                        <ul className="languages">
                            {languages.map((item) => {
                                return <li key={item}>{item}</li>
                            })}
                        </ul>
                    </div>
                    {/* <motion.div className="img-content" initial="initial" animate="visible" variants={imgAnim} transition={{ duration: 1.2 }}> */}
                    <motion.div className="img-content" initial="initial" animate="visible" transition={{ duration: 1.2 }}>
                        <div className="img-container hover">
                            <span>
                                <h3>{title}</h3>
                                <p>{infos}</p>
                            </span>
                            <img src={img} alt={title} className='img' />
                        </div>
                        <div className="button-container">
                            <a href={link} target="_blank" rel="noopener noreferrer" className='hover'>
                                <span className='button'>Projet GitHub</span>
                            </a>
                        </div>
                    </motion.div>
                    <Circle />
                    <Button left={"/Projects"} />                 
                </motion.div>
                                   
        </div>
    );
};

export default Project;