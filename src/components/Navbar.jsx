import styles from "./Navbar.module.css"
import Logo from "../assets/logo.png"


const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg mt-2 m-auto ${styles['navbar']}`}>
      <div className="container-fluid mt-2">
        <img src={Logo} alt="Bootstrap" width="150" />

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className={`navbar-toggler-icon ${styles['navbar-toggler-icon']}`}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav d-flex justify-content-center w-100">
            <li className="nav-item mx-2">
              <a className={`nav-link active text-white ${styles['nav-link']} `} aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item mx-2">
              <a className={`nav-link active text-white ${styles['nav-link']} `} href="#skills">Skills</a>
            </li>
            <li className="nav-item mx-2">
              <a className={`nav-link active text-white ${styles['nav-link']} `} href="#projects">Projects</a>
            </li>
            <li className="nav-item mx-2">
              <a className={`nav-link active text-white ${styles['nav-link']} `} href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
