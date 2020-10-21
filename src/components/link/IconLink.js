import React from "react";
import "./IconLink.scss";

export function IconLink(props) {
    return (
        <a href={props.link} 
            target="_blank" 
            id="link"
            rel="noopener noreferrer">
                {props.icon}
        </a>
    );
}