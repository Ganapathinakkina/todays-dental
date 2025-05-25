import "./Contact.css"
import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
        const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5173/contact', form);

            setForm({
                name: '',
                email: '',
                subject: '',
                message: '',
            });

            alert('Message sent successfully!');
        } catch (error) {
            alert('Something went wrong.');
        }
    };
    return (
        <div className="contactPage">
            <div className="contactContainer">
                <form className="contactForm" onSubmit={handleSubmit}>
                    <h2>Contact Us</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={form.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Send Message</button>
                </form>

                <div className="contactInfo">
                    <h3>Clinic Information</h3>
                    <p><strong>Phone:</strong> +18037564353</p>
                    <p><strong>Email:</strong> hr@todaysdentalpartners.com</p>
                    <p><strong>Address:</strong> 2Q48+4J Lexington, South Carolina, USA</p>
                    <iframe
                        title="Clinic Location"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d61674.63353577072!2d-81.12694096351935!3d34.0852049293772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDA1JzIwLjkiTiA4McKwMDQnNDguMyJX!5e0!3m2!1sen!2sin!4v1748148522736!5m2!1sen!2sin"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact