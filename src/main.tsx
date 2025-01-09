import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./pages/App.tsx";
import { store } from "@/utils/store"; // 引入 store
import { initializeDB } from "@db";
import "./scss/index.scss";
import "virtual:uno.css";

initializeDB();

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    {/* 提供 Redux store */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
