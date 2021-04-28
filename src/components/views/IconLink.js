import React from "react";

export function IconLink({ link, icon }) {
    return (
        <a href={link} 
            target="_blank" 
            rel="noopener noreferrer">
                {icon}
        </a>
    );
}