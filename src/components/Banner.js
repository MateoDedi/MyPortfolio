import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/banner_photo.jpg";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  // eslint-disable-next-line no-unused-vars
  const [__, setIndex] = useState(1);
  
  const toRotate = ["Software Developer", "Web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`Hi! I'm Mateo and I'm a`} <br />{" "}
                <span
                  className="txt-rotate"
                  dataperiod="500"
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                👋 Hello! I'm Mateo Dedi, a passionate full stack developer with a strong foundation in frontend technologies 
                    and a growing focus on backend development, 
                    especially with Java. I'm currently expanding my skills through the University of Helsinki's 
                    Java Programming MOOC, where I'm honing my understanding of object-oriented programming, 
                    algorithms, and clean code principles. I enjoy creating efficient, scalable software 
                    solutions and continuously learning new technologies to tackle complex challenges.
              </p>
              <a className="con" href="#connect">
                <button className="con-btn">
                  Let's Connect <ArrowRightCircle size={25} />
                </button>
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
