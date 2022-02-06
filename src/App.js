import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import SectionMain from "./components/SectionMain";
import { GlobalStyles } from "./components/SectionMain";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <SectionMain />
      <Header />

     
    </div>
  );
}

export default App;
