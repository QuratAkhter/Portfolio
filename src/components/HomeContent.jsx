import Button from "./Button"
import styles from "./HomeContent.module.css"
import NavIcons from "./NavIcons"
import resume from "../assets/Resume.pdf"

const HomeContent = () => {
  return <div id="home" data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1200" class={`bg-dark m-auto my-5 px-4 py-3 text-center ${styles.main} ${styles['home-text']}`}>

    <div class="py-5" data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0">
      <span class="display-5 h1 fw-bold text-white">Here's <span  class={`fw-bolder ${styles.text}`}>Qurat-ul-Ain Akhter</span></span>
      <div class="col-lg-6 mx-auto mb-0">
        <p class="fs-5 mb-4">
          As a Junior Front-End Developer, I specialize in creating dynamic, responsive web interfaces using React.js, JavaScript, HTML, CSS, and Bootstrap. I excel in designing user-friendly websites, integrating APIs, and managing databases like Oracle and MySQL. In addition to my expertise in web development, I also have strong programming skills in C, C++, and Python, which enhance my ability to solve complex problems and deliver high-quality solutions.</p>
        <div class="d-grid gap-2  d-sm-flex justify-content-center">

          <a href={resume} download><Button content={"Download Resume"} /></a>
        </div>
      </div>
    </div>
    <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="100"
     data-aos-offset="0" class="mt=0 d-flex text-secondary justify-content-center"><NavIcons /></div>
  </div>
}
export default HomeContent