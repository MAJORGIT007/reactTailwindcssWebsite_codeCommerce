import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Developers from "./components/Developers";
import Footer from "./components/Footer";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Developers />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
