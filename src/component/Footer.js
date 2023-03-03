import React from "react";
import { FaFacebookF, FaTwitter,FaInstagram, FaPinterestP } from "react-icons/fa";
export default function Navbar(props){
    return (
       <footer>
            <div className="cm-page-center footer-link-column">
                <div className="cm-flex footer">
                    <div className="cm-wd-50 footer-col">
                        <h3>About Us</h3>
                        <div className="line-bar"></div>
                        <p>Lorem ipsum dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident...</p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                    <div className="cm-flex social-icon">
                        <ul>
                        <li className="social-icon-list"><FaFacebookF /></li>
                        <li className="social-icon-list"><FaTwitter /></li>
                        <li className="social-icon-list"><FaInstagram /></li>
                        <li className="social-icon-list"><FaPinterestP /></li>
                        </ul>
                    </div>
                    </div>
                    <div className="cm-wd-50 footer-col">
                        <h3>Instragram Follow</h3>
                        <div className="line-bar"></div> 
                    </div>
                </div>
            </div>
            <div className="cm-txt-center footer-copywite">
                <p>Copyright © 2019 All Rights Reserved.</p>
            </div>
       </footer>
    );
}