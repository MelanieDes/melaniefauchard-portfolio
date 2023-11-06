import { useEffect } from 'react';

const Mouse = () => {

    useEffect(() => {
        const cursor = document.querySelector<HTMLElement>(".cursor");

        window.addEventListener('mousemove', (e) => {
            cursor.style.top = e.y + "px";
            cursor.style.top = e.x + "px";
        });

        document.querySelectorAll<HTMLElement>('.hover').forEach((link) => {
            link.addEventListener('mouseover', () => {
                cursor.classList.add('hovered');
            });
            link.addEventListener('mouseleave', () => {
                cursor.style.transition = ".3s ease-out";
                cursor.classList.remove("hovered"); 
            })
        })
    }, [])

    return <span className='cursor'></span>;
};

export default Mouse;