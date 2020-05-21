import React, { Component } from 'react';
import Links from "./Links";
import "../styling/Intro.css";
import Resume from "../data/Resume.pdf"

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
                    <Links link={this.githubLink} title="github" />
                    <Links link={this.linkedinLink} title="linkedin" />
                    <Links link={Resume} title="resume" />
                </div>
            </div>
        );
    }
}

export default Intro;