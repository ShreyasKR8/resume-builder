// import { useState } from "react"
import '../styles/PersonalInfo.css'
import InputComponent from './InputComponent'

export default function PersonalInfo({ handleInputChange }) {

  return (
    <article className='PersonalInfo'>
        <form className='PersonalInfoForm'>
            <InputComponent id='name' label='Name' inputType='text' handleInputChange={handleInputChange}/>
            <InputComponent id='designation' label={'Designation'} inputType={'text'} handleInputChange={handleInputChange} />
            <InputComponent id='email' label={'Email'} inputType={'email'} handleInputChange={handleInputChange}/>
            <InputComponent id='phone' label={'Phone Number'} inputType={'tel'} handleInputChange={handleInputChange}/>
            <InputComponent id='websiteLink' label={'Website links'} inputType={'url'} handleInputChange={handleInputChange}/>
        </form>
    </article>
  );
}
