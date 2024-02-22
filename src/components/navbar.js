import React, {useState, useEffect} from 'react'
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

    useEffect(() => {
        window.addEventListener('resize', showButton)

        // Cleanup the component
        return () => {
            window.removeEventListener('resize', showButton)
        }
    }, [])

    const redirectToMenus = () => {
        window.open('http://vu.edu/menus', '_blank').focus();
    }


    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo">
                    <img src={toolbarImage} alt="Logo" className="navbar-logo-img" />
                </Link>
                <div className='menu-icon' onClick={() => setClick(!click)}>
                    <FontAwesomeIcon icon={click ? faTimes : faBars} />
                </div>
                <button 
                    className="btn btn--primary btn-m" 
                    onClick={redirectToMenus}
                >
                    View Menus
                </button>
                <button 
                    className="btn btn--primary btn-m" 
                    onClick={() => console.log('Button clicked')}
                >
                    Log In
                </button>
            </div>
        </nav>
    );
}

export default Navbar