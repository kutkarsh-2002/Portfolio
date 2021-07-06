import React from "react";
import UtkarshProfile from "../images/Utkarsh.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Banner = () => {
  const [state] = React.useState({
    title: "This is Utkarsh",
    text: "I'm Kumar Utkarsh tech, trading, and finance enthusiastic",
  });
  return (
    <Router>
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="banner_content">
                <h1>{state.title}</h1>
                <p>{state.text}</p>
              </div>
            </div>

            <div className="col-6">
              <div className="col-6">
                <div className="banner_img">
                  <img src={UtkarshProfile} alt="banner-img"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Router>
  );
};

export default Banner;
