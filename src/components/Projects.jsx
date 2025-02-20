import '../styles/WorkExperience.css'

const expFieldsLabels = [
    'Project Name',
    'Github Link',
    'Description'
];

export default function Projects({ handleProjectFieldChange, formDetails, removeProjectField }) {
    return (

        formDetails.projects.map((project, index) => (
            <div className="EditDiv ProjectsEditDiv" key={index}>
                {index !== 0 && <button type='button' onClick={() => removeProjectField(index)}>❌</button>}
                <label htmlFor='title'>{expFieldsLabels[0]}
                    <input id={'title'} type='text' onChange={(e) => handleProjectFieldChange(e, index)} value={project['title']}/>
                </label>
                <label htmlFor='githubLink'>{expFieldsLabels[1]}
                    <input id={'githubLink'} type='text' onChange={(e) => handleProjectFieldChange(e, index)} value={project['githubLink']}/>
                </label>
                <label htmlFor='description'>{expFieldsLabels[2]}
                    <textarea id={'description'} type='text' onChange={(e) => handleProjectFieldChange(e, index)} value={project['description']}></textarea>
                </label>
            </div>
        ))
)
}