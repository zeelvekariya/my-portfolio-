/*
Header.js
Zeel Rameshbhai Vekariya
301489564
29 january 2025
*/
import React from "react";
import { IoIosSend } from "react-icons/io";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./ContactPage.css";

const ContactPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Collect form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Perform any form submission logic here (e.g., sending data to an API)
    console.log("Form Data:", data);

    // API call with a timeout
    setTimeout(() => {
      // Redirect to the home page after form submission
      navigate("/home"); // Replace "/" with your home page route
    }, 1000); // Simulate a 1-second delay for the API call
  };

  return (
    <div className="contact_page_detail">
      <div className="contact_page_inner">
        <h3 className="welcome_text">Contact Me</h3>
        <h6 className="portfolio_head_six">
          Please contact me directly at{" "}
          <a href="mailto:zeelvekariya2073@gmail.com" className="email_name">
            zeelvekariya2073@gmail.com
          </a>
          <span className="contact_number"> : +1 (647) 389-2073 </span> or
          through this form.
        </h6>
      </div>
      <div className="from_contact_list">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              placeholder="Your first name"
              className="name_add_user"
              name="firstName"
              required
            />
          </div>

          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              placeholder="Your last name"
              className="name_add_user"
              name="lastName"
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              placeholder="Your email"
              className="name_add_user"
              name="email"
              required
            />
          </div>

          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              className="name_add_user"
              placeholder="Your message"
              name="message"
              required
            />
          </div>

          <button type="submit">
            Send Message <IoIosSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
