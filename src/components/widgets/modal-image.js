import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Image from 'next/image';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
// //   width: 400,
//   bgcolor: 'background.paper',
//   boxShadow: 24,
//   p: 4,
};

export default function ModalImage({image, open, handleOpen, handleClose}) {
 
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Image src={image.url} width={700} height={700} objectFit='contain' />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
