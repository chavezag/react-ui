import { useState } from "react";
import { NavBar } from "./modules/ui/components/NavBar";
import { SideBar } from "./modules/ui/components/SideBar";
import { MainRouter } from "./routers/MainRouter";
import { BackdropFarinter } from "./modules/ui/components/BackdropFarinter";
import { ToastContainer } from "react-toastify";

import "./styles/index.scss";

function App() {
  const [loading, setloading] = useState(true);

  return (
    <div className="App">
      <ToastContainer position="top-right" />
      <BackdropFarinter loading={loading} close={() => setloading(false)} />
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <SideBar />
        <div className="base__container">
          <MainRouter />
        </div>
      </div>
    </div>
  );
}

export default App;
