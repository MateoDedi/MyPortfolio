import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={projUrl} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} alt="proj-img"/>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span style={{ color: 'white' }}>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}
