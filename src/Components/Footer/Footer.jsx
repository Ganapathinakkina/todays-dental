import "./Footer.css"
import FooterTitleIcon from "../../assets/footerTitleIcon.png"
import SocialIcon1 from "../../assets/socialIcon1.png"
import SocialIcon2 from "../../assets/socialIcon2.png"
import SocialIcon3 from "../../assets/socialIcon3.png"
import SocialIcon4 from "../../assets/socialIcon4.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContent">
                <div className="title">
                    <img src={FooterTitleIcon} alt="" />
                    <h3>Todays Dental</h3>
                </div>
                <div className="quickLinks">
                    <h5>Quick Links</h5>
                    <div className="links">
                        <div className="link">
                            <h6>Home</h6>
                            <p>Introduction About Clinic</p>
                            <p>Overview of services</p>
                            <p>Call-to-action</p>
                        </div>
                        <div className="link">
                            <h6>About</h6>
                            <p>Clinic background</p>
                            <p>Practitioner details</p>
                            <p>Philosophy</p>
                        </div>
                        <div className="link">
                            <h6>Servives</h6>
                            <p>General Dentistry</p>
                            <p>Restorative Dentistry</p>
                            <p>Cosmotic Dentistry</p>
                        </div>
                    </div>
                </div>
                <div className="social">
                    <img src={SocialIcon1} alt="" />
                    <img src={SocialIcon2} alt="" />
                    <img src={SocialIcon3} alt="" />
                    <img src={SocialIcon4} alt="" />
                </div>
            </div>


        </div>
    )
}

export default Footer