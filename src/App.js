import React, { useEffect, useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";
import "./index.css";
import Contact from "./components/contact";
import myData from '../src/config.json';
import Footer from "./components/Footer";

function App() {

  const contentRef = useRef();
  const handleDownloadPDF = () => {
    // Select all elements with the "no-print" class
    const noPrintElements = document.querySelectorAll(".no-print");
    const appEle = document.querySelector(".app");

    // Hide all "no-print" elements
    noPrintElements.forEach((element) => {
      element.style.display = "none";
    });
    appEle.style.margin = "0 auto";
    const element = contentRef.current;

    const options = {
      margin: 0,
      filename: "fullscreen-red-background.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },  // Increased scale for better resolution
      jsPDF: {
        unit: "mm",  // Use 'mm' for millimeters
        format: "a4",  // Predefined format like 'a4'
        orientation: "portrait",
      },
    };

    // Generate the PDF
    html2pdf()
      .set(options)
      .from(element)
      .save()
      .then(() => {
        // Restore all "no-print" elements
        noPrintElements.forEach((element) => {
          element.style.display = "";
        });
        appEle.style.margin = "20px auto";
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
        // Restore "no-print" elements in case of error
        noPrintElements.forEach((element) => {
          element.style.display = "";
        });
      });
  };

  return (
    <div className="app" ref={contentRef}>
      <Header />
      <Contact />
      <MainLayout />
      <Footer />

      <button style={{
        padding: "10px 20px",  // Button padding
        fontSize: "16px",       // Font size for better readability
        fontWeight: "bold",     // Make text bold
        backgroundColor: "#20C997",  // Green background color
        color: "white",         // White text color
        border: "none",         // No border
        marginLeft: "20px",
        marginBottom: "10px",
        borderRadius: "5px",    // Rounded corners
        cursor: "pointer",      // Change cursor to pointer on hover
        transition: "background-color 0.3s",  // Smooth transition for hover effect
      }} className="no-print" onClick={handleDownloadPDF}>
        Download PDF
      </button>
    </div>
  );


}

export default App;
