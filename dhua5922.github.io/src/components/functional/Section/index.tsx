import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import PortfolioSection from "./PortfolioSection";
import SectionParent from "./Section";
import SectionContainer from "./SectionContainer";
import SectionDefault from "./SectionDefault";
import SectionDescription from "./SectionDescription";
import SectionHeader from "./SectionHeader";

const Section = Object.assign(SectionParent, {
  About: AboutSection,
  Contact: ContactSection,
  Container: SectionContainer,
  Default: SectionDefault,
  Description: SectionDescription,
  Header: SectionHeader,
  Portfolio: PortfolioSection,
});

export default Section;
