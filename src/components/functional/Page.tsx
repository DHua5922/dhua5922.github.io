import styled from "styled-components";
import Navbar from "./Navbar";
import Icon from "./Icon";
import { useScroll } from "../../hooks/layout";
import {
  ABOUT_SECTION_ID,
  CONTACT_SECTION_ID,
  GITHUB_URL,
  LINKEDIN_URL,
  PORTFOLIO_SECTION_ID,
} from "../../constants";

interface Props {
  children?: React.ReactNode;
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const rightLinks = [
  {
    href: LINKEDIN_URL,
    children: <Icon type="linkedin" />,
  },
  {
    href: GITHUB_URL,
    children: <Icon type="github" />,
  },
];

function Page({ children, ...props }: Props) {
  const { scrollTo } = useScroll();

  const leftLinks = [
    {
      children: "About",
      onClick: () => scrollTo(ABOUT_SECTION_ID),
    },
    {
      children: "Portfolio",
      onClick: () => scrollTo(PORTFOLIO_SECTION_ID),
    },
    {
      children: "Contact",
      onClick: () => scrollTo(CONTACT_SECTION_ID),
    },
  ];

  return (
    <Container {...props}>
      <Navbar leftLinks={leftLinks} rightLinks={rightLinks} />
      {children}
    </Container>
  );
}

export default Page;
