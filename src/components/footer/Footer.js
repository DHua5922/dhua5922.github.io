import tw, { styled } from 'twin.macro';
import React from "react";
import { IconLink } from '../views/IconLink';
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const StyledFooter = styled.div`
    ${tw`bg-black justify-between flex px-7 py-3 items-center text-white`}
`;

export default function Footer() {
    return (
        <StyledFooter>
            <div>Made by Dylan Hua</div>
            <div tw="flex text-3xl">
                <IconLink 
                    link="https://www.linkedin.com/in/dylanhua/"
                    icon={<FaLinkedin tw="text-white" />} />
                <div tw="px-2" />
                <IconLink 
                    link="https://github.com/DHua5922"
                    icon={<AiFillGithub tw="text-white" />} />
            </div>
        </StyledFooter>
    )
}