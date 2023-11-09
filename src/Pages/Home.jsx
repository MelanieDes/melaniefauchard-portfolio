// import { useState } from 'react'
import React from 'react';
import Navigation from '../Components/Navigation';
import SocialNetWork from '../Components/SocialNetWork';
import DynamicText from '../Components/DynamicText';
import Button from '../Components/Button';
import { motion } from 'framer-motion'
import Mouse from '../Components/Mouse';

const Home = () => {  
    // const [count, setCount] = useState(0)
    const variants = {
        initial: { 
            opacity: 0, 
            transition: { duration: 0.5 }, 
            x: 100,
        },
        visible: { 
            opacity: 1, 
            x: 0,
        },
        exit: { 
            opacity: 0, 
            transition: { duration: 0.3 }, 
            x: -100,
        },
    };

    return (
        
        <div>
            <Mouse />
            <motion.div className="home" initial="initial" animate="visible" exit="exit" variants={variants}>
            <Navigation />   
            <SocialNetWork />  
            <div className="home-main">
                <div className='main-content'>
                    <h1>Mélanie</h1>
                    <h2><DynamicText /></h2>                
                </div> 
            </div>
            <Button right={"/projet-1"} />
            {/* <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
                </button>        
            </div> */}                  
            </motion.div>
        </div>
    );
};

export default Home;