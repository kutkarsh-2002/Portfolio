import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaStreetView } from "react-icons/fa";
import { GoBold } from "react-icons/go";
import {
  AiTwotoneSliders,
  AiFillAppstore,
  AiFillCheckSquare,
} from "react-icons/ai";

const Skills = () => {
  const [header] = React.useState({
    mainHeader: "SKILLS",
    subHeading: "My Skills",
    text: "These are my skills. I am curious to learn different technologies.",
  });

  return (
    <div className="container-fluid skills" id="skills">
      <div className="container-header">
        <div className="skills-header">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="main_header">{header.subHeading}</h1>
          <p className="main_content">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4 col-width">
          <div className="skills_box effect">
            <FaGithub className="common_icons" />
            <div className="skills_box-header">MERN Stack Developer</div>
            <div className="skills_box-p">
              I adhere to learn and explore various technology. Presently I'm
              working in MERN as a full-stack Web Developer.
            </div>
          </div>
        </div>

        <div className="col-sm-4 col-width">
          <div className="skills_box effect">
            <AiFillAppstore className="common_icons" />
            <div className="skills_box-header">Competitive Programmer</div>

            <div className="skills_box-p">
              A highly motivated person with problem-solving skills. Diving
              ahead into the world of programming.
            </div>
          </div>
        </div>

        <div className="col-sm-4 col-width">
          <div className="skills_box effect">
            <AiFillCheckSquare className="common_icons" />

            <div className="skills_box-header">
              Skilled in Programming Languages
            </div>

            <div className="skills_box-p">
              I'm currently working with C++ and Javascript for programming and
              development.
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-width">
          <div className="skills_box effect">
            <GoBold className="common_icons" />
            <div className="skills_box-header">Blogging</div>

            <div className="skills_box-p">
              Love to share experiences through analysis of stuff that I learn
              which also helps me to track my learning.
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-width">
          <div className="skills_box effect">
            <AiTwotoneSliders className="common_icons" />
            <div className="skills_box-header">Stock Market</div>

            <div className="skills_box-p">
              Investment has always been a passion to go for. Still learning the
              technical aspects.
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-width">
          <div className="skills_box effect">
            <FaStreetView className="common_icons" />
            <div className="skills_box-header">Team Leadership</div>

            <div className="skills_box-p">
              My scintillating leadership quality helps to fasten the team that
              leads to increase the work efficiency.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
