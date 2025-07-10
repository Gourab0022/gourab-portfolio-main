import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <div className="py-5 bg-light" id="about">
      <Container>
        <h2 className="text-center mb-4">About Me</h2>
        <Row>
          <Col md={6}>
            <p>
              I’m Gourab Mahakud, a passionate Fullstack Developer and UI/UX Designer based in Bhubaneswar, Odisha. I specialize in building responsive websites using HTML, CSS, JavaScript, and React.
            </p>
          </Col>
          <Col md={6}>
            <ul>
              <li><strong>Email:</strong> gourab.mahakud@gmail.com</li>
              <li><strong>Phone:</strong> 8457936351</li>
              <li><strong>Skills:</strong> HTML, CSS,JavaScript, React, Bootstrap</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
