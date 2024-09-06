import styles from "./Skills.module.css"
import react from "../assets/react2.png"
import js from "../assets/js.png"
import API from "../assets/API.jpg"
import html from "../assets/html.png"
import css from "../assets/css.jpg"
import bootstrap from "../assets/bootstrap.png"
import oracle from "../assets/oracle.jpg"
import C from "../assets/C.jpg"
import Cpp from "../assets/C++.png"
import python from "../assets/python.jpg"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

const Skills = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div id="skills" className={styles['skills-container']}>

            <span data-aos="zoom-in" className={`display-5 mb-4 h1 fw-bold text-white d-flex justify-content-center m-auto`}>
                <span className={`fw-bolder ${styles.text}`}>Skills</span>
            </span>

            <div className={`container ${styles['pyramid-container']}`}>


                <div className="row">
                    <div className={`col d-flex justify-content-center align-items-center m-2 ${styles['hover-card']}`}>
                        <div data-aos="fade-zoom-in"
                            className={` hover-zoom card text-black  ${styles['skill-card']} bg-dark ${styles.card}`} style={{ width: '8rem', height: '8rem' }}>
                            <img src={react} className={`card-img  ${styles['card-img']}`} alt="..." />
                            <div className={`card-img-overlay ${styles['card-img-overlay']}`}>
                                <h5 className="card-title fw-bold text-white">React.JS</h5>
                            </div>
                        </div>
                    </div>
                    <div className={`col d-flex justify-content-center align-items-center m-2 ${styles['hover-card']}`}>
                        <div data-aos="fade-zoom-in"
                            className={`card text-black ${styles['skill-card']} bg-dark ${styles.card}`} style={{ width: '8rem', height: '8rem' }}>
                            <img src={js} className={`card-img ${styles['normal-card']} ${styles['card-img']}`} alt="..." />
                            <div className={`card-img-overlay ${styles['card-img-overlay']}`}>
                                <h5 className="card-title fw-bold text-white">Vanilla JavaScript</h5>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Second Row --> */}
                <div className="row">
                <div className={`col d-flex justify-content-center align-items-center m-2 ${styles['hover-card']}`}>
                        <div data-aos="fade-zoom-in"
                            className={`card text-black ${styles['skill-card']} bg-dark ${styles.card}`} style={{ width: '8rem', height: '8rem' }}>
                            <img src={API} className={`card-img ${styles['normal-card']} ${styles['card-img']}`} alt="..." />
                            <div className={`card-img-overlay ${styles['card-img-overlay']}`}>
                                <h5 className="card-title fw-bold text-white">API Integration</h5>
                            </div>
                        </div>
                    </div>
                    <div className={`col d-flex justify-content-center align-items-center m-2 ${styles['hover-card']}`}>
                        <div data-aos="fade-zoom-in"
                            className={`card text-black ${styles['skill-card']} bg-dark ${styles.card}`} style={{ width: '8rem', height: '8rem' }}>
                            <img src={html} className={`card-img ${styles['normal-card']} ${styles['card-img']}`} alt="..." />
                            <div className={`card-img-overlay ${styles['card-img-overlay']}`}>
                                <h5 className="card-title fw-bold">HTML</h5>
                            </div>
                        </div>
                    </div>
                    <div className={`col d-flex justify-content-center align-items-center m-2 ${styles['hover-card']}`}>
                        <div data-aos="fade-zoom-in"
                            className={`card text-black ${styles['skill-card']} bg-dark ${styles.card}`} style={{ width: '8rem', height: '8rem' }}>
                            <img src={css} className={`card-img ${styles['normal-card']} ${styles['card-img']}`} alt="..." />
                            <div className={`card-img-overlay ${styles['card-img-overlay']}`}>
                                <h5 className="card-title fw-bold">Cascading Style Sheet</h5>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Third Row --> */}
                <div className="row">
                <div className={`col d-flex justify-content-center align-items-center m-2 ${styles['hover-card']}`}>
                        <div data-aos="fade-zoom-in"
                            className={`card text-black ${styles['skill-card']} bg-dark ${styles.card}`} style={{ width: '8rem', height: '8rem' }}>
                            <img src={bootstrap} className={`card-img ${styles['normal-card']} ${styles['card-img']}`} alt="..." />
                            <div className={`card-img-overlay ${styles['card-img-overlay']}`}>
                                <h5 className="card-title fw-bold text-white">Bootstrap</h5>
                            </div>
                        </div>
                    </div>
                    <div className={`col d-flex justify-content-center align-items-center m-2 ${styles['hover-card']}`}>
                        <div data-aos="fade-zoom-in"
                            className={`card text-black ${styles['skill-card']} bg-dark ${styles.card}`} style={{ width: '8rem', height: '8rem' }}>
                            <img src={oracle} className={`card-img ${styles['normal-card']} ${styles['card-img']}`} alt="..." />
                            <div className={`card-img-overlay ${styles['card-img-overlay']}`}>
                                <h5 className="card-title fw-bold">Oracle</h5>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Fourth Row --> */}
                <div className="row">
                <div className={`col d-flex justify-content-center align-items-center m-2 ${styles['hover-card']}`}>
                        <div data-aos="fade-zoom-in"
                            className={`card text-black ${styles['skill-card']} bg-dark ${styles.card}`} style={{ width: '8rem', height: '8rem' }}>
                            <img src={C} className={`card-img ${styles['normal-card']} ${styles['card-img']}`} alt="..." />
                            <div className={`card-img-overlay ${styles['card-img-overlay']}`}>
                                <h5 className="card-title fw-bold">C Programming</h5>
                            </div>
                        </div>
                    </div>
                    <div className={`col d-flex justify-content-center align-items-center m-2 ${styles['hover-card']}`}>
                        <div data-aos="fade-zoom-in"
                            className={`card text-black ${styles['skill-card']} bg-dark ${styles.card}`} style={{ width: '8rem', height: '8rem' }}>
                            <img src={Cpp} className={`card-img ${styles['normal-card']} ${styles['card-img']}`} alt="..." />
                            <div className={`card-img-overlay ${styles['card-img-overlay']}`}>
                                <h5 className="card-title fw-bold">C++ Programming</h5>
                            </div>
                        </div>
                    </div>
                    <div className={`col d-flex justify-content-center align-items-center m-2 ${styles['hover-card']}`}>
                        <div data-aos="fade-zoom-in"
                            className={`card text-black ${styles['skill-card']} bg-dark ${styles.card}`} style={{ width: '8rem', height: '8rem' }}>
                            <img src={python} className={`card-img ${styles['normal-card']} ${styles['card-img']}`} alt="..." />
                            <div className={`card-img-overlay ${styles['card-img-overlay']}`}>
                                <h5 className="card-title fw-bold">Python</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills