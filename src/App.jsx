import { useState, useEffect } from "react"
import './App.css'
import Resume from './components/Resume'
import EditSection from "./components/EditResume"
import storage from "./storage.js"

function App() {
    const [formDetails, setFormDetails] = useState(() => {
        const savedFormDetails = storage.loadDetails();
        if(savedFormDetails) {
            return savedFormDetails;
        } else {
            return {
                    name: '',
                    designation: '',
                    email: '',
                    phone: '',
                    websiteLink: [''],
                }
        }
        });

    useEffect(() => {
        storage.saveDetails(formDetails);
    }, [formDetails]);

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

    function removeWebsiteLink(index) {
        setFormDetails(prevDetails => {
            const updatedLinks = prevDetails.websiteLink;
            return {
                ...prevDetails,
                websiteLink: updatedLinks.filter((_, i) => i !== index)
            };
        })
    }

    return (
        <section className="MainSection">
            <EditSection handleInputChange={handleInputChange} formDetails={formDetails}
                handleWebLinksChange={handleWebLinksChange} addWebsiteLink={addWebsiteLink}
                removeWebsiteLink={removeWebsiteLink}
                loadedValues={formDetails}
            />
            <section className="MainContent">
                <Resume formDetails={formDetails} />
            </section>
        </section>
    )
}

export default App
