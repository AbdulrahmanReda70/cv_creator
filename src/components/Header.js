import React, { useEffect, useState } from "react";
import BasicModal from "./BasicModal";
import UploadImg, { } from "./UploadImg";
function Header() {
    const [src, setSrc] = useState(null);
    const [preview, setPreview] = useState(null);
    const [formData, setFormData] = useState(() => {
        if (localStorage.getItem("header_data")) {
            return JSON.parse(localStorage.getItem("header_data"));
        } else {
            return {
                name: "",
                jobTitle: "",
                about: "",
            };
        }
    }
    );


    return (
        <header>
            <div className="left-section">
                <BasicModal formData={formData} setFormData={setFormData} />
                <h1 className={formData.name === "" ? "placeholder" : null}>{formData.name || "Name"}</h1>
                <h2 className={formData.jobTitle === "" ? "placeholder" : null}>{formData.jobTitle || "Jop Title"}</h2>
                <div className="description">
                    <p className={formData.about === "" ? "placeholder" : null}>{formData.about || "About"}</p>
                </div>
            </div>

            <div className="right-section">
                <div className="header-img">
                    <UploadImg preview={preview} setPreview={setPreview} setSrc={setSrc} />
                </div>
            </div>
        </header>
    );
};

export default Header;
