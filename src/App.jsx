import { Navigator, Sidebar } from "./layout/index";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useGlobalContext } from "./context/context";
import Footer from "./layout/Footer";

function App() {
  const { state } = useGlobalContext();

  return (
    <div className="App">
      <Navigator />
      <Sidebar isShowing={state.showSidebar} />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default App;
