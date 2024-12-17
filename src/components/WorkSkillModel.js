import React, { useRef, useState } from "react";
import { Modal, Box, Button, Typography, TextField, Stack } from "@mui/material";
import { MdAdd } from "react-icons/md";

function WorkSkillModel({ addSkill }) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        descriptions: [""], // Start with one description
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setFormData({
            name: "",
            descriptions: [""],
        });
        setOpen(false);
    };

    const handleChange = (e, index = 0) => {
        const { name, value } = e.target;
        if (name === "descriptions") {
            const updatedDescriptions = [...formData.descriptions];
            updatedDescriptions[index] = value;
            setFormData({ ...formData, descriptions: updatedDescriptions });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSave = () => {
        addSkill(formData);
        handleClose();
    };

    const handleAddDescription = () => {
        setFormData({
            ...formData,
            descriptions: [...formData.descriptions, ""],
        });
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
                Add Skill <MdAdd style={{ marginLeft: "8px" }} />
            </Button>
            <Modal open={open} onClose={handleClose}>
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
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {formData.descriptions.map((description, index) => (
                            <TextField
                                key={index}
                                label={`Description ${index + 1}`}
                                name="descriptions"
                                variant="outlined"
                                fullWidth
                                multiline
                                value={description}
                                onChange={(e) => handleChange(e, index)}
                            />
                        ))}
                    </Stack>
                    <Button
                        variant="text"
                        onClick={handleAddDescription}
                        style={{ marginTop: "16px" }}
                    >
                        Add More Description
                    </Button>
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

export default WorkSkillModel;
