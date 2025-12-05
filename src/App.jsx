import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./index.css";

function App(){
  return (
    <div>
      <Navbar />
      <main style={{paddingTop:8}}>
        <Home />
      </main>
      <Footer />
    </div>
  );
}
export default App;
