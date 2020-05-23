import React, { Component } from 'react';
import Links from "./Links";
import "../styling/Card.css";

class Card extends Component {
    render() {
        const { header, subHeader, description, githubLink, websiteLink } = this.props.card;
        return (
            <div className="card">
                <div className="cardText">
                    <p className="header">{header}</p>
                    <p className="subHeader">{subHeader}</p>
                    <p className="description">{description}</p>
                </div>
                <div className="pageLink">
                    <Links link={githubLink} title="code" linkClass="regularLink" />
                    <Links link={websiteLink} title="website" linkClass="regularLink" />
                </div>
            </div>
        );
    }
}

export default Card;