import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function DummyContent() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <h2>Contact Page</h2>
      <p>This is 1</p>
      <Button onClick={handleOpen}>Open modal</Button>

      <button
        id="submitBtn"
        class="btn primary"
        data-tracking="button123"
        aria-label="Submit Form"
        onclick="console.log('Clicked!')"
      >
        Submit
      </button>

      <input
        type="text"
        id="username"
        name="username"
        placeholder="Enter your username"
        value="TestUser"
        data-tracking="input456"
        required
      />

      <textarea
        id="comments"
        name="comments"
        rows="5"
        cols="30"
        placeholder="Write your comments here..."
        data-tracking="textarea789"
      >
        Default text
      </textarea>

      <li
        title="This is a list item"
        id="item1"
        class="list-item"
        data-tracking="li101"
      >
        List Item
      </li>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This is a test Modal Content.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default DummyContent;