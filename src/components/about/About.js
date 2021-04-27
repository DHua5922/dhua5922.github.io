import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillGithub } from "react-icons/ai";
import { FaGooglePlay, FaLinkedin } from "react-icons/fa";
import { IconLink } from "../link/IconLink";
import './About.scss';

export function About() {
    return (
        <section id="about">
            <Row noGutters>
                <Col id="left-col" xs="12" lg="5" xl="4">
                    <Image src={require("../../img/img_me.jpg")} />
                    <h1 id="name">Dylan Hua</h1>
                    <div id="icon-list">
                        <IconLink 
                            link="https://www.linkedin.com/in/dylanhua/"
                            icon={<FaLinkedin />} />
                            
                        <IconLink 
                            link="https://github.com/DHua5922"
                            icon={<AiFillGithub style={{margin: "0 5px"}} />} />

                        <IconLink 
                            link="https://play.google.com/store/apps/developer?id=DevDHua12"
                            icon={<FaGooglePlay />} />
                    </div>
                </Col>

                <Col id="right-col" xs="12" lg="7" xl="8">
                    <h1 id="title">About</h1>
                    <p id="description">
                        As Web Portal UI Developer, I have experience in front end development with React, HTML, and CSS. I was also a software developer intern for Codubee in which I gained full stack development experience using Node.js and React.
                    </p>
                </Col>
            </Row>   
        </section>
    ); 
}