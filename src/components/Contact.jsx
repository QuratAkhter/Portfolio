import styles from "./Contact.module.css";
import ButtonStyles from "./Button.module.css";
import { FaWhatsappSquare, FaLinkedin } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ya9f1es', 'template_tcfs1tp', form.current, 'UH2Ms_OSCgixP-iLQ')
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset(); // Reset the form fields
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div id="contact" className={`${styles['contact-container']} `}>
            <div className="container">
            <span data-aos="zoom-in" className={`display-5 mb-4 h1 fw-bold text-white d-flex justify-content-center m-auto`}>
                <span className={`fw-bolder ${styles.text}`}>Approach Me</span>
            </span>

            <div className="row g-4">
                <div className="col-12 col-lg-6">
                    <div data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine" className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 pb-md-0 align-items-center justify-content-center">
                        <div className={`list-group ${styles['contact-list']}`}>
                            <a href="https://wa.link/9833vn" target="_blank" className={`text-white list-group-item list-group-item-action d-flex gap-3 py-3 ${styles.main}`} aria-current="true">
                                <FaWhatsappSquare className="text-success" size={40} />
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <div className="my-auto">
                                        <h6 className="mb-0">+92 3102557041</h6>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className={`text-white list-group-item list-group-item-action d-flex gap-3 py-3 ${styles.main}`} aria-current="true">
                                <AiTwotoneMail className="text-warning" size={40} />
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <div className="my-auto">
                                        <h6 className="mb-0">qurat.akhter2003@gmail.com</h6>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/qurat-ul-ain-akhter-888901262/" target="_blank" className={`text-white list-group-item list-group-item-action d-flex gap-3 py-3 ${styles.main}`} aria-current="true">
                                <FaLinkedin className="text-primary" size={40} />
                                <div className="d-flex gap-2 w-100 justify-content-between">
                                    <div className="my-auto">
                                        <h6 className="mb-0">linkedin.com/in/qurat-ul-ain-akhter-888901262</h6>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <form data-aos="fade-left"
          data-aos-offset="300"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine" ref={form} className="text-white p-4 gap-4 m-auto py-md-5 align-items-center justify-content-center" onSubmit={sendEmail}>
                        <div className="mb-3 m-auto" style={{ width: '100%' }}>
                            <label htmlFor="exampleInputName" className="form-label">Name:</label>
                            <input name="user_name" type="text" className={`form-control ${styles.main} text-white`} id="exampleInputName" />
                        </div>
                        <div className="mb-3 m-auto" style={{ width: '100%' }}>
                            <label htmlFor="exampleInputEmail1" className="form-label">Email:</label>
                            <input name="user_email" type="email" className={`form-control ${styles.main} text-white`} id="exampleInputEmail1" />
                            <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3 m-auto" style={{ width: '100%' }}>
                            <label htmlFor="exampleInputMessage" className="form-label">Message:</label>
                            <textarea rows={5} name="message" className={`form-control ${styles.main} text-white`} id="exampleInputMessage" />
                        </div>
                        <div className="d-flex m-auto" style={{ width: '100%' }}>
                            <button className={`${ButtonStyles['button-85']} ${ButtonStyles.btn} m-auto`} type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;
