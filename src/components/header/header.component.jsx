import React from 'react'
import { Link } from 'react-router-dom';
import SiderButton from '../sider/siderButton.component';


import './header.styles.scss';

const Header = props => (
    <div className='header'>
        <div className='logo-container'>
            <Link className='logo' to='/'>LN</Link>
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
               <a href="https://www.compass.com/agents/lindsay-neuman/" target='_blank' rel="noopener noreferrer">REAL ESTATE</a>
            </div>
            <Link className="option" to='/contact'>
                LET'S CONNECT
            </Link>
            <SiderButton click={props.siderClickHandler} className='toggle-sider-button'/>
        </div>
    </div>
);

export default Header;