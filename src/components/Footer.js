import tw, { styled } from 'twin.macro';
import React from "react";
import { IconLink } from './views/IconLink';
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const StyledFooter = styled.div`
    ${tw`sticky bottom-0 bg-black justify-between flex px-7 py-3 items-center text-white`}
`;

const links = [
    {
        link: "https://www.linkedin.com/in/dylanhua/",
        icon: <FaLinkedin tw="text-white mr-3" />,
    },
    {
        link: "https://github.com/DHua5922",
        icon: <AiFillGithub tw="text-white" />,
    },
];

export default function Footer() {
    return (
        <StyledFooter>
            <div>&#169; Made by Dylan Hua</div>
            <div tw="flex text-2xl">
                { links.map(link => <IconLink {...link} />) }
            </div>
        </StyledFooter>
    )
}