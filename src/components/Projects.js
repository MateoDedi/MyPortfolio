import { Container, Row, Col, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/JOBtracker_img.PNG";
import projImg2 from "../assets/img/BEMOVIES_img.PNG";
import projImg3 from "../assets/img/project1.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      description: "Job Tracker Website to keep track of job applications. Built with React, Node.js, Express, and MongoDB.",
      imgUrl: projImg1,
    },
    {
      description: "BeMovies is a movie database website that allows users to search for movies and view details. Built with Javascript, CSS and HTML.",
      imgUrl: projImg2,
    },
    {
      description: "Design & Development",
      imgUrl: projImg3,
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A selection of projects that I am most proud of displaying!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bir"></img>
    </section>
  )
}
