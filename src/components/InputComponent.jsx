import '../styles/InputComponent.css'
// import storage from '../storage.js'
// import { useEffect, useRef } from 'react';

export default function InputComponent({ id, label, inputType, handleInputChange, loadedValue }) {
    return(
        <>
            <label htmlFor={id}>{label}:
                <input id={id} onChange={handleInputChange} type={inputType} value={loadedValue}/>
            </label>
        </>
    )
}
