import React, { useState } from 'react';
import '../styles/Faq.css';
import faqPic from '../Assets/faqPic.png'
import Footer from '../pages/Footer';


const faqs = [
  {
    id: 1,
    question: "What programs and courses are offered? ⬇",
    answer: "We offer a range of programs including Software Development, Cybersecurity, Data Science, Networking, and IT Support. Please check our program catalog for detailed descriptions and prerequisites."
  },
  {
    id: 2,
    question: "What are the admission requirements? ⬇",
    answer: "Admission requirements vary by program but generally include a high school diploma or equivalent, a basic understanding of technology, and sometimes an entrance exam or interview. Specific requirements can be found on our admissions page."
  },
  {
    id: 3,
    question: "How long do the programs take to complete? ⬇",
    answer: "Program durations vary depending on the course and mode of study. Full-time programs typically take 6-12 months, while part-time or online options may take longer."
  },
  {
    id: 4,
    question: "Are there financial aid options available? ⬇",
    answer: "Yes, we offer various financial aid options including scholarships, grants, and payment plans. Visit our financial aid page for more information on eligibility and how to apply."
  },
  {
    id: 5,
    question: "Can I take courses online? ⬇",
    answer: "Yes, many of our programs are available online to accommodate different schedules and locations. Check the program details to see if online options are available."
  },
  {
    id: 6,
    question: "What are the career prospects after graduation? ⬇",
    answer: "Graduates of our programs are well-prepared for various roles in the tech industry, such as software developers, network administrators, and cybersecurity analysts. Career services and industry partnerships help in securing job placements."
  }
];

function Faq() {
  const [activeQuestion, setActiveQuestion] = useState(1);

  const toggleQuestion = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div>

    <h1 id='faqH1'>Frequently Asked Questions</h1>
    <div className='myFaq'>

    <div className="faq">
      {faqs.map(faq => (
        <div key={faq.id} className="faq-item">
          <div
            className="faq-question"
            onClick={() => toggleQuestion(faq.id)}
          >
            {faq.id}. {faq.question}
          </div>
          {activeQuestion === faq.id && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>

    <img src={faqPic} alt='faq' className='faqy' />

    </div>
      <Footer />
    </div>


  );
}

export default Faq;
