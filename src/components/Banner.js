import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import CV from "../assets/img/CV_HAMZA2022.pdf";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Développeur Web", "Infographe"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

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
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeInUp" : ""
                  }
                >
                  <span className="tagline">Bienvenue sur mon Portfolio</span>
                  <h1>
                    {`Salut! Moi c'est Hamza`} <br />{" "}
                  </h1>
                  <h2>
                    {`aka`} <span className="pseudo">{`Coffeeholic`}</span>{" "}
                    {`Designer`}
                    <br />
                  </h2>
                  <h2>
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='["Développeur Web", "Infographe"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h2>
                  <p>
                    Je suis Hamza Sougou, un jeune étudiant en programmation web
                    et très passionné par l'univers du graphisme.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    <a href={CV} download target="_blank">
                      Télécharger mon CV <ArrowRightCircle size={25} />
                    </a>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
