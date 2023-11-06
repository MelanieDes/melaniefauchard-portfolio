import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import Logo from '../Components/Logo';
import Button from '../Components/Button';
import Project from '../Components/Project';

const Projet4 = () => {
    return (
        <main>
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={3} />
                <Button left={"/projet-3"} />
            </div>
        </main>
    );
};

export default Projet4;