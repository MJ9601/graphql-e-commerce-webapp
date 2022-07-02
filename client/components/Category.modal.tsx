import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};

const Categorymodal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            New Category
          </Typography>
          <div className="py-3 mt-3">
            <form action="" className="w-full space-y-4">
              <label htmlFor="" className="label">
                Name:
                <input type="text" className="input" />
              </label>
              <input type="submit" value="submit" className="submitButton" />
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Categorymodal;
