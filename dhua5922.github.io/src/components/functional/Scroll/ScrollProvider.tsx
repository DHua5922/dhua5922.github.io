import React, { useRef } from "react";
import ScrollContext from "./ScrollContext";
import { ScrollIdType } from "../../../types/project";
import { SCROLL_BEHAVIOR } from "../../../constants";

interface Props {
  children?: React.ReactNode;
}

function ScrollProvider({ children, ...props }: Props) {
  const aboutRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  function scrollTo(key: ScrollIdType) {
    const targetRefs = {
      about: aboutRef,
      portfolio: portfolioRef,
      contact: contactRef,
    };

    targetRefs[key].current?.scrollIntoView({ behavior: SCROLL_BEHAVIOR });
  }

  return (
    <ScrollContext.Provider
      value={{ aboutRef, portfolioRef, contactRef, scrollTo }}
      {...props}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export default ScrollProvider;
