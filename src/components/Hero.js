import React from "react";
import { Container, Button } from "react-bootstrap";

function Hero() {
  return (
    <div className="bg-dark text-white text-center py-5" id="home">
      <Container>
        <h1>Hello, I'm Gourab</h1>
        <p className="lead">Fullstack Developer | UI/UX Designer</p>
        <Button variant="primary" href="#projects"> Click here to See My Work</Button>
      </Container>
    </div>
  );
}

export default Hero;
