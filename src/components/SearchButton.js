import React from 'react';
import Button from '@mui/material/Button';

export default function FilterButton({ type, onFilterButtonClick }) {
  const handleClick = () => {
    // Call the filter function with the type when the button is clicked
    onFilterButtonClick(type);
  };

  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: '15px',
        m: 2,
        backgroundColor: '#869F77', // Set your desired background color
        color: '#', // Set your desired text color
      }}
      onClick={handleClick}
    >
      {type}
    </Button>
  );
}
