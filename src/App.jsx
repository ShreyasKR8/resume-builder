import { useState, useEffect } from "react"
import './App.css'
import Resume from './components/Resume'
import EditSection from "./components/EditResume"
import storage from "./storage.js"

const educationObject = {
    school: "",
    degree: "",
    years: "",
    grade: ""
};

const formDetailsObject = {
    name: '',
    designation: '',
    email: '',
    phone: '',
    websiteLink: [''],
    education: [educationObject]
};

function App() {
    const [formDetails, setFormDetails] = useState(() => {
        const savedFormDetails = storage.loadDetails();
        if (savedFormDetails) {
            return savedFormDetails;
        } else {
            return formDetailsObject;
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

    function handleEdFieldChange(e, index) {
        const value = e.target.value;
        setFormDetails(prevDetails => {
            const updatedEd = [...prevDetails.education];
            updatedEd[index][e.target.id] = value;
            return {
                ...prevDetails,
                education: updatedEd
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

    function addEdField() {
        setFormDetails(prevDetails => ({
            ...prevDetails,
            education: [...prevDetails.education, educationObject]
        }));
    }

    function removeEdField(index) {
        setFormDetails(prevDetails => {
            const updatedEd = prevDetails.education;
            return {
                ...prevDetails,
                education: updatedEd.filter((_, i) => index !== i)
            };
        });
    }

    return (
        <section className="MainSection">
            <EditSection handleInputChange={handleInputChange} formDetails={formDetails}
                handleWebLinksChange={handleWebLinksChange} addWebsiteLink={addWebsiteLink}
                removeWebsiteLink={removeWebsiteLink}
                loadedValues={formDetails}
                handleEdFieldChange={handleEdFieldChange}
                addEdField={addEdField}
                removeEdField={removeEdField}
            />
            <section className="MainContent">
                <Resume formDetails={formDetails} />
            </section>
        </section>
    )
}

export default App
