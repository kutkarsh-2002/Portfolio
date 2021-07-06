import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  const [state] = React.useState({
    subHeading: "ABOUT ME",
    text: "This is Kumar Utkarsh tech, bluestocking, and finance enthusiastic. Skilled in programming language such as C++, Python, and Javascript. Peculiar and curious about Stock Market. Professional with a Bachelor of Technology - BTECH focused in Electronics and communication engineering from Birla Institute of Technology, Mesra.",
  });

  const [state2] = React.useState([
    { id: 1, title: "Name", text: "Kumar Utkarsh" },
    { id: 2, title: "E-Mail", text: "kutkarsh350@gmail.com" },
    { id: 3, title: "Phone Number", text: "9334486447" },
    { id: 4, title: "Insta-Id", text: "K-utkarsh7" },
  ]);
  return (
    <div className="container-fluid about" id="about">
      <div className="common">
        <h1 className="main_header-about">{state.subHeading}</h1>
        <p className="About_content">{state.text}</p>
        <div className="commonBorder"></div>
      </div>
      <div className="row">
        <div className="col-6"></div>
        <div className="col-6">
          <div className="info_contacts">
            <h3>My Contacts</h3>
            <div className="row">
              {state2.map((info) => (
                <div className="col-sm-6 d-inline">
                  <strong className="info_title">{info.title}</strong>
                  <p className="about-para">{info.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
