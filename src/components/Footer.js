import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Footer = () => {
  return (
    <Router>
      <footer class="footer-distributed">
        <div class="footer-right">
          <a
            href="https://www.linkedin.com/in/kumar-utkarsh-7336291a0/"
            target="_blank"
          >
            <FaLinkedin />
          </a>

          <a href="https://github.com/kutkarsh-2002" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100013453055351"
            target="_blank"
          >
            <FaFacebookSquare />
          </a>

          <a href="https://www.instagram.com/k_utkarsh7/" target="_blank">
            <FaInstagram />
          </a>
        </div>

        <div class="footer-left">
          <p class="footer-links">
            <a class="link-1" href="#">
              Home
            </a>

            <a href="https://www.counselshub.com/">Blog</a>

            <a href="#about">About</a>

            <a href="https://forms.gle/6pC1hCpNdUS2GP9c6">Contact</a>
          </p>

          <p>Utkarsh Portfolio &copy; 2021</p>
        </div>
      </footer>
    </Router>
  );
};
export default Footer;
