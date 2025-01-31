import '../styles/Resume.css'
import emailIcon from '../assets/email_icon.svg'
import phoneIcon from '../assets/phone_smartphone_icon.svg'
import socialsIcon from '../assets/social_github_icon.svg'

export default function Resume({ formDetails }) {
    // let websiteLink = [];
    // formDetails.websiteLink.forEach(link => {
    //     console.log(link)
    //     if(link.startsWith('https://')) {
    //         websiteLink.push(link.split('https://')[1]);
    //     }
    // })
    // console.log(websiteLink.length);

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
                        // console.log(link);
                        return (<a key={index} href={link} className='ContactLinks'><img src={socialsIcon} className="GithubIcon" alt="github icon" />
                        <p>{link}</p></a>);
                    })}
                        {/* <a href={formDetails.websiteLink} className='ContactLinks'>{websiteLink && <img src={socialsIcon} className="GithubIcon" alt="github icon" />}
                        <p>{websiteLink}</p></a> */}
                    </div>
                </div>
            </div>
        </section>
    );
}