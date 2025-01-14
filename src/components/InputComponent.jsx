
export default function InputComponent({ id, label, inputType, handleInputChange }) {
    return(
        <>
            <label htmlFor={id}>{label}
                <input id={id} onChange={handleInputChange} type={inputType}/>
            </label>
        </>
    )
}
