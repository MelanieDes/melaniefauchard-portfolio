import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import Logo from '../Components/Logo';
import Button from '../Components/Button';
import Project from '../Components/Project';

const Projet1 = () => {
    return (
        <main>
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={0} />
                <Button left={"/"} right={"/projet-2"} />
            </div>
        </main>
    );
};

export default Projet1;