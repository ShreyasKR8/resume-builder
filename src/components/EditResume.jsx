// import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import '../styles/EditResume.css'
import Education from "./Education";

export default function EditSection({ handleInputChange, formDetails, handleWebLinksChange, addWebsiteLink, removeWebsiteLink, handleEdFieldChange, addEdField, removeEdField }) {

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
                <h2 className="ResumeEditHeadings">Education</h2>
                <button type="button" onClick={addEdField}>➕</button>
                <Education handleEdFieldChange={handleEdFieldChange} formDetails={formDetails} removeEdField={removeEdField}/>
            </section>
        </section>
    );
}