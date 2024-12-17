import React from "react";

const skills = [
    {
        name: "DSA",
        descriptions: [
            "Experienced in code development...",
            "Data structures, algorithms, and design patterns...",
            "Experience with large-scale systems..."
        ]
    },
    {
        name: "React",
        descriptions: [
            "Experienced in code development...",
            "Data structures, algorithms, and design patterns...",
        ]
    },
];

function ExperienceInsights() {
    const showSkills = () => skills.map((ele, index) => {
        return (
            <section className="experience-insights" key={index}>
                <h3>{ele.name}</h3>
                <ul>
                    {ele.descriptions.map((d, ind) => <li key={ind}>{d}</li>)}
                </ul>
            </section>
        );
    });
    return (
        showSkills()
    );
}

export default ExperienceInsights;
