import { createRoot } from "react-dom/client";
import App from "./pages/App.tsx";
import { initializeDB } from "@db";
import "./scss/index.scss";
import "virtual:uno.css";

initializeDB();

createRoot(document.getElementById("root")!).render(<App />);
