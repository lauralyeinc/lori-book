import React from 'react';
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";
import AppRouter from "./AppRouter.js"; 

import styled from "styled-components"; 

function App() {
  return (
    <Div className='App'>

      <div className="Nav-Area">
        <Navigation />
      </div>

      <MainDiv className="Main-Area">
        <AppRouter />
      </MainDiv>

      <div className="Footer-Area">
        <Footer />
      </div>
      
    </Div>
  );
}

export default App;

const Div = styled.div`
width: 85%;
margin: auto; 
`

const MainDiv = styled.div`
padding: 5rem; 
`
