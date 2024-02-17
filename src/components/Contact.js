import { React, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  function isValidFirstName(firstName) {
    // First name is required and must be non-empty
    return firstName && firstName.trim() !== "";
  }

  function isValidLastName(lastName) {
    // Last name is optional, but if provided, it must be non-empty
    return !lastName || lastName.trim() !== "";
  }

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function isValidPhoneNumber(phoneNumber) {
    // Allow empty phone number
    if (!phoneNumber) {
      return true;
    }

    const regex = /^[0-9-()+\s]*$/;
    return regex.test(phoneNumber);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidFirstName(formDetails.firstName)) {
      alert("Invalid first name. Please enter a valid first name.");
      return;
    }

    if (!isValidLastName(formDetails.lastName)) {
      alert(
        "Invalid last name. Please enter a valid last name or leave it blank."
      );
      return;
    }

    if (!isValidEmail(formDetails.email)) {
      alert("Invalid email. Please enter a valid email address.");
      return;
    }

    if (!isValidPhoneNumber(formDetails.phoneNumber)) {
      alert(
        "Invalid phone number. Please enter a valid phone number or leave it blank."
      );
      return;
    }

    // If all validations pass, change the button's text
    setButtonText("Sending...");

    let response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(formDetails),
    });

    let result = await response.json();

    setFormDetails(formInitialDetails);

    if (result.code === 200) {
      setStatus({
        success: true,
        message:
          "Message sent successfully! I will get back to you as sson as possible!",
      });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
    setButtonText("Send");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact Me" />
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2>Get In Touch</h2>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone No."
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea
                      rows="6"
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                    ></textarea>
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                  {status.message && (
                    <Row>
                      <p
                        className={
                          status.success === false ? "danger" : "success"
                        }
                      >
                        {status.message}
                      </p>
                    </Row>
                  )}
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
