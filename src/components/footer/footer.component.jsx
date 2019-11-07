import React from 'react'

import './footer.styles.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
    <div className='footer'>
        <div className='footer-options'>
            <div className='footer-option'>
                <a href="https://www.facebook.com/LindsayGRealtor/" target='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
            </div>
            <div className='footer-option'>
                <a href="https://twitter.com/LindsaySaraG" target='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
            </div>
            <div className='footer-option'>
                <a href="https://www.instagram.com/lsgeez/" target='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>
        </div>
    </div>
);

export default Footer;