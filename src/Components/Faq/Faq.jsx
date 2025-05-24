import { useState } from 'react'

import "./Faq.css"

import { FaAngleDown } from "react-icons/fa6";

const Faq = () => {

    const data = [
        {
            question: "1. How often should I visit the dentist?",
            answers: "It’s recommended to visit the dentist every six months for routine check-ups and cleanings. However, your dentist may suggest more frequent visits based on your oral health needs."
        },
        {
            question: "2. What are the options to replace missing teeth?",
            answers: "Common options include dental implants, bridges, and dentures. Your dentist will help determine the best solution based on your oral health and budget."
        },
        {
            question: "3. Does teeth whitening damage my teeth?",
            answers: "Professional teeth whitening is safe and does not damage your teeth when done correctly. Over-the-counter or excessive treatments, however, may cause sensitivity or enamel erosion."
        },
        {
            question: "4. What causes tooth sensitivity?",
            answers: "Tooth sensitivity can be caused by worn enamel, exposed tooth roots, cavities, gum disease, or cracked teeth. A dental exam can help determine the cause and recommend treatment."
        },
        {
            question: "5. How can I prevent cavities?",
            answers: "Brush twice daily, floss once a day, eat a balanced diet, and avoid sugary snacks. Regular dental checkups and fluoride treatments also help prevent cavities."
        }
    ]

    const [selected, setSelected] = useState(null)

    const handleSelect = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }


    return (
        <div className='faqPage'>
            <h1 className='heading'>FAQs</h1>
            <section className='faq'>
                <div className="item">
                    {
                        data.map((item, i) => {
                            return (<>
                                <div className="wrapper" key={i} onClick={() => { handleSelect(i) }}>
                                    <div className="question" >
                                        <h3>{item.question}</h3>
                                        <i className={selected === i ? "reverse" : ""}><FaAngleDown style={{backgroundColor:"transparent"}}/></i>
                                    </div>

                                    <div className={selected === i ? "show" : "answers"}>
                                        <p style={{backgroundColor:"transparent", color:"#236dad"}}>{item.answers}</p>
                                    </div>
                                </div>
                            </>)
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Faq