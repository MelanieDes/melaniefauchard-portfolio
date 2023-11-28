import React from 'react';
import ContactForm from '../Components/ContactForm';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from '../Components/Button';
import { motion } from 'framer-motion';
import Mouse from '../Components/Mouse';
import Navigation from '../Components/Navigation';
import SocialNetWork from '../Components/SocialNetWork';
import Footer from '../Components/Footer';

const Contact = () => {

    const pageTransition = {
        in: {
            opacity: 1,
            x: 0,
        },
        out: {
            opacity: 0,
            x: 200,
        }
    }

    return (
        <main>
            <Mouse />            
            <motion.div className="contact" initial="out" animate="in" exit="out" variants={pageTransition} transition={{ duration: 0.5 }}>
                <Navigation />
                <div className='contact-form'>
                    <ContactForm /> 
                </div>
                                                                
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>Adresse</h4>
                            <p>Lieu-dit Rouillon</p>
                            <p>72300 La Chapelle d'Aligné</p>
                        </div>                        
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>Téléphone</h4>
                            <CopyToClipboard text="0695393331" className="hover">
                                <p style={{ cursor: "pointer" }} className='clipboard' onClick={() => alert("Téléphone copié !")} >06 95 39 33 31</p>
                            </CopyToClipboard>                            
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>Email</h4>
                            <CopyToClipboard text="melaniefauchard0@gmail.com" className="hover">
                                <p style={{ cursor: "pointer" }} className='clipboard' onClick={() => alert("Email copié !")} >melaniefauchard0@gmail.com</p>
                            </CopyToClipboard>
                        </div>                          
                    </div> 
                    <SocialNetWork />
                    <Footer />         
                </div>               
                <Button left={"/Projects"} />
            </motion.div>
            
        </main>
    );
};

export default Contact;