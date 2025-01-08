import { createRoot } from "react-dom/client";
import "./scss/index.scss";
import App from "./pages/App.tsx";
import { initializeDB } from "@db";

initializeDB();

createRoot(document.getElementById("root")!).render(<App />);
