import React from 'react';
import '../../App.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function BookContent() {
  return (
    <div className="BookContent">
      <h1>Book Content</h1>
      <Button className="Addnew" style={{ color: 'black', textTransform: 'none' }} endIcon={<AddIcon />}>
        Add New Page

        
      </Button>
    </div>
  );
}

export default BookContent;
