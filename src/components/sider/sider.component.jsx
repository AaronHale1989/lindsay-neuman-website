import React from 'react'
import { Link } from 'react-router-dom';

import './sider.styles.scss'

const Sider = props => (
    <nav className='sider'>
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
        </div>  
    </nav>
);

export default Sider