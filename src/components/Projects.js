import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Projects() {
  const projectList = [
    {
      title: "Personal Portfolio",
      description: "A fully responsive portfolio website built using React, Bootstrap, and custom CSS to showcase skills, experience, and projects.",
      link: "https://your-portfolio-link.com"
    },
    {
      title: "Weather App",
      description: "A weather forecasting web app using OpenWeatherMap API, built with React and styled using Bootstrap. Provides live weather updates by city.",
      link: "https://your-weather-app-link.com"
    },
    {
      title: "Todo List App",
      description: "A simple but functional Todo list application with features like add, delete, and mark complete. Built using React hooks.",
      link: "https://your-todo-app-link.com"
    }
  ];

  return (
    <div className="py-5" id="projects">
      <Container>
        <h2 className="text-center mb-4">My Projects</h2>
        <Row>
          {projectList.map((project, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant="primary"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;

