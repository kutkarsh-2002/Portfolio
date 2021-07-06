import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const navigation = () => {
  return (
    <nav
      id="main-nav"
      className="navbar navbar-expand-lg navbar-dark nav-bg transparent-header solid-header"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="container-fluid check_nav">
            <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto nav-icon">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#project">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.counselshub.com/">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://forms.gle/6pC1hCpNdUS2GP9c6"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default navigation;
