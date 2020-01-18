import React from 'react';
import logo from './logo.svg';
import './App.scss';
import MovieCard from './containers/MovieCard.js'

import ParentComponent from './containers/ParentComponent.js'



function App() {
  return (
    <div className="App">
      <ParentComponent/>
    
    </div>
  );
}

export default App;
