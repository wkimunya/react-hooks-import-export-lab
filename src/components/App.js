import React from "react";
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import About from '../components/About';
import {username, city, image} from '../data/user';


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
