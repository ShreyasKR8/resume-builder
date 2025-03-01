import { useState, useEffect } from "react"
import './App.css'
import Resume from './components/Resume'
import EditSection from "./components/EditResume"
import storage from "./storage.js"
import data from "./data.js"

const educationObject = {
    school: "",
    degree: "",
    years: "",
    grade: ""
};

const experienceObject = {
    role: "",
    company: "",
    workYears: "",
    location: "",
    achievements: ""
}

const projectObject = {
    title: "",
    githubLink: "",
    description: ""
}

const certificationObject = {
    title: "",
    courseProvider: "",
    certLink: ""
}

const formDetailsObject = {
    name: 'Joseph Cooper',
    designation: 'NASA Pilot',
    email: 'coop08@gmail.com',
    phone: '84729XX380',
    websiteLink: data.websiteLinks,
    education: data.education,
    experience: data.experience,
    projects: data.projects,
    skills: "C,C++,JavaScript,SQL,Git,HTML, CSS,Problem solving",
    certifications: data.certifications,
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

    function handleExpFieldChange(e, index) {
        const value = e.target.value;
        setFormDetails(prevDetails => {
            const updatedExp = [...prevDetails.experience];
            updatedExp[index][e.target.id] = value;
            return {
                ...prevDetails,
                experience: updatedExp
            };
        });
    }

    function addExpField() {
        setFormDetails(prevDetails => ({
            ...prevDetails,
            experience: [...prevDetails.experience, experienceObject]
        }));
    }
    
    function removeExpField(index) {
        setFormDetails(prevDetails => {
            const updatedExp = prevDetails.experience;
            return {
                ...prevDetails,
                experience: updatedExp.filter((_, i) => index !== i)
            };
        });
    }

    function addProjectField() {
        setFormDetails(prevDetails => ({
            ...prevDetails,
            projects: [...prevDetails.projects, projectObject]
        }));
    }
    
    function removeProjectField(index) {
        setFormDetails(prevDetails => {
            const updatedProjects = prevDetails.projects;
            return {
                ...prevDetails,
                projects: updatedProjects.filter((_, i) => index !== i)
            };
        });
    }

    function handleProjectFieldChange(e, index) {
        const value = e.target.value;
        setFormDetails(prevDetails => {
            const updatedProjects = [...prevDetails.projects];
            updatedProjects[index][e.target.id] = value;
            return {
                ...prevDetails,
                projects: updatedProjects
            };
        });
    }

    function addCertsField() {
        setFormDetails(prevDetails => ({
            ...prevDetails,
            certifications: [...prevDetails.certifications, certificationObject]
        }));
    }
    
    function removeCertsField(index) {
        setFormDetails(prevDetails => {
            const updatedCerts = prevDetails.certifications;
            return {
                ...prevDetails,
                certifications: updatedCerts.filter((_, i) => index !== i)
            };
        });
    }

    function handleCertsFieldChange(e, index) {
        const value = e.target.value;
        setFormDetails(prevDetails => {
            const updatedCerts = [...prevDetails.certifications];
            updatedCerts[index][e.target.id] = value;
            return {
                ...prevDetails,
                certifications: updatedCerts
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
                handleExpFieldChange={handleExpFieldChange}
                addExpField={addExpField}
                removeExpField={removeExpField}
                handleProjectFieldChange={handleProjectFieldChange}
                addProjectField={addProjectField}
                removeProjectField={removeProjectField}
                addCertField={addCertsField}
                removeCertField={removeCertsField}
                handleCertFieldChange={handleCertsFieldChange}
            />
            <section className="MainContent">
                <Resume formDetails={formDetails} />
            </section>
        </section>
    )
}

export default App
