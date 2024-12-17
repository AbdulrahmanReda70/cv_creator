import { useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar-edit";

function UploadImg({ preview, setPreview, setSrc }) {
    const [isOpen, setIsOpen] = useState(false);
    const is_max_440 = useMediaQuery("@media (max-width: 440px)");
    useEffect(() => {
        const savedImage = localStorage.getItem("croppedImage");
        if (savedImage) {
            setPreview(savedImage);
        }
    }, [setPreview]);

    function onClose() {
        setPreview(null);
    }

    function onCrop(view) {
        setPreview(view);
    }

    function saveCroppedImage() {
        if (preview) {
            localStorage.setItem("croppedImage", preview);
            setSrc(preview);
            setIsOpen(false);
        }
    }

    useEffect(() => {
        console.log(preview);
    }, [preview]);

    return (
        <div className="upload-container">
            {preview && (
                <img className="cropped-preview" src={preview} alt="Cropped Preview" />
            )}
            <button className="upload-button no-print" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Close Editor" : "Edit Image"}
            </button>
            {isOpen && (
                <div className="avatar-editor">
                    <Avatar
                        width={is_max_440 ? 260 : 400}
                        height={300}
                        onCrop={onCrop}
                        onClose={onClose}
                    // src={imgSrc} // Optional: Add if you want to load an existing source
                    />
                    <button className="save-button no-print" onClick={saveCroppedImage}>
                        Save Image
                    </button>
                </div>
            )}
        </div>
    );
}

export default UploadImg;
