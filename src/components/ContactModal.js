import React, { useState } from 'react';
import { Modal, Box, Button, Typography, TextField, Stack } from '@mui/material';
import { MdEditSquare } from "react-icons/md";

function ContactModal({ formData, setFormData }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        localStorage.setItem("contact_data", JSON.stringify(formData));
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
                            label="Gmail"
                            name="gmail"
                            type="email"
                            variant="outlined"
                            fullWidth
                            value={formData.gmail}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Location"
                            name="location"
                            variant="outlined"
                            fullWidth
                            value={formData.location}
                            onChange={handleChange}
                        />
                        <TextField
                            label="GitHub"
                            name="github"
                            variant="outlined"
                            fullWidth
                            value={formData.github}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Phone"
                            name="phone"
                            type="tel"
                            variant="outlined"
                            fullWidth
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <TextField
                            label="LinkedIn"
                            name="linkedin"
                            variant="outlined"
                            fullWidth
                            value={formData.linkedin}
                            onChange={handleChange}
                        />
                        <TextField
                            label="StackOverFlow"
                            name="stackoverflow"
                            variant="outlined"
                            fullWidth
                            value={formData.stackoverflow}
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

export default ContactModal;
