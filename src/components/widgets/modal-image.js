import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";

export default function ModalImage({ image, open, handleClose }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "100vh",
    width: '100%',
    // color:'common.white'
    // //   width: 400,
    bgcolor: 'background.paper',
    //   boxShadow: 24,
      // p: 4,
  };
  return (
    <Box>
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
          <>
        <Fade in={open}>
          <Box sx={style} >

            <Image
              // zIndex='drawer'
              src={image.url}
              width={image.width}
              height={image.height}
              layout="fill"
              objectFit="contain"
              />
          </Box>
        </Fade>
        <IconButton
          // color="text.primary"
          sx={{ position: "absolute", top: 0, right: 0 }}
          onClick={handleClose}
          >
          <CloseIcon />
        </IconButton>
          </>
      </Modal>
    </Box>
  );
}
