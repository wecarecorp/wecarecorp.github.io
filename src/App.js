import React from "react";
import ScrollToTop from "./components/ScrollToTop.js";
import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js";
import { Router } from "@reach/router";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import "./App.sass";

function App() {
  return (
    <>
      <div className="App">
        <div className="App__site">
          <Header />

          <Router primary="false">
            <ScrollToTop path="/">
              <Home path="/" />
              <Contact path="contato" />
            </ScrollToTop>
          </Router>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
