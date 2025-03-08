/*
Header.js
Zeel Rameshbhai Vekariya
301489564
29 january 2025
*/
import React from "react";
import project_img from "../../../assets/images/project_img.webp";
import wordanalytics from "../../../assets/wordanalytics.webp";
import webdevelopment from "../../../assets/images/webdevelopment.webp";
import "./ProjectPage.css";
const ProjectPage = () => {
  return (
    <div className="project_page_main">
      <div className="project_page">
        <h3 className="welcome_text">My projects</h3>
        <div className="main_project_comment">
          <div className="corp_comment">
            <div className="inner_flex_div_project">
              <div className="left_skill_image">
                <h5 className="cop_title">CorpComment</h5>
                <p className="work_developer_project">
                  I worked as a full-stack developer on this startup project for
                  1 years. Users can give public feedback to companies.
                </p>
                <ul className="project_develop_main_dec">
                  <li className="project_develop_inner">REACT</li>
                  <li className="project_develop_inner">Next.js</li>
                  <li className="project_develop_inner">MongoDB</li>
                  <li className="project_develop_inner">Tailwind</li>
                  <li className="project_develop_inner">Prisma</li>
                </ul>
              </div>

              <div className="right_skill_image">
                <img
                  src={webdevelopment}
                  alt=""
                  className="inner_skill_image"
                />
              </div>
            </div>
          </div>
          <div className="corp_comment">
            <div className="inner_flex_div_project">
              <div className="left_skill_image">
                <h5 className="cop_title">rmtDev</h5>
                <p className="work_developer_project">
                  Job board for remote developer jobs. I was the front-end
                  developer. It has features like filtering, sorting and
                  pagination.
                </p>
                <ul className="project_develop_main_dec">
                  <li className="project_develop_inner">REACT</li>
                  <li className="project_develop_inner">Next.js</li>
                  <li className="project_develop_inner">MongoDB</li>
                  <li className="project_develop_inner">Tailwind</li>
                  <li className="project_develop_inner">Redux</li>
                </ul>
              </div>

              <div className="right_skill_image">
                <img src={project_img} alt="" className="inner_skill_image" />
              </div>
            </div>
          </div>
          <div className="corp_comment">
            <div className="inner_flex_div_project">
              <div className="left_skill_image">
                <h5 className="cop_title">Word Analytics</h5>
                <p className="work_developer_project">
                  A public web app for quick analytics on text. It shows word
                  count, character count and social media post limits.
                </p>
                <ul className="project_develop_main_dec">
                  <li className="project_develop_inner">REACT</li>
                  <li className="project_develop_inner">Next.js</li>
                  <li className="project_develop_inner">SQL</li>
                  <li className="project_develop_inner">Tailwind</li>
                  <li className="project_develop_inner">Framer</li>
                </ul>
              </div>

              <div className="right_skill_image">
                <img src={wordanalytics} alt="" className="inner_skill_image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
