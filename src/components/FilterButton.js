import React from 'react';
import Button from '@mui/material/Button';
import { color } from '@mui/system';

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
        backgroundColor: 'pink', // Set your desired background color
        color: 'black', // Set your desired text color
        ":hover": {backgroundColor: 'lightpink' },
        fontFamily: 'Helvetica, Sans-Serif'
      }}
      onClick={handleClick}
    >
      {type}
    </Button>
  );
}
