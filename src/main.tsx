import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/globals.css";
import { Toaster } from "react-hot-toast";

// Restore theme before React renders
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>

        <App />

        <Toaster
            position="top-right"
            toastOptions={{
                duration: 3000,
            }}
        />

    </StrictMode>
);