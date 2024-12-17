import React, { useState } from "react";
import { Modal, Box, Button, Typography, TextField, Stack, Checkbox } from "@mui/material";
import { MdAdd } from "react-icons/md";

function WorkExperienceModal({ addExperience }) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        company: "",
        client: "",
        duration: "",
        present: false,
        technologies: "",
        description: "",
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setFormData({
            company: "",
            client: "",
            duration: "",
            present: false,
            technologies: "",
            description: "",
        });
        setOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        addExperience(formData);
        handleClose();
    };

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <Button
                className="no-print"
                style={{ display: "flex", alignItems: "center" }}
                variant="contained"
                onClick={handleOpen}
            >
                Add Experience <MdAdd style={{ marginLeft: "8px" }} />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}

            >
                <Box sx={style}>
                    <Typography id="modal-title" variant="h6" sx={{ mb: 2 }}>
                        Add Work Experience
                    </Typography>
                    <Stack spacing={2}>
                        <TextField
                            label="Company Name"
                            name="company"
                            variant="outlined"
                            fullWidth
                            value={formData.company}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Client Name"
                            name="client"
                            variant="outlined"
                            fullWidth
                            value={formData.client}
                            onChange={handleChange}
                        />
                        <p style={{ marginBottom: "-15px" }}>Start Time </p>
                        <TextField
                            name="duration"
                            variant="outlined"
                            fullWidth
                            type="date"
                            value={formData.duration}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Technologies"
                            name="technologies"
                            variant="outlined"
                            fullWidth
                            value={formData.technologies}
                            onChange={handleChange}
                        />

                        <TextField
                            label="Description"
                            name="description"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={3}
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </Stack>
                    <p style={{ marginTop: "15px" }}>Are you still work there? </p>
                    <Checkbox name="present" onChange={handleChange} />
                    <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 3 }}>
                        <Button variant="outlined" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="contained" onClick={handleSave}>
                            Save
                        </Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}

export default WorkExperienceModal;
