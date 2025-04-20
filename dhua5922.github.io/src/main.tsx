import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Scroll from "./components/functional/Scroll";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Scroll.Provider>
      <App />
    </Scroll.Provider>
  </StrictMode>
);
