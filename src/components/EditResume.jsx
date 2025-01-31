// import { useState } from "react";
import PersonalInfo from "./PersonalInfo";

export default function EditSection({ handleInputChange, formDetails, handleWebLinksChange, addWebsiteLink}) {

    return (
        <section className='EditSection'>
            <PersonalInfo handleInputChange={handleInputChange}/>
            <label>Website Links:</label>
            {formDetails.websiteLink.map((link, index) => (
                <div key={index}>
                    <input type="text" value={link} onChange={(e) => handleWebLinksChange(e, index)}/>
                    <button type="button" onClick={addWebsiteLink}>➕</button>
                </div>
            )
            )}
        </section>
    );
}