// import { useState } from "react"
import '../styles/PersonalInfo.css'
import InputComponent from './InputComponent'

export default function PersonalInfo({ handleInputChange, loadedValues }) {

  return (
    <article className='PersonalInfo'>
        <form className='PersonalInfoForm'>
            <InputComponent id='name' label='Name' inputType='text' handleInputChange={handleInputChange} loadedValue={loadedValues.name}/>
            <InputComponent id='designation' label={'Designation'} inputType={'text'} handleInputChange={handleInputChange} loadedValue={loadedValues.designation}/>
            <InputComponent id='email' label={'Email'} inputType={'email'} handleInputChange={handleInputChange} loadedValue={loadedValues.email}/>
            <InputComponent id='phone' label={'Phone Number'} inputType={'tel'} handleInputChange={handleInputChange} loadedValue={loadedValues.phone}/>
            {/* <WebLinksComponent id='websiteLink' label={'Website links'} inputType={'url'} handleInputChange={handleInputChange} allowMultipleFields={true}/> */}
        </form>
    </article>
  );
}
