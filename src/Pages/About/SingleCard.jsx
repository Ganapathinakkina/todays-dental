// import "./About.css"

const SingleCard = ({DoctorImg,Name,Experience,Specialization,Info}) => {
    return (
        <div className="cards">
            <div className="cardImg">
                <img src={DoctorImg} alt="" />
                <button>Book Appointment</button>
            </div>
            <div className="doctorInfo">
                <h3>{Name}</h3>
                <p><span>Experience:</span> {Experience}</p>
                <p className="specialization"><span>Specialization:</span> {Specialization}</p>
                <h6>{Info}</h6>
            </div>
        </div>
    )
}

export default SingleCard