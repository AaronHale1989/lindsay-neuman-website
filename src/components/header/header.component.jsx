import React from 'react'
import { Link } from 'react-router-dom';


import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <div className='logo-container'>
            <Link to='/'>LH</Link>
        </div>
        <div className='options'>
            <Link to='/lindsay-neuman' className="option">
                LINDSAY NEUMAN
            </Link>
            <Link to='/blog' className="option">
                BLOG
            </Link>
            <Link to='/podcast' className="option">
                PODCAST
            </Link>
            <div className="option">
               <a href="https://www.compass.com/agents/philadelphia/lindsay-gordon/" target='_blank' rel="noopener noreferrer">REAL ESTATE</a>
            </div>
            <Link className="option" to='/contact'>
                CONTACT
            </Link>
        </div>
    </div>
);

export default Header;