// import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import '../styles/EditResume.css'
import Education from "./Education";
import WorkExperience from "./WorkExperience"

export default function EditSection({ handleInputChange, formDetails, handleWebLinksChange, 
    addWebsiteLink, removeWebsiteLink, handleEdFieldChange, addEdField, removeEdField, handleExpFieldChange, addExpField, removeExpField }) {

    return (
        <section className='EditSection'>
            <h2 className="ResumeEditHeadings">Personal Info</h2>
            <section className="PersonalInfoEditSection">
                <PersonalInfo handleInputChange={handleInputChange} loadedValues={formDetails}/>
                <div className="WebsiteLinksDiv">
                    <div className="WebLabelDiv">
                        <label>Website Links:</label>
                        <button type="button" onClick={addWebsiteLink}>➕</button>
                    </div>
                    {formDetails.websiteLink.map((link, index) => (
                        <div key={index} className="WebInputFields">
                            <input type="text" value={link} onChange={(e) => handleWebLinksChange(e, index)}/>
                            {index !== 0 && <button type='button' onClick={() => removeWebsiteLink(index)}>❌</button>}
                        </div>
                    ))}
                </div>
            </section>
            <section className="EducationEditSection">
                <div className="EducationHeader">
                    <h2 className="ResumeEditHeadings">Education</h2>
                    <button type="button" onClick={addEdField}>➕</button>
                </div>
                <Education handleEdFieldChange={handleEdFieldChange} formDetails={formDetails} removeEdField={removeEdField}/>
            </section>
            <section className="ExpEditSection">
                <div className="ExpHeader">
                    <h2 className="ResumeEditHeadings">Work Experience</h2>
                    <button type="button" onClick={addExpField}>➕</button>
                </div>
                <WorkExperience handleExpFieldChange={handleExpFieldChange} formDetails={formDetails} addExpField={addExpField} removeExpField={removeExpField}/>
            </section>
        </section>
    );
}