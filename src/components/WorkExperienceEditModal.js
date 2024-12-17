import React, { useState } from "react";
import { Modal, Box, Button, Typography, TextField, Stack, Checkbox } from "@mui/material";

function WorkExperienceEditModal({ workExperiences, setWorkExperiences, index }) {
    const [open, setOpen] = useState(false);



    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        localStorage.setItem("work_experiences", JSON.stringify(workExperiences));
        setOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWorkExperiences((prevExperiences) =>
            prevExperiences.map((exp, i) =>
                i === index ? { ...exp, [name]: value } : exp
            ));

    };

    const handleSave = () => {

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
            <button
                className="no-print"
                style={{ display: "flex", alignItems: "center", padding: "2px" }}
                onClick={handleOpen}
            >
                Edit
            </button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={style}>
                    <Typography className="no-print" id="modal-title" variant="h6" sx={{ mb: 2 }}>
                        Add Work Experience
                    </Typography>
                    <Stack spacing={2}>
                        <TextField
                            label="Company Name"
                            name="company"
                            variant="outlined"
                            fullWidth
                            value={workExperiences[index].company}
                            onChange={handleChange}
                        />

                        <TextField
                            label="Client Name"
                            name="client"
                            variant="outlined"
                            fullWidth
                            value={workExperiences[index].client}
                            onChange={handleChange}
                        />
                        <p style={{ marginBottom: "-15px" }}>Start Time </p>
                        <TextField
                            name="duration"
                            variant="outlined"
                            fullWidth
                            type="date"
                            value={workExperiences[index].duration}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Technologies"
                            name="technologies"
                            variant="outlined"
                            fullWidth
                            value={workExperiences[index].technologies}
                            onChange={handleChange}
                        />

                        <TextField
                            label="Description"
                            name="description"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={3}
                            value={workExperiences[index].description}
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

export default WorkExperienceEditModal;
