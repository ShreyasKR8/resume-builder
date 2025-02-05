import '../styles/Resume.css'
import emailIcon from '../assets/email_icon.svg'
import phoneIcon from '../assets/phone_smartphone_icon.svg'
import gitIcon from '../assets/social_github_icon.svg'
import linkedInIcon from '../assets/icons8-linkedin.svg'

export default function Resume({ formDetails }) {

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
                    {
                        formDetails.websiteLink.map((link, index) => {
                            const socialsIcon = link.includes('git') ? gitIcon : linkedInIcon;
                            let linkText = '';
                            if(link !== '') {
                                linkText = link.split('https://')[1]
                                if(linkText && linkText.startsWith('www.')) {
                                    linkText = linkText.split('www.')[1];
                                }
                            }
                            return (<a key={index} href={link} className='ContactLinks'>{link && <img src={socialsIcon} className="GithubIcon" alt="github icon" />}
                                <p>{linkText}</p></a>);
                        })
                    }
                    </div>
                </div>
            </div>

            {/* Education Section*/}
            {
                formDetails.education.map((edu, index) => {
                    
                    return (
                        <section className='EducationSection' key={index}>
                            <h3>{edu.school}</h3>
                            <h4>{edu.degree}</h4>
                            <h4>{edu.years}</h4>
                            <p>{edu.grade}</p>
                        </section>
                    );
                })
            }
        </section>
    );
}