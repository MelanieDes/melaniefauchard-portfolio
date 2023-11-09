import React from 'react';
import Navigation from '../Components/Navigation';
import Logo from '../Components/Logo';
import Button from '../Components/Button';
import Project from '../Components/Project';
import Mouse from '../Components/Mouse';

const Projet1 = () => {
    return (
        <main>
            <Mouse />
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