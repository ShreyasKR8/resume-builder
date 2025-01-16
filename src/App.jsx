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
        websiteLink: '',
    });

    function handleInputChange(e) {
        setFormDetails({
            ...formDetails,
            [e.target.id]: e.target.value
        });
    }
    return (
        <section className="MainSection">
            <EditSection handleInputChange={handleInputChange}/>
            <section className="MainContent">
                <Resume formDetails={formDetails} />
            </section>
        </section>
    )
}

export default App
