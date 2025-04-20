import styled from "styled-components";
import { useScroll } from "../../../hooks/layout";
import Center from "../Center";
import Section from "./Section";
import DefaultSectionContainer from "./SectionContainer";
import SectionHeader from "./SectionHeader";
import { Col, Row } from "react-bootstrap";
import DefaultProject from "../Project";
import { ProjectType } from "../../../types/project";
import { CONTACT_SECTION_ID } from "../../../constants";

interface ProjectItem extends ProjectType {
  onClick: () => void;
}

interface Props {
  projects: ProjectItem[];
}

const SectionContainer = styled(DefaultSectionContainer)`
  margin: auto;
`;

const Project = Object.assign(DefaultProject, {
  Col: styled(Col)`
    padding: 24px;
  `,
});

function PortfolioSection({ projects, ...props }: Props) {
  const { portfolioRef } = useScroll();

  return (
    <Section id={CONTACT_SECTION_ID} ref={portfolioRef} {...props}>
      <SectionContainer>
        <br />

        <Center>
          <SectionHeader>Portfolio</SectionHeader>
        </Center>

        <br />

        <Center>
          <Row>
            {projects.map((project, index: number) => (
              <Project.Col key={index} xs={12} md={6}>
                <Project {...project} />
              </Project.Col>
            ))}
          </Row>
        </Center>
      </SectionContainer>
    </Section>
  );
}

export default PortfolioSection;
