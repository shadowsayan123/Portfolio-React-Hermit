import React from "react";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import Project from "./component/body/Projects";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import "./App.css";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Navbar />
      <Project />
      <Footer />
    </StyledEngineProvider>
  );
}

export default App;
