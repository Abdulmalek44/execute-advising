import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import logo from '../../Images/logo.png';
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [navBackground, setNavBackground] = useState('transparent');

    const handelClick = () => setClick(!click)

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            if (position > 100) {
                setNavBackground('#000000e6'); // Change the color to your desired value
            } else {
                setNavBackground('transparent');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='header' style={{ background: navBackground }}>
            <nav className='navbar'>
                <Link to='hero' spy={true} smooth={true} offset={-100} duration={500} className='logo' >
                    <img src={logo} alt='No_Photo' />
                </Link>
                <div className='hamburger' onClick={handelClick}>
                    {click ? <FaTimes size={30} style={{ color: '#ffffff' }} /> :
                        <FaBars size={30} style={{ color: '#ffffff' }} />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} className='nav-link'> Home </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className='nav-link'> About </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="testimonials" spy={true} smooth={true} offset={-110} duration={500} className='nav-link'> Testimonials </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="demo" spy={true} smooth={true} offset={-150} duration={500} className='nav-link'> Demo </Link>
                    </li>
                </ul>
            </nav>

        </div >
    )
}

export default Navbar