import React from 'react';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Context from './components/context/Context';
import './styles/style.css'

function App() {
  return (
    <div className="App">
     {/* ade is alive */}
     <Header />
     <Context /> 
     <Footer />
    </div>
  );
}

export default App;
