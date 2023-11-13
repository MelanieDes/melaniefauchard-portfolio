import React from 'react';
import projects from "../Data/projectsData.json"
import { Link } from 'react-router-dom';



const Card = () => {
    return( 
                <div className='card-main'>            
                    {projects.map((projet) => {                    
                        return( 
                            <article className='hover' key={projet.id}>                            
                                <Link to={`/Project/${projet.id}`} style={{ textDecoration: "none" }}>
                                    <div className="card-content">
                                        <img className='card-img' src={projet.img} alt={projet.title} />
                                        <h3 className='card-title'>{projet.title}</h3>
                                    </div>
                                </Link>
                            </article>
                        )
                    })}            
                </div>       
    );
};

export default Card;