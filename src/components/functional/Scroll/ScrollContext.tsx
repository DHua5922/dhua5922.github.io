import { createContext } from "react";
import { ScrollIdType } from "../../../types/project";

interface ScrollContextType {
  aboutRef: React.RefObject<HTMLElement | null>;
  portfolioRef: React.RefObject<HTMLElement | null>;
  contactRef: React.RefObject<HTMLElement | null>;
  scrollTo: (key: ScrollIdType) => void;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export default ScrollContext;
