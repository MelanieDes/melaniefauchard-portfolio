
const SocialNetWork = () => {

    return (
        <div className='social-network'>
            <ul className="content">
                <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer' className='hover'>
                    <li>
                        <i className='fab fa-facebook-f'></i>
                    </li>
                </a>
                <a href="https://www.instagram.com" target='_blank' rel='noopener noreferrer' className='hover' >
                    <li>
                        <i className='fab fa-instagram'></i>
                    </li>
                </a>
                <a href="https://www.linkedin.com" target='_blank' rel='noopener noreferrer' className='hover' >
                    <li>
                        <i className='fab fa-linkedin'></i>
                    </li>
                </a>
            </ul>
            
        </div>
    );
};

export default SocialNetWork;