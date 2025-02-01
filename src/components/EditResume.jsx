// import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import '../styles/EditResume.css'

export default function EditSection({ handleInputChange, formDetails, handleWebLinksChange, addWebsiteLink, removeWebsiteLink }) {

    return (
        <section className='EditSection'>
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
    );
}