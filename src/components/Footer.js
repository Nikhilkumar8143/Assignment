/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import downloadappstore from '../assets/img/downloadappstore.jpg';
import downloadgoogleplay from '../assets/img/downloadgoogleplay.jpg';

const Footer = (props) => {
    return (
        <footer>
            <div className="flex-style footer-blocks">
                <div className="mw-30 mr-40 footer-fb">
                    <h2 className="brand-name-footer">AMTICA</h2>
                    <p className="footer-desp">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac leo sit amet dolor laoreet volutpat. 
                    </p>
                    <ul className="social-block-list flex-style">
                        <li><i className="fa fa-youtube-play"></i></li>
                        <li><i className="fa fa-facebook"></i></li>
                        <li><i className="fa fa-twitter"></i></li>
                        <li><i className="fa fa-instagram"></i></li>
                    </ul>
                </div>
                <div className="mw-30 mr-40">
                    <ul className="footer-list-ul">
                        <span className="header-list">Sitemap</span>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Seller</a></li>
                        <li><a href="#">Buyer</a></li>
                        <li><a href="#">Search</a></li>
                    </ul>
                </div>
                <div className="mw-30 mr-40">
                    <ul className="footer-list-ul">
                    <span className="header-list">Services</span>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Request a feature</a></li>
                        <li><a href="#">Terms and policy</a></li>
                    </ul>
                </div>
                <div className="mw-30 mr-40">
                    <ul className="footer-list-ul">
                    <span className="header-list">For users</span>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                        <li><a href="#">My Orders</a></li>
                    </ul>
                </div>
                <div className="mw-30">
                    <ul className="footer-list-ul">
                    <span className="header-list">Our App</span>
                        <li><a href="#"><img className="footer-download-a" src={downloadappstore}/></a></li>
                        <li><a href="#"><img className="footer-download-g" src={downloadgoogleplay}/></a></li>
                    </ul>
                </div>
            </div>
            <div>
                <span className="copyright">&copy; 2020 Amtica.All rights reserved</span>
                <div className="pull-right footer-privacy">
                    <a href="#">Privacies & Cookies</a>
                    <a href="#">Accessibility</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
