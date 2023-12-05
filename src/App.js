import React, { useState } from 'react';
import NavBar from './components/NavBar/navbar';
import MediaGrid from './components/MediaGrid/MediaGrid';
import './App.css';

function App() {
  const [filterType, setFilterType] = useState('');

  return (
    <div>
      <NavBar setFilterType={setFilterType} />
      <MediaGrid filterType={filterType} />
    </div>
  );
}

export default App;
