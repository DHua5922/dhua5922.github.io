import styled from "styled-components";
import { useScroll } from "../../../hooks/layout";
import SectionDefault from "./SectionDefault";
import Center from "../Center";
import SectionDescription from "./SectionDescription";
import { ABOUT_SECTION_ID } from "../../../constants";

const Name = styled.h1`
  font-size: 5vw;
  text-align: center;
`;

function AboutSection() {
  const { aboutRef } = useScroll();
  return (
    <SectionDefault id={ABOUT_SECTION_ID} ref={aboutRef}>
      <Center fullHeight>
        <div>
          <Name>Dylan Hua</Name>
          <br />
          <br />
          <br />
          <SectionDescription>
            Passionate developer who loves turning ideas into functional apps
          </SectionDescription>
        </div>
      </Center>
    </SectionDefault>
  );
}

export default AboutSection;
