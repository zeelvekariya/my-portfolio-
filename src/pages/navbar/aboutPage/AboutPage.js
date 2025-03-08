/*
Header.js
Zeel Rameshbhai Vekariya
301489564
29 january 2025
*/
import React from "react";
import "./AboutPage.css";
import img from "../../../../src/assets/images/img.jpg";
import { FiDownload } from "react-icons/fi";
import cvFile from "./cv.pdf";

const AboutPage = () => {
  return (
    <div className="homepage_main">
      <div className="homepage_inner">
        <div className="image_self">
          <div className="image_parent_class">
            <div className="image_main_inner_class">
              <img src={img} alt="self portrait" className="image_self" />
            </div>
            <div className="about_page">
              <h3 className="welcome_text">Zeel Vekariya</h3>
            </div>
          </div>
          <h5 className="student_detail">
            After HSC with a consequence in Arts, I decided to pursue my passion
            for programming. I enrolled in a coding bootcamp and learned
            front-end web development. My favorite part of programming is the
            problem-solving aspect. I love the feeling of finally figuring out a
            solution to a problem. My core stack is React, Next.js.
          </h5>
        </div>
        <div className="download_cv">
          <div className="download_cv_inner">
            <a
              href={cvFile}
              className="download_cv_pdf"
              target="_blank"
              download="cv.pdf" // Optional: Customize the download file name
            >
              Download My CV <FiDownload />
            </a>
          </div>
          <div className="download_cv_inner"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
