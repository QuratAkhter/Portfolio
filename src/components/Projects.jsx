import { useState } from "react";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import image6 from "../assets/6.jpg";
import ProjectContent from "./ProjectContent";
import Styles from "./Projects.module.css"

const Projects = () => {
    const projects=[
        {
            title:"E-Commerce Website",
            details:"Developed a responsive e-commerce website using React.js and Bootstrap, featuring product listings, detailed views, category navigation, and a shopping cart. Leveraged the Context API for efficient state management, delivering a smooth and intuitive user experience across devices.",
            image:image1,
            url:"https://quratakhter.github.io/E-Commerce-Website/"
        },
        {
            title:"E-Library",
            details:"Developed the e-Library website allows users to search for books by title, view detailed information, and read selected books online through an embedded PDF viewer. It offers a simple and user-friendly interface for easy access to digital books.",
            image:image2,
            url:" https://quratakhter.github.io/e-Library/"
        },
        {
            title:"To-Do App",
            details:"Developed the Todo App allows users to add tasks with a specified completion deadline and delete tasks as needed. It provides a straightforward interface for efficient task management.",
            image:image6,
            url:"https://quratakhter.github.io/To-Do-App/"
        },
        {
            title:"Weather App",
            details:"Developed the Weather App that allows users to search for temperature, humidity, and wind conditions by entering a city or country name. It provides real-time weather information in a simple and user-friendly interface.",
            image:image5,
            url:"https://quratakhter.github.io/Weather-App/"
        },
        {
            title:"Conference Website",
            details:"The Conference Website provides information about upcoming events, including schedules, speaker details, and registration options. It offers an organized platform for attendees to explore event details and register for conferences easily.",
            image:image4,
            url:"https://ieee-ai-conference.netlify.app"
        },
        {
            title:"Contact Form",
            details:"The contact form on the website allows users to easily get in touch by submitting their name, email address, and message. It provides a straightforward way for users to send inquiries or feedback directly through the site.",
            image:image3,
            url:"https://contact-qurat.netlify.app"
        },
    ]

        let [currentContent,setCurrentContent]=useState(0)

        const changeCurrentContent=(content)=>{
            setCurrentContent(content)
        }

    return (
        <div id="projects" className="container-fluid mt-5 px-5 text-white">
             <span data-aos="zoom-in" className={`display-5 mb-4 h1 fw-bold text-white d-flex justify-content-center m-auto`}>
                <span  className={`fw-bolder ${Styles.text}`}>Creative Works</span>
            </span>
           <ProjectContent project={projects[currentContent]}/>
            <div className="d-flex justify-content-center">
                <div className={`${Styles.bar} my-5 mb-5 ${currentContent===0 && Styles['glowing-bar']}`} onClick={()=>{changeCurrentContent(0)}}></div>
                <div className={`${Styles.bar} my-5 mb-5 ${currentContent===1 && Styles['glowing-bar']}`} onClick={()=>{changeCurrentContent(1)}}></div>
                <div className={`${Styles.bar} my-5 mb-5 ${currentContent===2 && Styles['glowing-bar']}`} onClick={()=>{changeCurrentContent(2)}}></div>
                <div className={`${Styles.bar} my-5 mb-5 ${currentContent===3 && Styles['glowing-bar']}`} onClick={()=>{changeCurrentContent(3)}}></div>
                <div className={`${Styles.bar} my-5 mb-5 ${currentContent===4 && Styles['glowing-bar']}`} onClick={()=>{changeCurrentContent(4)}}></div>
                <div className={`${Styles.bar} my-5 mb-5 ${currentContent===5 && Styles['glowing-bar']}`} onClick={()=>{changeCurrentContent(5)}}></div>
                
            </div>
        </div>
    );
};

export default Projects;
