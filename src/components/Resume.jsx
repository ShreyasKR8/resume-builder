import '../styles/Resume.css'
import emailIcon from '../assets/email_icon.svg'
import phoneIcon from '../assets/phone_smartphone_icon.svg'
import socialsIcon from '../assets/social_github_icon.svg'

export default function Resume({ formDetails }) {
    let websiteLink = formDetails.websiteLink;
    if(formDetails.websiteLink.startsWith('https://')) {
        websiteLink = formDetails.websiteLink.split('https://')[1];
    }

    const mailTo = `mailto:${formDetails.email}`;
    
    return (
        <section className='ResumeSection'>
            <div className='PersonalDetails'>
                <div className="NameDes">
                    <h1>{formDetails.name}</h1>
                    <h4>{formDetails.designation}</h4>
                </div>
                <div className="ContactInfo">
                    <div className="IconTextContainer">
                        <a href={mailTo} className='ContactLinks'>{formDetails.email && <img src={emailIcon} className="EmailIcon" alt="email icon" />}
                        <p>{formDetails.email}</p></a>
                    </div>
                    <div className="IconTextContainer">
                        {formDetails.phone && <img src={phoneIcon} className="PhoneIcon" alt="phone icon" />}
                        <p>{formDetails.phone}</p>
                    </div>
                    <div className="IconTextContainer">
                        <a href={formDetails.websiteLink} className='ContactLinks'>{websiteLink && <img src={socialsIcon} className="GithubIcon" alt="github icon" />}
                        <p>{websiteLink}</p></a>
                    </div>
                </div>
            </div>
        </section>
    );
}