// import { useState } from "react";
import PersonalInfo from "./PersonalInfo";

export default function EditSection({ handleInputChange }) {

    return (
        <section className='EditSection'>
            <PersonalInfo handleInputChange={handleInputChange}/>
        </section>
    );
}