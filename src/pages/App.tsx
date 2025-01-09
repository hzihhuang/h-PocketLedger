import FloatButton from "@/components/FloatButton";
import NavBar from "@/components/NavBar";
import TabBar from "@/components/TabBar";

function App() {
  return (
    <>
      <NavBar />
      <main className="app-main">
        <img
          className="h-[200vh] w-full block"
          src="https://picsum.photos/430/1800"
          alt=""
        />
      </main>
      <FloatButton />
      <TabBar />
    </>
  );
}

export default App;
