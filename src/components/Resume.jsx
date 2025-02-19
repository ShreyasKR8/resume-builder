import '../styles/Resume.css'
import emailIcon from '../assets/email_icon.svg'
import phoneIcon from '../assets/phone_smartphone_icon.svg'
import gitIcon from '../assets/social_github_icon.svg'
import linkedInIcon from '../assets/icons8-linkedin.svg'
import newTabIcon from '../assets/open_in_new_tab.svg'

export default function Resume({ formDetails }) {

    const mailTo = `mailto:${formDetails.email}`;
    
    return (
        <section className='ResumeSection'>
            <section className='PersonalDetails'>
                <div className="NameDes">
                    <h1>{formDetails.name}</h1>
                    <h3>{formDetails.designation}</h3>
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
            </section>
            <section className="ResumeDetails">
                {/* Education Section*/}
                <article className="EducationSection">
                    <h2>Education</h2>
                    {formDetails.education.map((edu, index) => {
                        return (
                            <article className='EducationDetails' key={index}>
                                <h3>{edu.school}</h3>
                                <h4>{edu.years}</h4>
                                <h4>{edu.degree}</h4>
                                <p>{edu.grade && "Grade:"}{edu.grade}</p>
                            </article>
                        );
                    })}
                </article>
                {/* Experience Section*/}
                <article className="ExpSection">
                    <h2>Work Experience</h2>
                    {formDetails.experience.map((exp, index) => {
                        return (
                            <article className='ExpDetails' key={index}>
                                <div className="RoleYearDiv">
                                    <h3>{exp.role}</h3>
                                    <h4>{exp.workYears}</h4>
                                </div>
                                <h4>{exp.company}</h4>
                                <p>{exp.location}</p>
                                <p className='achievements'>{exp.achievements}</p>
                            </article>
                        );
                    })}
                </article>
                {/* Projects Section*/}
                <article className="ProjectsSection">
                    <h2>Personal Projects</h2>
                    {formDetails.projects.map((project, index) => {
                        return (
                            <article className='ProjectDetails' key={index}>
                                <div className="ProjectTitleDiv">
                                    <h3>{project.title}</h3>
                                    <a href={project.githubLink} target='blank'><img src={newTabIcon}></img></a>
                                </div>
                                <p>{project.description}</p>
                            </article>
                        );
                    })}
                </article>
            </section>
        </section>
    );
}