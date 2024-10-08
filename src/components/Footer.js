import { Container, Navbar, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Portfolio_logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mateo-dedi/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/MateoDedi" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="GitHub" /></a>
            </div>
            <p>Thank you for visiting my Portfolio :)</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
