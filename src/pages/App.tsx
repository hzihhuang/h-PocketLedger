import FloatButton from "@/components/FloatButton";
import NavBar from "@/components/NavBar";
import TabBar from "@/components/TabBar";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./home";
import ChartPage from "./chart";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <NavBar />
              <main className="app-main">
                <Routes>
                  <Route index element={<Navigate to="home" />} />
                  <Route path="home" index element={<HomePage />} />
                  <Route path="chart" element={<ChartPage />} />
                </Routes>
              </main>
              <FloatButton />
              <TabBar />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
