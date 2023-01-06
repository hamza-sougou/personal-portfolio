import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import logo_1 from "../assets/img/logo_1.png";
import logo_2 from "../assets/img/logo_2.png";
import logo_3 from "../assets/img/logo_3.png";
import logo_4 from "../assets/img/logo_4.png";
import logo_5 from "../assets/img/logo_5.png";
import logo_6 from "../assets/img/logo_6.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Aïshadi Wüssulan",
      description: "Parfumerie & encens",
      imgUrl: logo_1,
    },
    {
      title: "Dark Dream",
      description: "Marque de vêtement",
      imgUrl: logo_2,
    },
    {
      title: "VI",
      description: "Constructeur de Jaccuzi",
      imgUrl: logo_3,
    },
    {
      title: "My Digitalex ",
      description: "Agence Digital Marketing",
      imgUrl: logo_4,
    },
    {
      title: "Abroad with LOVE",
      description: "Agence de voyage || Non validé",
      imgUrl: logo_5,
    },
    {
      title: "Al Marinas",
      description: "Restaurant bar-lounge",
      imgUrl: logo_6,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projets</h2>
                  <p>Petite expo de quelques une de mes créations</p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                defaultActiveKey="/home"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Logos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Divers</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Sites web</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  En cours de développement...
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  En cours de développement...
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
