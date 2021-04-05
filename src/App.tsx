import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Quotes from './components/Quotes';

const App: React.FC = () => {

  return(
    <div className="app">
    <Navbar />
    <Quotes />

    </div>
  )

}

export default App;
