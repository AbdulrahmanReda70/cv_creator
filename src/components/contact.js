import React, { useState } from "react";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { FaStackOverflow } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import BasicModal from "./BasicModal";
import ContactModal from "./ContactModal";

function Contact() {
    const [formData, setFormData] = useState(() => {
        if (localStorage.getItem("contact_data")) {
            return JSON.parse(localStorage.getItem("contact_data"));
        } else {
            return {
                gmail: "",
                location: "",
                github: "",
                phone: "",
                linkedin: "",
                stackoverflow: ""
            };
        }
    }
    );
    return (
        <div className="contact-section">

            <div className="contact-row">
                <div className="contact-items">
                    <div className="contact-item">
                        <SiGmail style={{ width: "" }} />
                        <p className={formData.gmail === "" ? "placeholder" : null}>{formData.gmail || "Add Gmail"}</p>
                    </div>
                    <div className="contact-item">
                        <FaLocationDot style={{ width: "" }} />
                        <p className={formData.location === "" ? "placeholder" : null} href={formData.location}>{formData.location || "Add Location"}</p>
                    </div>
                    <div className="contact-item">
                        <FaGithub style={{ width: "" }} />
                        <a className={formData.github === "" ? "placeholder" : null} href={formData.github}>{formData.github || "Add Link"}</a>
                    </div>
                </div>

                <div className="contact-items">
                    <div className="contact-item">
                        <FaSquarePhone style={{ width: "" }} />
                        <p className={formData.phone === "" ? "placeholder" : null} href={formData.phone}>{formData.phone || "Add phone"}</p>
                    </div>
                    <div className="contact-item">
                        <FaLinkedin style={{ width: "" }} />
                        <a className={formData.linkedin === "" ? "placeholder" : null} href={formData.linkedin}>{formData.linkedin || "Add Link"}</a>
                    </div>
                    <div className="contact-item">
                        <FaStackOverflow style={{ width: "" }} />
                        <a className={formData.stackoverflow === "" ? "placeholder" : null} href={formData.stackoverflow}>{formData.stackoverflow || "Add Link"}</a>
                    </div>
                    <ContactModal formData={formData} setFormData={setFormData} />
                </div>
            </div>
        </div>
    );
}

export default Contact;
