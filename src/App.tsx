import React from 'react';
import './App.scss';

import {Container} from "reactstrap"

import FormComp from "./comp/FormComp"
import GifGrid from "./comp/GifGrid"




function App() {
  return (
    <div className="App">
      <Container className="themed-container" fluid="sm">
        <FormComp/>
        <GifGrid />
      </Container>
    </div>
  );
}

export default App;
