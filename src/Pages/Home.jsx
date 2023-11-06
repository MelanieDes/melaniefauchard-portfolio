// import { useState } from 'react'
import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import SocialNetWork from '../Components/SocialNetWork/SocialNetWork';
import DynamicText from '../Components/DynamicText';

const Home = () => {  
    // const [count, setCount] = useState(0)

    return (
        
        <div>
            <div className="home">
            <Navigation />   
            <SocialNetWork />  
            <div className="home-main">
                <div className='main-content'>
                    <h1>Mélanie</h1>
                    <h2><DynamicText /></h2>                
                </div> 
            </div>
            </div>
            {/* <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
                </button>        
            </div> */}
            
            
                  
        </div>
    );
};

export default Home;