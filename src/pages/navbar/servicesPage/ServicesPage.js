/*
Header.js
Zeel Rameshbhai Vekariya
301489564
29 january 2025
*/
import "./ServicePage.css";
import project_img from "../../../assets/images/mobile_app.jpg";
import graphic_design from "../../../assets/graphic_design.png";
import web from "../../../assets/images/web.webp";

const ServicesPage = () => {
  return (
    <div className="service_top_class">
      <div className="services_section">
        <div className="service_list">
          <div className="service_item">
            <h3 className="Service_details_add">Custom Web Development:</h3>
            <p className="design_service_text">
              I design and develop responsive, user-friendly websites tailored
              to your business needs. Using modern technologies like React.js
              and Node.js, I ensure your site is fast, scalable, and optimized
              for SEO.
            </p>
          </div>
          <div className="service-item">
            <h3 className="Service_details_add">Branding & Graphic Design:</h3>
            <p className="design_service_text">
              I create visually stunning designs that reflect your brand’s
              identity and resonate with your audience. From logos to marketing
              materials, I focus on creativity, consistency, and impact.
            </p>
          </div>
          <div className="service_item">
            <h3 className="Service_details_add">Mobile App Development:</h3>
            <p className="design_service_text">
              "Mobile App Development: I build cross-platform mobile
              applications that deliver seamless user experiences on both iOS
              and Android. Using frameworks like Flutter and React Native, I
              ensure your app is fast, reliable, and scalable. Let’s create an
              app that stands out in the market!"
            </p>
          </div>
        </div>
        <div className="image_service_main">
          <div className="image_service_inner">
            <img src={web} alt="" className="service_main_inner_img" />
          </div>
          <div className="image_service_inner">
            <img
              src={graphic_design}
              alt=""
              className="service_main_inner_img"
            />
          </div>
          <div className="image_service_inner">
            <img src={project_img} alt="" className="service_main_inner_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
