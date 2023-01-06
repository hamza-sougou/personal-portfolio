import { useEffect, useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Abonnez-vous à ma Newsletter!</h3>
            {status === "sending" && <Alert>En cours d'envoi...</Alert>}
            {status === "sending" && <Alert variant="danger">{message}</Alert>}
            {status === "sending" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Adresse Mail"
                />
                <button type="submit">Soumettre</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
