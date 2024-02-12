import React, { useState } from 'react';
import DetailedCard from './components/DetailedCard'
import NavBar from './components/NavBar/navbar';
import MediaGrid from './components/MediaGrid/MediaGrid';
import Modal from './components/Modal'; // Import your modal component
import './App.css';

function App() {

  window.onload = function() {
    window.alert("This site is under construction, but feel free to look around!");
};

  const [filterType, setFilterType] = useState('');
  const [showModal, setShowModal] = useState(false); // Initialize to false

  const handleModalClose = () => {
    setShowModal(false); // Close the modal when the close button is clicked
  };

  const handleFilterButtonClick = (type) => {
    setFilterType(type);
    setShowModal(false); // Close the modal when a filter button is clicked
  };

  return (
    <div>
      <NavBar setFilterType={setFilterType} />
      <MediaGrid filterType={filterType} />
      {/* Render the modal if showModal state is true */}
      {showModal && <Modal onClose={handleModalClose} />}
    </div>
  );
}

export default App;
