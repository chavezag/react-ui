import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";
import { NavBar } from "./modules/ui/components/NavBar";
import "./styles/index.scss";
import { SideBar } from "./modules/ui/components/SideBar";
import { MainRouter } from "./routers/MainRouter";
import { BackdropFarinter } from "./modules/ui/components/BackdropFarinter";

function App() {
  const [loading, setloading] = useState(true);

  return (
    <div className="App">
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
