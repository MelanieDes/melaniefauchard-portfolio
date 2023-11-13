import React, { useState, useEffect } from 'react';

const Circle = () => {

    const [left, setLeft] = useState();
    const [top, setTop] = useState();
    const [size, setSize] = useState();
    

    useEffect(() => {
        setLeft(Math.floor(Math.random() * 200 + 700) + "px");
        setTop(Math.floor(Math.random() * 200 + 150) + "px");
        setSize("scale(" + (Math.random() + 0.7) + ")");
        
    }, []);

    return (
        <div>
            <span className="random-circle" style={{ left, top, transform: size }}></span>
        </div>
    );
};

export default Circle;