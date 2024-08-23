import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function AddBook(props) {
    const [open, setOpen] = useState(false);
    const [todo, setTodo] = useState({Title: '', Author: '', Year: '', Isbn: '', Price: '',});
  
    const handleOpen = () => {
      setOpen(true);
    }
  
    const handleClose = () => {
      setOpen(false);
    }
  
    const handleSave = () => {
      props.addBooks(todo);
      handleClose();
    }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  return(
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Add book
      </Button>
     <Dialog open={open}>
       <DialogTitle>New book</DialogTitle>
       <DialogContent> 
         <TextField
            name="Title"
            value={todo.Title}
            onChange={inputChanged}
            margin="dense"
            label="Description"
            fullWidth
          /> 
         <TextField
           name="Author"
           value={todo.Author}
           onChange={inputChanged}
           margin="dense"
           label="Date"
           fullWidth
         /> 
         <TextField
           name="Year"
           value={todo.Year}
           onChange={inputChanged}
           margin="dense"
           label="Year"
           fullWidth
         />
         <TextField
           name="Isbn"
           value={todo.Isbn}
           onChange={inputChanged}
           margin="dense"
           label="Isbn"
           fullWidth
         /> 
         <TextField
           name="Price"
           value={todo.Price}
           onChange={inputChanged}
           margin="dense"
           label="Price"
           fullWidth
         /> 
      </DialogContent>
      <DialogActions>
         <Button color="primary" onClick={handleClose}>Cancel</Button>
         <Button color="primary" onClick={handleSave}>Save</Button>
      </DialogActions>
     </Dialog> 
    </>
  );
}

export default AddBook;