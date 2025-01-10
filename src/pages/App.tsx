import Card from "@/components/Card";
import FloatButton from "@/components/FloatButton";
import NavBar from "@/components/NavBar";
import TabBar from "@/components/TabBar";

function App() {
  return (
    <>
      <NavBar />
      <main className="app-main">
        <Card>
          <img
            className="h-300 w-full block"
            src="https://picsum.photos/200"
            alt=""
          />
        </Card>
        <Card>
          <img
            className="h-300 w-full block"
            src="https://picsum.photos/200"
            alt=""
          />
        </Card>
        <Card>
          <img
            className="h-300 w-full block"
            src="https://picsum.photos/200"
            alt=""
          />
        </Card>
      </main>
      <FloatButton />
      <TabBar />
    </>
  );
}

export default App;
