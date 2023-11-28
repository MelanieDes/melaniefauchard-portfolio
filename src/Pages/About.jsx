import React from 'react';
import Button from '../Components/Button';
import { motion } from 'framer-motion';
import aboutData from '../Data/aboutData.json';
import avatar from '../assets/img/avatar.jpg';
import Circle from '../Components/Circle';
import Mouse from '../Components/Mouse';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import SocialNetWork from '../Components/SocialNetWork';
import { Link } from 'react-router-dom';
import DropDown from '../Components/DropDown';


const About = () => {

    return (
        <div>
            <Mouse />
            <Navigation />
            <SocialNetWork /> 
            <div className="about-main">                
                <motion.div className="about-container">    
                    
                    <h1 className='about-main-title'>Qui suis-je ?</h1>                    
                    <div className="about-description">
                    
                        <div className='about-img'>
                            <img src={avatar} alt="avatar Mélanie Fauchard" />
                            <Button left={"/"} right={"/Projects"} />
                        </div>
                        <div className="about-text-container">
                            <h2>Bonjour!</h2>
                            <motion.p className="about-text">
                            Je suis Mélanie Fauchard.<br></br> Je suis intégratrice web et j'habite dans une petite commune de la Sarthe.</motion.p>
                            <motion.p className="about-text">
                            J'ai découvert les métiers du web lors d'une formation en tant que dessinateur du bâtiment. J'ai trouvé un grand intérêt envers ces métiers. Je me suis renseignée sur les formations possibles et j'ai intégré une formation en présentiel "Bachelor Concepteur Réalisateur web et Digital", que j'ai obtenue.<br></br>Ensuite j'ai travaillé dans une petite entreprise de revente de meubles en déstockage ou je m'occupais du site vitrine mais je me suis rendu à l'évidence qu'il me maquait quelques bases. Donc suite à une démission pour raison personnelle, je me suis inscrite à la formation d'intégrateur web chez OpenClassRooms.
                            </motion.p>
                            <motion.p className="about-text">
                            Ensuite j'ai travaillé dans une petite entreprise de revente de meubles déstocké où je m'occupais du site e-commerce. Je me suis rendu à l'évidence qu'il me manquait quelques bases. Donc suite à une démission pour raison personnelle, je me suis inscrite à la formation d'intégrateur web chez OpenClassRooms.
                            </motion.p>
                        </div>                                           
                    </div> 
                    <Circle />
                    <div className="about-skills">
                        <div class="about-collapse-container">                                                
                            <div class="about-collapse">
                                {aboutData.map((item) => (
                                    <DropDown key={item.id} title={item.title} content={item.content} />
                                ))}
                            </div>
                            
                        </div>                   
                        <div className="about-card">
                            {aboutData.map((data) => {
                                return(
                                    <Link to={`/Modal`} style={{ textDecoration: "none" }} className='card-modal'>
                                        <article className='card-size hover' key={data.id}>
                                            <img className='about-card-img' src={data.icon} alt={data.title} />
                                            <h3 className='card-title'>{data.title}</h3>
                                        </article>
                                    </Link>                                
                                )
                            })}
                        </div>
                    </div>
                     
                    <Footer />     
                </motion.div>
            </div> 
        </div>
    );
};

export default About;