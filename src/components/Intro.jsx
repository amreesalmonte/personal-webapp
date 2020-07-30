import React, { Component } from 'react';
import Links from "./Links";
import "../styling/Intro.css";
import Resume from "../data/Resume.pdf"
import ContactForm from "./ContactForm";

class Intro extends Component {

    githubLink = "https://github.com/amreesalmonte";
    linkedinLink = "https://linkedin.com/in/amreesalmonte";

    render() {
        return (
            <div className="introComponent">
                <img src="/icon.png" alt="icon" className="icon" />
                <p className="title">Hello! I'm Am</p>
                <p className="subtitle">cs student at university of alberta</p>
                <div className="introLinks">
                    <Links link={this.githubLink} title="github" linkClass="regularLink" />
                    <Links link={this.linkedinLink} title="linkedin" linkClass="regularLink" />
                    <Links link={Resume} title="resume" linkClass="regularLink" />
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
        );
    }
}

export default Intro;