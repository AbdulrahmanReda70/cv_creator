import React, { useState } from "react";
import { Modal, Box, Button, Typography, TextField, Stack } from "@mui/material";

function SkillEditModal({ skills, setSkills, index }) {
    const [open, setOpen] = useState(false);
    console.log(skills);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        localStorage.setItem("work_skills", JSON.stringify(skills));
        setOpen(false);
    };


    const handleChange = (e, ind) => {
        const { name, value } = e.target;
        if (name === "descriptions") {
            const updatedDescriptions = [...skills[index].descriptions];
            updatedDescriptions[ind] = value;
            setSkills((prevSkills) =>
                prevSkills.map((skill, i) =>
                    i === index ? { ...skill, descriptions: updatedDescriptions } : skill
                ));
        } else {
            setSkills((prevSkills) =>
                prevSkills.map((skill, i) =>
                    i === index ? { ...skill, [name]: value } : skill
                ));
        }
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
                    <Typography id="modal-title" variant="h6" sx={{ mb: 2 }}>
                        Add Work Experience
                    </Typography>
                    <Stack spacing={2}>
                        <TextField
                            label="Skill Name"
                            name="name"
                            variant="outlined"
                            fullWidth
                            value={skills[index].name}
                            onChange={handleChange}
                        />

                        {
                            skills[index].descriptions.map((desc, indexx) => {
                                return (
                                    <TextField
                                        label="Description"
                                        name="descriptions"
                                        variant="outlined"
                                        fullWidth
                                        value={skills[index].descriptions[indexx]}
                                        onChange={(e) => handleChange(e, indexx)}
                                    />
                                );
                            })
                        }

                    </Stack>
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

export default SkillEditModal;
