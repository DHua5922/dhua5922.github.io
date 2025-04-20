import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import styled from "styled-components";

interface Props {
  type: "linkedin" | "github";
}

const iconStyles = `
  color: white;
  font-size: 1.875rem;
`;

const icons = {
  linkedin: styled(FaLinkedin)`
    ${iconStyles}
  `,
  github: styled(AiFillGithub)`
    ${iconStyles}
  `,
};

function Icon({ type, ...props }: Props) {
  const Component = icons[type];
  return <Component {...props} />;
}

export default Icon;
