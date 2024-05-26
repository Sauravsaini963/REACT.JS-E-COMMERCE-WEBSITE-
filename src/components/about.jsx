import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import company from "../assets/company.jpg";

const About = () => {
  return (
    <Container fluid style={{ backgroundColor: "#ECECEC" }} className="py-5">
      <Container className="py-1">
        <Row className="align-items-center">
          <h1 className="about-heading ms-2">ABOUT US</h1>
          <Col md={6}>
            <Card className="mb-3">
              <Card.Img
                variant="top"
                src={company}
                alt="UniqueMart Mission"
                className="about-image"
              />
              <Card.Body>
                <Card.Title>
                  Our Mission at Unique
                  <span style={{ color: "red" }}>Mart</span>
                </Card.Title>
                <Card.Text>
                  At UniqueMart, our goal is to redefine shopping by providing
                  unique, high-quality products at competitive prices. We are
                  committed to innovation, excellence, and delivering
                  unparalleled customer experiences. By leveraging cutting-edge
                  technology and creative solutions, we strive to meet the
                  evolving needs of our customers and make a positive impact in
                  the communities we serve.
                </Card.Text>
                <Button variant="success">Learn More About Us</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <h2>
              Welcome to Unique<span style={{ color: "red" }}>Mart</span>
            </h2>
            <p>
              Since our founding, UniqueMart has been at the forefront of the
              retail industry, offering an extensive range of products that
              cater to the diverse needs of our customers. Our dedication to
              quality, innovation, and customer satisfaction has been the
              cornerstone of our success.
            </p>
            <p>
              We pride ourselves on our ability to offer something special to
              each customer, ensuring that everyone who shops with us leaves
              happy. From the latest tech gadgets to eco-friendly home
              solutions, UniqueMart is your go-to destination for discovering
              something new and exciting at every turn.
            </p>
            <p>
              Join us on our journey as we continue to grow, innovate, and lead
              the way in retail. At UniqueMart, your shopping experience is our
              top priority, and we're dedicated to ensuring you find exactly
              what you're looking for.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
