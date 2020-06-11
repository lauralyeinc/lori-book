import React from 'react';
import './App.css';

import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";
import AppRouter from "./AppRouter.js"; 

function App() {
  return (
    <div className='App'>

      <div className="Nav-Area">
        <Navigation />
      </div>

      <div className="Main-Area">
        <AppRouter />
      </div>

      <div className="Footer-Area">
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
