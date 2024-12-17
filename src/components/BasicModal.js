import React, { useState } from 'react';
import { Modal, Box, Button, Typography, TextField, Stack } from '@mui/material';
import { MdEditSquare } from "react-icons/md";

function BasicModal({ formData, setFormData }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        localStorage.setItem("header_data", JSON.stringify(formData));
        setOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


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

    return (
        <div>
            <Button
                style={{ display: "flex", alignItems: "center" }}
                className='edit-btn no-print'
                variant="contained"
                onClick={handleOpen}
            >
                <>Edit</> <MdEditSquare style={{ marginTop: "-4px" }} />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
                        Edit Details
                    </Typography>

                    {/* Form Fields */}
                    <Stack spacing={2}>
                        <TextField
                            label="Name"
                            name="name"
                            variant="outlined"
                            fullWidth
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Job Title"
                            name="jobTitle"
                            variant="outlined"
                            fullWidth
                            value={formData.jobTitle}
                            onChange={handleChange}
                        />
                        <TextField
                            label="About"
                            name="about"
                            type="tel"
                            variant="outlined"
                            fullWidth
                            value={formData.about}
                            multiline
                            onChange={handleChange}
                        />

                    </Stack>

                    {/* Buttons */}
                    <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 3 }}>

                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}

export default BasicModal;
