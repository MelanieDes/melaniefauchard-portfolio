import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Logo from '../../Components/Logo';
import ContactForm from '../../Components/ContactForm';
import { CopyToClipboard } from 'react-copy-to-clipbeard';

const Contact = () => {
    return (
        <main>
            <div className="contact">
                <Navigation />
                <Logo />
                <ContactForm />
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
                            <p>06 95 39 33 31</p>
                            </CopyToClipboard>
                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;