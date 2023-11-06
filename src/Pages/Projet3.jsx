import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import Logo from '../Components/Logo';
import Button from '../Components/Button';
import Project from '../Components/Project';

const Projet3 = () => {
    return (
        <main>
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={2} />
                <Button left={"/projet-2"} right={"/projet-4"} />
            </div>
        </main>
    );
};

export default Projet3;