import styles from "./NavIcons.module.css";
import {  FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si'; // Import LeetCode icon from react-icons
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const NavIcons = () => {
    return (
        <ul className={`ps-0 ${styles.wrapper}`}>
           
            {/* LinkedIn */}
            <li className={`${styles.icon} ${styles.linkedin}`}>
                <span className={`ps-2 ${styles.tooltip}`}>LinkedIn</span>
                <a href="https://www.linkedin.com/in/qurat-ul-ain-akhter-888901262/" target="_blank" className="text-decoration-none text-reset"><FaLinkedinIn size="1.2em" /></a>
            </li>

            {/* GitHub */}
            <li className={`${styles.icon} ${styles.github}`}>
                <span className={`ps-2 ${styles.tooltip}`}>GitHub</span>
                <a href="https://github.com/QuratAkhter" target="_blank" className="text-decoration-none text-reset"><FaGithub size="1.4em" /></a>
            </li>

            {/* LeetCode */}
            <li className={` ${styles.icon} ${styles.leetcode}`}>
                <span className={`ps-2 ${styles.tooltip}`}>LeetCode</span>
                <a href="https://leetcode.com/u/qurat-akhter/" target="_blank" className="text-decoration-none text-reset"> <SiLeetcode size="1.3em" /></a>
            </li>

             {/* Whatsapp */}
             <li className={`${styles.icon} ${styles.whatsapp}`}>
                <span className={`ps-2 ${styles.tooltip}`}>Whatsapp</span>
                <a href="https://wa.link/9833vn" target="_blank" className="text-decoration-none text-reset"><BsWhatsapp size="1.3em" /></a>
            </li>

             {/* Gmail */}
             <li className={`${styles.icon} ${styles.gmail}`}>
                <span className={`ps-2 ${styles.tooltip}`}>Gmail</span>
                <a href="https://mail.google.com/mail/u/0/?fs=1&to=qurat.akhter2003@gmail.com&tf=cm" target="_blank" className="text-decoration-none text-reset"><MdEmail  size="1.3em" /></a>
            </li>
        </ul>
    );
};

export default NavIcons;
