import React, {useState} from 'react'
import { Link, UNSAFE_useScrollRestoration } from 'react-router-dom'
import toolbarImage from '../images/VUSMP_logo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './navbar.css' // This is the CSS file for the navbar
import { Button } from './button';

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const closeMenu = () => setClick(false)
    
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton)


    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo">
                    <img src={toolbarImage} alt="Logo" className="navbar-logo-img" />
                </Link>
                <div className='menu-icon' onClick={() => setClick(!click)}>
                    <FontAwesomeIcon icon={click ? faTimes : faBars} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                    <a href="http://vu.edu/menus" className="nav-links btn btn--outline" onClick={closeMenu} target="_blank" rel="noopener noreferrer">
                        Menus
                    </a>
                    </li>
                </ul>
                <button 
                    buttonStyle="btn--primary" 
                    buttonSize="btn-m" 
                    onClick={() => console.log('Button clicked')}
                >
                    Click Me
                </button>
            </div>
        </nav>
    );
}

export default Navbar