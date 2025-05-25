import "./Services.css";

import ServiceCardImg1 from "../../assets/serviceCardImg1.png"
import ServiceCardImg2 from "../../assets/serviceCardImg2.png"
import ServiceCardImg3 from "../../assets/serviceCardImg3.png"
import ServiceCardImg4 from "../../assets/serviceCardImg4.png"
import ServiceCardImg5 from "../../assets/serviceCardImg5.png"
import ServiceCardImg6 from "../../assets/serviceCardImg6.png"
import ServiceCardImg7 from "../../assets/serviceCardImg7.png"
import ServiceCardImg8 from "../../assets/serviceCardImg8.png"
import ServiceCardImg9 from "../../assets/serviceCardImg9.png"
import Faq from "../../Components/Faq/Faq";


const Services = () => {

    const serviceData = [
        {
            serviceImage: ServiceCardImg1,
            serviceName: "Teeth Cleaning",
            serviceInfo: "Professional cleaning to maintain good oral hygiene and prevent dental issues."
        },
        {
            serviceImage: ServiceCardImg2,
            serviceName: "Dental Exams",
            serviceInfo: "Comprehensive examinations to evaluate your overall dental health."
        },
        {
            serviceImage: ServiceCardImg3,
            serviceName: "Restorative Dentistry",
            serviceInfo: "Repair and restore damaged or decayed teeth to their natural and appearance."
        },
        {
            serviceImage: ServiceCardImg4,
            serviceName: "Cosmetic Dentistry",
            serviceInfo: "Enhance the appearance of your smile with cosmetic treatments."
        },
        {
            serviceImage: ServiceCardImg5,
            serviceName: "Dental Implants",
            serviceInfo: "Permanent solutions for missing teeth, providing the look and feel of natural teeth."
        },
        {
            serviceImage: ServiceCardImg6,
            serviceName: "Orthodontics",
            serviceInfo: "Straighten and align teeth using braces or clear aligners."
        },
        {
            serviceImage: ServiceCardImg7,
            serviceName: "Pediatric Dentistry",
            serviceInfo: "Specialized dental care for infants, children, and teens to ensure lifelong oral health."
        },
        {
            serviceImage: ServiceCardImg8,
            serviceName: "Tooth Extraction",
            serviceInfo: "Safe and efficient removal of damaged or problematic teeth to maintain oral health."
        },
        {
            serviceImage: ServiceCardImg9,
            serviceName: "Oral Cancer Screening",
            serviceInfo: "Early detection screenings to identify signs of oral cancer and ensure timely treatment."
        },

    ]

    return (
        <div className="servicePage">
            <div className="serviceTitle">
                <h2>Our Services</h2>
            </div>
            <div className="serviceCards">
                {
                    serviceData.map((item) => {
                        const { serviceImage, serviceName, serviceInfo } = item;
                        return (
                            <div className="card">
                                <img src={serviceImage} alt="" />
                                <h3>{serviceName}</h3>
                                <p>{serviceInfo}</p>
                            </div>
                        )
                    })
                }
            </div>
            <Faq/>
        </div>
    )
}

export default Services