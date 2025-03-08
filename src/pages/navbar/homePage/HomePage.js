/*
Header.js
Zeel Rameshbhai Vekariya
301489564
29 january 2025
*/
import React from "react";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div>
      <div className="homepage_main">
        <div className="homepage_inner">
          <div className="about_page">
            <h3 className="welcome_text">
              Hello and welcome to my personal portfolio!
            </h3>
            <h5 className="student_detail">
              <span>Hello, I’m Zeel Vekariya,</span> a driven AI software
              engineering student at Centennial College. I enjoy building sites
              & apps. My focus is React. My passion lies in solving complex
              problems and turning challenges into innovative breakthroughs.
            </h5>
            <h3 className="welcome_text">Mission Statement</h3>
            <h5 className="student_detail">
              To design and develop scalable, I am dedicated to accuracy,
              innovation, and using data to tell compelling stories that create
              value. I am passionate about continuous learning, clean code, and
              collaborating with teams to deliver impactful products.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
