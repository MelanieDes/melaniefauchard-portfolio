import React from 'react';
import Button from '../Components/Button';
import { motion } from 'framer-motion';
import aboutData from '../Data/aboutData.json';
import avatar from '../assets/img/avatar.jpg';
import Circle from '../Components/Circle';
import Mouse from '../Components/Mouse';
import Navigation from '../Components/Navigation';
import SocialNetWork from '../Components/SocialNetWork';
import Modal from '../Containers/Modal';
import { Link } from 'react-router-dom';


const About = () => {

    return (
        <div>
            <Mouse /> 
            <div className="about-main">
                <motion.div className="about-container">
                    <Navigation />
                    <SocialNetWork />    
                    
                    <h1 className='about-main-title'>Qui suis-je ?</h1>                    
                    
                    <div className="about-description">
                        <div className='about-img'>
                            <img src={avatar} alt="avatar Mélanie Fauchard" />
                        </div>
                        <div className="about-text-container">
                            <motion.p className="about-text">
                            Bonjour! Je suis Mélanie Fauchard. Je suis développeuse web et j'habite dans une petite commune de la Sarthe.</motion.p>
                            <motion.p className="about-text">
                            J'ai découvert les métiers du web lors d'une formation en tant que dessinateur du bâtiment. Je me suis trouvé un grand intérêt immédiatement. Je me suis renseigné sur les formations possibles et j'ai commencé par un bachelor Concepteur Réalisateur web et Digital que j'ai obtneue. Ensuite j'ai travaillé dans une petite entreprise de revente de meubles en déstockage ou je m'occupais du site vitrine mais je me suis rendu à l'évidence qu'il me maquait quelques bases. Donc suite à une démission pour raison personnelle, je me suis inscrite à la formation d'intégrateur web chez OpenClassRooms.
                            </motion.p>
                        </div>                                           
                    </div> 
                    <Circle /> 
                    <Modal title="Hello" message="tout est ok"/>                
                    <div className="about-card">
                        {aboutData.map((data) => {
                            return(
                                <Link to={`/Modal`} style={{ textDecoration: "none" }}>
                                    <article className='card-size hover' key={data.id}>
                                        <img className='about-card-img' src={data.icon} alt={data.title} />
                                        <h3 className='card-title'>{data.title}</h3>
                                    </article>
                                </Link>
                                
                            )
                        })}
                    </div>                     
                    <Button left={"/"} right={"/Projects"} /> 
                </motion.div>
            </div> 
        </div>
    );
};

export default About;