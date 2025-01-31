import { useState } from "react"
import './App.css'
import Resume from './components/Resume'
import EditSection from "./components/EditResume"

function App() {
    const [formDetails, setFormDetails] = useState({
        name: '',
        designation: '',
        email: '',
        phone: '',
        websiteLink: [''],
    });

    function handleInputChange(e) {
        setFormDetails({
            ...formDetails,
            [e.target.id]: e.target.value
        });
        }
        
    function handleWebLinksChange(e, index) {
        const value = e.target.value;
        setFormDetails(prevDetails => {
            const updatedLinks = [...prevDetails.websiteLink];
            updatedLinks[index] = value;
            return {
                ...prevDetails,
                websiteLink: updatedLinks
            }; 
        });
    }
    
    function addWebsiteLink() {
        setFormDetails(prevDetails => ({
            ...prevDetails,
            websiteLink: [...prevDetails.websiteLink, ""]  
        }));
    }

    return (
        <section className="MainSection">
            <EditSection handleInputChange={handleInputChange} formDetails={formDetails} handleWebLinksChange={handleWebLinksChange} addWebsiteLink={addWebsiteLink}/>
            <section className="MainContent">
                <Resume formDetails={formDetails} />
            </section>
        </section>
    )
}

export default App
