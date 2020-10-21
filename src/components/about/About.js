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
                        I am a senior majoring in Computer Science and working part-time as a Junior Web Portal UI Developer for The University of 
                        Texas at Dallas (UT Dallas). I use my experience in full stack development to create mobile applications and websites.
                        <br/><br/>
                        As a Web Portal UI Developer, I successfully used my front end and back end skills to create a service catalog website with
                        2 developers that lets over 20,000 UT Dallas students use IT services offered by the Office of Information Technology.

                        Also, I won first place in ACM Projects and ACM Ignite while working in a diverse team of other developers.
                        <br/><br/>
                        Currently, I am looking for full-time or internship opportunities in software engineering, 
                        front end development, back end development, or full stack development.
                    </p>
                </Col>
            </Row>   
        </section>
    ); 
}