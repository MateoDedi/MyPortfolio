import { Container, Row, Col, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/JOBtracker_img_display.png";
import projImg2 from "../assets/img/BEMOVIES_imgimg_display.png";
import projImg3 from "../assets/img/meal_finder_img_display.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {

  const projects = [
    {
      title: "Job Search Tracker",
      description: "Job Tracker Website to keep track of job applications. Built with Javascript, Node.js, Express, and MongoDB.",
      imgUrl: projImg1,
      projUrl: "https://mah-search.vercel.app"
    },
    {
      title: "BeMovies",
      description: "BeMovies is a movie database website that allows users to search for movies and view details. Built with Javascript, CSS and HTML.",
      imgUrl: projImg2,
      projUrl: "https://mateodedi.github.io/BeMovies/"
    },
    {
      title: "Meal Finder",
      description: "A simple website that helps you find your next meal by fetching data from an API. Made with Javascript, SASS and HTML",
      imgUrl: projImg3,
      projUrl: "https://mateodedi.github.io/Meal_Finder/"
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
              <div>
                <h2>Projects</h2>
                <p>A selection of projects that I am most proud of displaying!
                  <br/>
                  <br/>
                  Clicking on the images will redirect you to their respective deployed websites!
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp">
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
              </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bir"></img>
    </section>
  )
}
