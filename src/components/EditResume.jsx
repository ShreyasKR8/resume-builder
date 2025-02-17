import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import '../styles/EditResume.css'
import Education from "./Education";
import WorkExperience from "./WorkExperience"

export default function EditSection({ handleInputChange, formDetails, handleWebLinksChange, 
    addWebsiteLink, removeWebsiteLink, handleEdFieldChange, addEdField, removeEdField, handleExpFieldChange, addExpField, removeExpField }) {

    const [isEducationVisible, setIsEducationVisible] = useState(true);
    const [isExperienceVisible, setIsExperienceVisible] = useState(true);
    
    function toggleEducationVisibilty() {
        setIsEducationVisible(prev => !prev);
    }
    
    function toggleExperienceVisibilty() {
        setIsExperienceVisible(prev => !prev);
    }

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
                    <div className="SectionButtons">
                        <button type="button" onClick={addEdField}>➕</button>
                        <button type="button" onClick={toggleEducationVisibilty}>🔽</button>
                    </div>
                </div>
                {isEducationVisible && <Education handleEdFieldChange={handleEdFieldChange} formDetails={formDetails} removeEdField={removeEdField}/>}
            </section>
            <section className="ExpEditSection">
                <div className="ExpHeader">
                    <h2 className="ResumeEditHeadings">Work Experience</h2>
                    <div className="SectionButtons">
                        <button type="button" onClick={addExpField}>➕</button>
                        <button type="button" onClick={toggleExperienceVisibilty}>🔽</button>
                    </div>
                </div>
                {isExperienceVisible && <WorkExperience handleExpFieldChange={handleExpFieldChange} formDetails={formDetails} addExpField={addExpField} removeExpField={removeExpField}/>}
            </section>
        </section>
    );
}