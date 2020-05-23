import React, { Component } from 'react';
import Links from "./Links";
import "../styling/Footer.css"

const githubLink = "https://github.com/amreesalmonte/personal-webapp";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p>website created and designed by me check out the code here</p>
                <div className="footerLinks">
                    <Links link={githubLink} title="code" linkClass="invertedLink" />
                </div>
            </div>
        );
    }
}

export default Footer;