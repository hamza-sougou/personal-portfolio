import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import circular65 from "../assets/img/circular-65.png";
import circular80 from "../assets/img/circular-80.png";
import circular85 from "../assets/img/circular-85.png";
import circular95 from "../assets/img/circular-95.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Compétences</h2>
              <p></p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={circular80} alt="Image" />
                  <h5>Frontend</h5>
                </div>
                <div className="item">
                  <img src={circular65} alt="Image" />
                  <h5>Backend</h5>
                </div>
                <div className="item">
                  <img src={circular85} alt="Image" />
                  <h5>Graphic Design</h5>
                </div>
                <div className="item">
                  <img src={circular95} alt="Image" />
                  <h5>Wordpress</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
