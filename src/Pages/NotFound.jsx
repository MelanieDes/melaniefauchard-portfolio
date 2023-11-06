import * as React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFound-content">
                <h1 className=""> 404 </h1>            
                <p className=""> Oups! La page que vous demandez n'existe pas.</p>
                <div>
                    <Link to="/"> 
                        <h2>Retour à l'accueil <i className='fas fa-home'></i></h2>
                    </Link>                
                </div>
            </div>
        </div>
        
    );
};

export default NotFound;