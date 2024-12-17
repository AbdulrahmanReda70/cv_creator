import React, { useEffect } from 'react';
import myData from "../config.json";
function Footer() {


    document.body.style = myData.general.backGroundColor;
    document.body.style = myData.general.fontType;



    document.querySelectorAll("h1").forEach((ele) => {
        ele.style.fontSize = myData.general.header_1;
    });
    document.querySelectorAll("h2").forEach((ele) => {
        ele.style.fontSize = myData.general.header_2;
    });
    document.querySelectorAll("h4").forEach((ele) => {
        ele.style.fontSize = myData.general.header_3;
    });



    useEffect(() => {
        document.querySelector(".left-section h1").style.fontSize = myData.sections.about.name.fontSize;
        document.querySelector(".left-section h1").style.color = myData.sections.about.name.color;

        document.querySelector(".left-section h2").style.fontSize = myData.sections.about.jopTitle.fontSize;
        document.querySelector(".left-section h2").style.color = myData.sections.about.jopTitle.color;

        document.querySelector(".description").style.fontSize = myData.sections.about.description.fontSize;
        document.querySelector(".description p").style.color = myData.sections.about.description.color;


        // 
        document.querySelectorAll(".contact-section p,.contact-item a").forEach((ele) => {
            ele.style.fontSize = myData.sections.contact.fontSize;
            ele.style.color = myData.sections.contact.color;
        });
        // 


        document.querySelectorAll(".main-layout h3").forEach((ele) => {
            ele.style.fontSize = myData.sections.mainLayout.header_1.fontSize;
            ele.style.color = myData.sections.mainLayout.header_1.color;
        });

        document.querySelectorAll(".main-layout h4").forEach((ele) => {
            ele.style.fontSize = myData.sections.mainLayout.header_2.fontSize;
            ele.style.color = myData.sections.mainLayout.header_2.color;
        });

        document.querySelectorAll(".main-layout p:not(.skill-name)").forEach((ele) => {
            ele.style.fontSize = myData.sections.mainLayout.workExText.fontSize;
            ele.style.color = myData.sections.mainLayout.workExText.color;
        });


        document.querySelectorAll(".skill-item p").forEach((ele) => {
            ele.style.fontSize = myData.sections.mainLayout.skillHeader.fontSize;
            ele.style.color = myData.sections.mainLayout.skillHeader.color;
        });
        document.querySelectorAll(".skill-item li").forEach((ele) => {
            ele.style.fontSize = myData.sections.mainLayout.skillText.fontSize;
            ele.style.color = myData.sections.mainLayout.skillText.color;
        });


    }, []);


    return (
        <div></div>
    );
}

export default Footer;