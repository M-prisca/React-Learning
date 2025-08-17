import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MyButton from "./components/Buttons/MyButton.jsx";
import TheButton from "./components/Buttons/TheButton.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyButton />
    <TheButton />
  </StrictMode>
);
