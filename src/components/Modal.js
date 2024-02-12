import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';


// Modal component
function CustomModal({ open, onClose }) {

  // Function to handle closing the modal
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div>
        <h2 id="modal-title">Modal Title</h2>
        <p id="modal-description">Modal Content</p>
        <Button onClick={handleClose}>Close Modal</Button>
      </div>
    </Modal>
  );
}

CustomModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CustomModal;
