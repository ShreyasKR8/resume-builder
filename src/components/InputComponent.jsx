// import { useState } from "react"

export default function InputComponent({ id, label, inputType, handleInputChange}) {
    return(
        <>
            <label>{label}
                <input id={id} onChange={handleInputChange} type={inputType}/>
            </label>
        </>
    )
}
