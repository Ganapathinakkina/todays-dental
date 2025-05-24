import SliderImg1 from "../../assets/sliderImg1.png"
import SliderImg2 from "../../assets/sliderImg2.jpg"
import SliderImg3 from "../../assets/sliderImg3.jpg"
import SliderImg4 from "../../assets/sliderImg4.jpg"
import SliderImg5 from "../../assets/sliderImg5.png"
import Doctor1 from "../../assets/doctor1.png"
import Doctor2 from "../../assets/doctor2.png"
import Doctor3 from "../../assets/doctor3.png"
import Doctor4 from "../../assets/doctor4.png"

import "./About.css"
import SingleCard from "./SingleCard"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {

  const images = [SliderImg1, SliderImg2, SliderImg3, SliderImg4, SliderImg5];

  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    adaptiveHeight: true
  }

  const data = [
    {
      DoctorImg: Doctor1,
      Name: "Dr. James Thornton",
      Experience: "20+Years",
      Specialization: "General and Preventive Dentistry",
      Info: "Dr. James Thornton brings over two decades of experience in comprehensive dental care. He completed his DDS and Endodontic Residency at NYU College of Dentistry. He is known for his gentle approach and precision in root canal treatments."
    },
    {
      DoctorImg: Doctor2,
      Name: "Dr. Ryan Patel",
      Experience: "15+ years",
      Specialization: "Endodontics (Root Canal Treatment)",
      Info: "Dr. Ryan Patel is dedicated to providing pain-free root canal treatments and saving natural teeth. He received his DDS from the NYU College of Dentistry and went on to complete a Master’s in Endodontics at the University of Michigan. Dr. Patel is passionate about mentoring young dentists and is active in community outreach programs that offer free dental care."
    },
    {
      DoctorImg: Doctor3,
      Name: "Dr. Emily Carter",
      Experience: "10+Years",
      Specialization: "Cosmetic and Restorative Dentistry",
      Info: "Dr. Emily Carter is a passionate cosmetic dentist dedicated to enhancing smiles through advanced restorative techniques. She Completed BSc in Biology, UCLA In DDS, University of California, San Francisco, she combines artistic skill with clinical expertise to deliver confident, natural-looking results."
    },
    {
      DoctorImg: Doctor4,
      Name: "Dr. Nathan Coleman",
      Experience: "12+Years",
      Specialization: "Prosthodontics",
      Info: "Nathan Coleman earned his DDS from the University of Texas Health Science Center and completed advanced prosthodontics training at the University of Illinois. He focuses on full-mouth rehabilitation and cosmetic dentistry with a patient-first approach."
    }
  ]
  return (
    <div className="aboutPage">
      <div className="clinicInfo">
        <div className="clinicInfoContent">
          <h2>About Our Clinic</h2>
          <p>Our clinic was modernized, using advanced technology and modern equipment.
            We provide a comfortable and welcoming environment for our patients.</p>
          <p> we believe that every smile tells a story—and we’re here to make yours healthy, confident, and bright. </p>
          <p>Todays Dental Partners is pleased to welcome forward-thinking dentists and dental professionals to our unique organization</p>
        </div>
        <div className="sliderImgs">
          <Slider {...settings}>

            {images.map((image) => {
              return (
                <div key={image} >
                  <img src={image} alt="" />
                </div>
                )
              })
            }
          </Slider>
        </div>
      </div>

      <div className="doctorsSection">
        <h2>Doctors</h2>
        <div className="doctors">
          {
            data.map((item) => {
              const { DoctorImg, Name, Experience, Specialization, Info } = item;
              return (
                <SingleCard DoctorImg={DoctorImg} Name={Name} Experience={Experience} Specialization={Specialization} Info={Info} />
              )
            })
          }
        </div>
      </div>

      <div className="mission">
        <h2>Our Mission, Your Smile</h2>
        <p>Our mission is simple: to provide compassionate, comprehensive dental care tailored to each individual’s needs. We focus on prevention, education, and long-term oral health.
          At Todays Dental, we treat patients like family—because your smile matters to us.</p>
        <p>We understand that visiting the dentist can feel intimidating, which is why we’ve built a practice centered on trust and comfort.
          From your first consultation to your ongoing care, we aim to create a relaxed environment where you feel heard, valued, and supported.</p>
        <p className="endQuote">We don’t just create beautiful smiles — we build lasting confidence and lifelong health.</p>
      </div>
    </div>
  )
}

export default About