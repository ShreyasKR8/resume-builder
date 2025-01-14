import { useState } from "react"
import './App.css'
import InputComponent from './components/InputComponent'

function App() {
    const [formDetails, setFormDetails] = useState({
        name: '',
        designation: '',
        email: '',
    });

    function handleInputChange(e) {
        setFormDetails({
            ...formDetails,
            [e.target.id]: e.target.value
        })
    }

  return (
    <>
      <section className='edit-section'>
        <form>
            <InputComponent id='name' label='Name' inputType='text' handleInputChange={handleInputChange}/>
            <InputComponent id='designation' label={'Designation'} inputType={'text'} handleInputChange={handleInputChange} />
            <InputComponent id='email' label={'Email'} inputType={'email'} handleInputChange={handleInputChange}/>
        </form>
      </section>
      <section className='resume-section'>
        <div className='personal-details'>
            <p>{formDetails.name}</p>
            <p>{formDetails.designation}</p>
            <p>{formDetails.email}</p>
        </div>
      </section>
    </>
  )
}

export default App
