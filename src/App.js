import React from "react";
import "./App.scss";

import { Navbar, Cursor } from "./components";
import { About, Header, Footer, Work, Skills } from "./container";
function App() {
  return (
    <div className="app ">
      <Cursor />
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
