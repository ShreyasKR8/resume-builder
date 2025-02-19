import '../styles/WorkExperience.css'

const expFieldsLabels = [
    'Role',
    'Company',
    'Years',
    'Location',
    'Achievements'
];

export default function Experience({ handleExpFieldChange, formDetails, removeExpField }) {
    return (

        formDetails.experience.map((exp, index) => (
            <div className="EditDiv ExpEditDiv" key={index}>
                {index !== 0 && <button type='button' onClick={() => removeExpField(index)}>❌</button>}
                <label htmlFor='role'>{expFieldsLabels[0]}
                    <input id={'role'} type='text' onChange={(e) => handleExpFieldChange(e, index)} value={exp['role']}/>
                </label>
                <label htmlFor='company'>{expFieldsLabels[1]}
                    <input id={'company'} type='text' onChange={(e) => handleExpFieldChange(e, index)} value={exp['company']}/>
                </label>
                <label htmlFor='workYears'>{expFieldsLabels[2]}
                    <input id={'workYears'} type='text' onChange={(e) => handleExpFieldChange(e, index)} value={exp['workYears']}/>
                </label>
                <label htmlFor='location'>{expFieldsLabels[3]}
                    <input id={'location'} type='text' onChange={(e) => handleExpFieldChange(e, index)} value={exp['location']}/>
                </label>
                <label htmlFor='achievements'>{expFieldsLabels[4]}
                    <textarea id={'achievements'} onChange={(e) => handleExpFieldChange(e, index)} value={exp['achievements']}></textarea> 
                </label>
            </div>
        ))
)
}