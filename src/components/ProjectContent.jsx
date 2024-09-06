import Button from "./Button";
import Styles from "./Projects.module.css"

const ProjectContent = ({ project }) => {
  return (
    <div className="row row-cols-1 row-cols-lg-2 align-items-stretch">
      <div className="col d-flex">
        <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1000"
          className={`my-5 w-100 d-flex align-items-center justify-content-center ${Styles['project-img']}`}
        >
          <img
            src={project.image}
            className={`img-fluid w-100 h-100 ${Styles['project-img']}`}
            alt="E-Commerce"
          />
        </div>
      </div>
      <div className="col px-0 d-flex">
        <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1000"
          className={`my-md-5 px-4 py-3 text-center w-100 d-flex flex-column justify-content-center ${Styles['project-container']}`}
        >
          <h1 className={Styles.text}>{project.title}</h1>
          <p>{project.details}</p>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <Button content={"Visit Site"} />
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProjectContent