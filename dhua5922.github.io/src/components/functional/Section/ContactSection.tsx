import styled from "styled-components";
import { useScroll } from "../../../hooks/layout";
import SectionDefault from "./SectionDefault";
import Center from "../Center";
import SectionHeader from "./SectionHeader";
import SectionDescription from "./SectionDescription";
import Link from "../Link";
import { CONTACT_SECTION_ID, LINKEDIN_URL } from "../../../constants";

const Email = styled.span`
  text-decoration: underline;
`;

function ContactSection() {
  const { contactRef } = useScroll();
  return (
    <SectionDefault id={CONTACT_SECTION_ID} ref={contactRef}>
      <Center fullHeight>
        <div>
          <Center>
            <SectionHeader>Contact Me</SectionHeader>
          </Center>

          <br />
          <br />

          <SectionDescription>
            You can reach out to me on <Link href={LINKEDIN_URL}>LinkedIn</Link>{" "}
            or email me at <Email>hua.dylan@gmail.com</Email>
          </SectionDescription>
        </div>
      </Center>
    </SectionDefault>
  );
}

export default ContactSection;
