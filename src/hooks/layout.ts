import { useContext } from "react";
import ScrollContext from "../components/functional/Scroll/ScrollContext";

function useScroll() {
  const context = useContext(ScrollContext);
  if (!context) throw new Error("useScroll must be used within ScrollProvider");
  return context;
}

export { useScroll };
