import React, { useEffect, useState } from 'react';
import WorkExperienceModal from './WorkExperienceModal';
import WorkExperienceEditModal from './WorkExperienceEditModal';
import WorkSkillModel from './WorkSkillModel';
import { GoDotFill } from "react-icons/go";
import SkillEditModal from './SkillEditModal';


function MainLayout() {
    const [workExperiences, setWorkExperiences] = useState(() => {
        const savedData = localStorage.getItem("work_experiences");
        return savedData ? JSON.parse(savedData) : [];
    });

    const [skills, setSkills] = useState(() => {
        const savedData = localStorage.getItem("work_skills");
        return savedData ? JSON.parse(savedData) : [];
    });



    const addExperience = (newExperience) => {
        const updatedExperiences = [...workExperiences, newExperience];
        setWorkExperiences(updatedExperiences);
        localStorage.setItem("work_experiences", JSON.stringify(updatedExperiences));
    };

    const addSkill = (newSkill) => {
        const updatedSkills = [...skills, newSkill];
        localStorage.setItem("work_skills", JSON.stringify(updatedSkills));
        setSkills(updatedSkills);
    };

    useEffect(() => {
        if (skills.length !== 0) {
            console.log(skills);

            setTimeout(() => {
                localStorage.setItem("work_skills", JSON.stringify(skills));
            }, 1000);
        }
        console.log(skills);

    }, [skills]);

    function handleDeleteSkill(index) {
        let conf = window.confirm("Are you sure you want to delete this skill?");
        if (conf) {
            setSkills((prevSkills) => prevSkills.filter((_, ind) => ind !== index));
            if (skills.length === 1) {
                setTimeout(() => {
                    localStorage.removeItem("work_skills");
                }, 1000);
            }
        }
    }

    return (
        <div className='main-layout'>
            <div className='left'>
                <section className="work-experience">
                    <h3>Work Experience</h3>
                    {workExperiences.length > 0 ? (
                        workExperiences.map((exp, index) => (
                            <div className="experience-item" key={index}>
                                <h4>{exp.company}</h4>
                                <b>Client:</b> <p>{exp.client}</p>
                                <p className='startTime'>{exp.duration}</p>
                                {exp.present && <p style={{ color: "#009688" }}>present</p>}
                                <b>Technologies</b>
                                <p>{exp.technologies}</p>
                                <div>
                                    <b style={{ color: "#009688" }}>Description</b>
                                    <div className='description'>
                                        <div>
                                            <GoDotFill style={{ marginTop: "4px", width: "12px", minWidth: "10px", minHeight: "10px", color: "#009688" }} />
                                        </div>
                                        <p>{exp.description}</p>
                                    </div>
                                </div>
                                <WorkExperienceEditModal workExperiences={workExperiences} index={index} setWorkExperiences={setWorkExperiences} />
                            </div>
                        ))
                    ) : (
                        <p>No work experience added yet.</p>
                    )}
                    <WorkExperienceModal addExperience={addExperience} />
                </section>
            </div>
            <div className='right'>
                <section className="experience-insights">
                    <h3>Experience Insights</h3>
                    {skills.map((skill, index) => (
                        <div className='skill-item' key={index}>
                            <p className='skill-name'>{skill.name}</p>
                            <ul>
                                {skill.descriptions.map((des, index) => {
                                    return (
                                        <div style={{ display: "flex", marginTop: "4px", columnGap: "3px" }}>
                                            {des && <GoDotFill style={{ marginTop: "4px", width: "12px", minWidth: "10px", minHeight: "10px", color: "#009688" }} />}
                                            <li sty className='description-item'>{des}</li>
                                        </div>
                                    );
                                })}
                            </ul>
                            {skill && (

                                <div style={{ display: "flex", columnGap: "10px" }}>
                                    <SkillEditModal setSkills={setSkills} skills={skills} index={index} />
                                    <button className="no-print" onClick={() => handleDeleteSkill(index)}>Delete</button>
                                </div>
                            )}
                        </div>
                    ))}
                    <WorkSkillModel addSkill={addSkill} skills={skills} />
                </section>
            </div>
        </div>
    );
}

export default MainLayout;
