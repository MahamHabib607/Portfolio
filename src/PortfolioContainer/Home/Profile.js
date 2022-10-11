import React from "react";
import Typical from "react-typical";


export default function Profile() {
  return (
    <div className="Profile-container">
      <div className="Profile-parent">
        <div className="Profile-details">
          <div className="colz">
            <a href="https://www.facebook.com ">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.google.com">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="https://www.instagram.com">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="https://twitter.com/i/flow/login">
              <i className="fa fa-twitter-square"></i>
            </a>
          </div>

          <div className="profile-details-name">
            <div className="primary-text">
              {" "}
              Hello , I am <span className="highLighted-text">Maham Habib</span>
            </div>
          </div>

          <div className="profile-details-role">
            <div className="primary-text">
              {" "}
              <span>
                <h1>
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Web Developer",
                      1000,
                      "SQA",
                      1000,
                      "Full Stack Developer",
                      1000,
                      "QA Engineer",
                      1000,
                    ]}
                  />
                </h1>
                <span className="profile-details-tagline">
                  Knack Of Building applications with Frontend and Backend
                </span>
              </span>
            </div>
            <div className="profile-options">
              <button className="btn primary=btn">
                { " " }
                Hire Me </button>
                <a href='maham.pdf' download='Maham_Resume.pdf'>
                  <button className="btn highlighted-btn">GET RESUME</button>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
