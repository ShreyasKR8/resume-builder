import '../styles/Resume.css'

export default function Resume({ formDetails }) {
    return (
        <section className='ResumeSection'>
            <div className='PersonalDetails'>
                <div className="NameDes">
                    <h1>{formDetails.name}</h1>
                    <p>{formDetails.designation}</p>
                </div>
                <div className="ContactInfo">
                    <p>{formDetails.email}</p>
                    <p>{formDetails.phone}</p>
                    <p>{formDetails.websiteLink}</p>
                </div>
            </div>
        </section>
    );
}