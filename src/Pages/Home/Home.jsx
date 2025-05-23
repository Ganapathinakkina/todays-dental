import "./Home.css"
import Teeth from "../../assets/teeth.jpg"
import Option1 from "../../assets/optionImg1.png"
import Option2 from "../../assets/optionImg2.png"
import Option3 from "../../assets/optionImg3.png"
import Option4 from "../../assets/optionImg4.png"

const Home = () => {
  return (
    <div className='home'>
      <div className="welcomeCard">
        <div className="welcomeText">
          <h2>Welcome to</h2>
          <h1>TODAYS DENTAL</h1>
          <p>Your Smile is our priority</p>
        </div>
        <button>Book Appointment</button>
      </div>

      <div className="aboutInfo">
        <div className="content">
          <h2>Welcome to Todays Dental Partners</h2>
          <p> Founded in 2017 by Dr. Sreekanth Emani, Todays Dental Partners was built to empower dentists through partnership and shared success. Dr. Emani and his brother Sunil combined clinical
            expertise and business leadership to create a model where dentists can focus on patient care-not paperwork.</p>
          <p> We offer up to 50% partnerships to help build successful practices without compromising your professional freedom.</p>
          <p> Join a community of like-minded professionals dedicated to innovation, collaboration, and excellence in modern dental practice.</p>
        </div>
        <img src={Teeth} alt="" />
      </div>

      <div className="serviceInfo">
        <h2>What We Offer</h2>
        <div className="serviceOptions">
          <div className="option">
            <img src={Option1} alt="" />
            <div className="optionContent">
              <h5>Practice Management</h5>
              <p>Practices with substantial savings in supplies, increased services, and effective marketing.</p>
            </div>
          </div>
          <div className="option">
            <img src={Option2} alt="" />
            <div className="optionContent">
              <h5>Marketing & Growth</h5>
              <p>We will analyze your website and social media channels to make an evaluation for further perusal.</p>
            </div>
          </div>
          <div className="option">
            <img src={Option3} alt="" />
            <div className="optionContent">
              <h5>Financial & Operational Support</h5>
              <p>Streamlined systems that improve efficiency and profitability.</p>
            </div>
          </div>
          <div className="option">
            <img src={Option4} alt="" />
            <div className="optionContent">
              <h5>Clinical Autonomy</h5>
              <p>You stay in control of your care decisions. Your Smile is our priority.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home