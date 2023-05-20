import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Clearify from "./components/Clearify/Clearify.js";
import ImageUpload from "./components/ImageUpload/ImageUpload";
import "./index.css";
import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import About from "./components/About/About";
import { Nav } from "react-bootstrap";
import Technology from "./components/Technology/Technology";


const App = () => {
  return (
    <Switch>


<Route path="/about">
        <About>
        </About>
      </Route>
      <Route exact path="/">
        <Home />
      </Route>

      {/* <Route path="/about">
        <About />
      </Route> */}

      <Route path="/service">
        <Service>
          {/* <ImageUpload></ImageUpload> */}
        
        </Service>
      </Route>

      <Route path="/technology">
       <Technology></Technology>
      </Route>

     
      <Route path="/upload">
       <ImageUpload></ImageUpload>
      </Route>


      <Route>
        
        <Clearify></Clearify>
      </Route>
    </Switch>
  );
};

export default App;