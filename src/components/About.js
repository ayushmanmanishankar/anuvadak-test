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
      <h2>About Page</h2>
      <p>This is 1</p>
      <p>This is 2</p>
      <div class="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3  3xl:grid-cols-4 gap-5">
        <a href="/hi/directory/contact-directory/state-uts/an">
          <div class="w-full h-full flex items-center rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] p-3 group border-2 bor">
            <div class="flex items-center flex-row gap-3">
              <div class="min-w-[3rem] h-[3rem] max-w-[3rem] bg-[#DAE4FF] rounded-full p-2 flex items-center justify-center dark:bg-transparent ring-2 ring-white">
                <p class="content-dark-text-clickable" anuvadak-no-localization="true">AN</p>
              </div>
              <div>
                <p class="font-medium leading-5 group-hover:font-semibold content-dark-text-clickable">Andaman and Nicobar Islands</p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <Button onClick={handleOpen}>Open modal</Button>
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