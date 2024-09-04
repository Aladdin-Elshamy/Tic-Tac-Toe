import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@/index.css";
import SquareContextProvider from "@/context/SquareContextProvider.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <SquareContextProvider>
            <App />
        </SquareContextProvider>
    </StrictMode>
);
