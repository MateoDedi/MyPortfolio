import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>About Skills</h2>
              <p>
                Perpetually expanding my toolkit, the skills section unveils a
                pragmatic blend of creativity and technical know-how,
                highlighting a continuous journey of learning new languages and
                technologies!<br></br>
              </p>
              <Carousel
                className="owl-carousel owl-theme skill-slider"
                responsive={responsive}
                infinite={true}
                autoPlay
                autoPlaySpeed={1000}
                pauseOnHover
              >
                <div className="item">
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <h5>REACT.JS</h5>
                </div>
                <div className="item">
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <h5>NODE.JS</h5>
                </div>
                <div className="item">
                  <h5>EXPRESS</h5>
                </div>
                <div className="item">
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <h5>GIT</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="bil" />
    </section>
  );
};
