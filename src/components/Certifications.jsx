
const certFieldLabels = [
    "Title",
    "Course Provider",
    "Certicate Link"
]

export default function Certifications({ handleCertFieldChange, formDetails, removeCertField }) {
    return (
        formDetails.certifications.map((cert, index) => (
            <div className="EditDiv CertsEditDiv" key={index}>
                {index !== 0 && <button type='button' onClick={() => removeCertField(index)}>❌</button>}
                <label htmlFor='title'>{certFieldLabels[0]}
                    <input id={'title'} type='text' onChange={(e) => handleCertFieldChange(e, index)} value={cert['title']}/>
                </label>
                <label htmlFor='courseProvider'>{certFieldLabels[1]}
                    <input id={'courseProvider'} type='text' onChange={(e) => handleCertFieldChange(e, index)} value={cert['courseProvider']}/>
                </label>
                <label htmlFor='certLink'>{certFieldLabels[2]}
                    <input id={'certLink'} type='text' onChange={(e) => handleCertFieldChange(e, index)} value={cert['certLink']}/>
                </label>
            </div>
        ))
)
}