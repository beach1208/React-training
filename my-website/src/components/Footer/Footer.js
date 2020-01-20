import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <div className="footer">
            <ul>
                
                <li className="footer_sns-icon">
                    <FontAwesomeIcon icon="envelope"/>
                    Mail
                </li>
                <li className="footer_sns-icon">
                    <FontAwesomeIcon icon={["fab","linkedin"]}/>
                    Linkedin
                </li>
                <li className="footer_sns-icon">
                    <FontAwesomeIcon icon={["fab","github"]}/>
                    Github
                </li>
                <li className="footer_sns-icon">
                    <FontAwesomeIcon icon={["fab","dribbble"]}/>
                    Dribbble
                </li>
            </ul>
        </div>
    )
}

export default Footer;