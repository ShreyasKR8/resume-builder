
const educationFields = [
    'School',
    'Degree',
    'Years',
    'Grade'
];

export default function Education({ handleEdFieldChange, formDetails }) {
    return (
            formDetails.education.map((edu, index) => (
                <div className="EducationEditDiv" key={index}>
                    <label htmlFor='school'>{educationFields[0]}
                        <input id={'school'} type='text' onChange={(e) => handleEdFieldChange(e, index)} value={formDetails.education[index]['school']}/>
                    </label>
                    <label htmlFor='degree'>{educationFields[1]}
                        <input id={'degree'} type='text' onChange={(e) => handleEdFieldChange(e, index)} value={formDetails.education[index]['degree']}/>
                    </label>
                    <label htmlFor='years'>{educationFields[2]}
                        <input id={'years'} type='text' onChange={(e) => handleEdFieldChange(e, index)} value={formDetails.education[index]['years']}/>
                    </label>
                    <label htmlFor='grade'>{educationFields[3]}
                        <input id={'grade'} type='text' onChange={(e) => handleEdFieldChange(e, index)} value={formDetails.education[index]['grade']}/>
                    </label>
                </div>
            ))
    )
}