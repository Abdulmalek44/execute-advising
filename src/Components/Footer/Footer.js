import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'> Home </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'> About </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'> Testimonials </a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'> Demo </a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2020 Execute, Inc. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
