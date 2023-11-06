import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import Logo from '../Components/Logo';
import Button from '../Components/Button';
import Project from '../Components/Project';

const Projet2 = () => {
    return (
        <main>
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={1} />
                <Button left={"/projet-1"} right={"/projet-3"} />
            </div>
        </main>
    );
};

export default Projet2;