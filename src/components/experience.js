import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBookmark } from "react-icons/fa";

const Experience = () => {
  const [header] = React.useState({ mainHeader: "EXPERIENCE" });
  const [state] = React.useState([
    {
      id: 1,
      title: "Mentor Counsels Hub",
      text: "Counselshub is a Media & Advertising industry that works in the fields of freelancing, digital marketing, blogging, email marketing, and content writing. We provide you with the knowledge of trending topics of the world in a short and easy-to-understand way.",
    },
    {
      id: 2,
      title: "Entrepreneurship Development Cell, BIT Mesra",
      text: "I have landed my expertise in the team of Finance for different Summits. I contributed to the cell by raising the funds by bringing the potential sponsors and worked for the external affairs, event, and publicity teams.",
    },
    {
      id: 3,
      title: "Society for Data Science",
      text: "Society for Data Science eyesights me to take the tentative decisions and make it right. I contributed to finance, social and outreach team of the club. I'm also the Social and Outreach Co-ordinator of the club. I bring forth the strong network.",
    },
    {
      id: 4,
      title: "ECE Society",
      text: "ECE Society has excerpted my hidden skills and empowered me to work for the designing, event and team managing. This help me to stand out from the crowd with the prospective ideas.",
    },
    {
      id: 5,
      title: "Influencer Unschool",
      text: "I was a sales and marketing intern for Unschool. I have given remarkable results in just two weeks by selling the courses worth 5k+. My communication and convincing skills really helped me to achieve the weekly target.",
    },
    {
      id: 6,
      title: "Marque Career",
      text: "I worked as a freelancer for the Marque Career organization. Here I have managed their blogging website, content creation, and social media accounts which created a positive impact on their business growth.",
    },
    {
      id: 7,
      title: "Casio India",
      text: "It was two months internship program as a campus ambassador. I unboxed the Casio product and promoted their brands. I have also conducted a small session to explain the product features.",
    },
    {
      id: 8,
      title: "College Dunia",
      text: "I become the face of my college and worked as a campus ambassador for the Collegedunia. I contributed to the firm by bringing the genuine reviews of the different colleges.",
    },
    {
      id: 9,
      title: "Carrers360",
      text: "I got the call to work as a campus ambassador for the Careers360. There I shared the reviews and provided them with the actual data and stats of the college.",
    },
  ]);
  return (
    <div className="container-fluid experience" id="experience">
      <div className="common">
        <h3 className="main_header">{header.mainHeader}</h3>
      </div>
      <div className="row">
        {state.map((info) => (
          <div className="col-sm-4">
            <div className="experience_box effect">
              <FaBookmark className="experience_icons" />
              <div className="experience_heading">{info.title}</div>
              <div className="experience_p">{info.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
