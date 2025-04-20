import ScrollParent from "./Scroll";
import ScrollContext from "./ScrollContext";
import ScrollProvider from "./ScrollProvider";

const Scroll = Object.assign(ScrollParent, {
  Context: ScrollContext,
  Provider: ScrollProvider,
});

export default Scroll;
