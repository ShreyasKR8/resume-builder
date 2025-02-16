
const educationFieldsLabels = [
    'School',
    'Degree',
    'Years',
    'Grade'
];

export default function Education({ handleEdFieldChange, formDetails, removeEdField }) {
    return (

            formDetails.education.map((edu, index) => (
                <div className="EducationEditDiv" key={index}>
                    {index !== 0 && <button type='button' onClick={() => removeEdField(index)}>❌</button>}
                    <label htmlFor='school'>{educationFieldsLabels[0]}
                        <input id={'school'} type='text' onChange={(e) => handleEdFieldChange(e, index)} value={edu['school']}/>
                    </label>
                    <label htmlFor='degree'>{educationFieldsLabels[1]}
                        <input id={'degree'} type='text' onChange={(e) => handleEdFieldChange(e, index)} value={edu['degree']}/>
                    </label>
                    <label htmlFor='years'>{educationFieldsLabels[2]}
                        <input id={'years'} type='text' onChange={(e) => handleEdFieldChange(e, index)} value={edu['years']}/>
                    </label>
                    <label htmlFor='grade'>{educationFieldsLabels[3]}
                        <input id={'grade'} type='text' onChange={(e) => handleEdFieldChange(e, index)} value={edu['grade']}/>
                    </label>
                </div>
            ))
    )
}