import { useState } from "react"
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import Resume from './components/Resume'

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
            <section className='EditSection'>
                <PersonalInfo handleInputChange={handleInputChange}/>
            </section>
            <section className="MainContent">
                <Resume formDetails={formDetails} />
            </section>
        </section>
    )
}

export default App
