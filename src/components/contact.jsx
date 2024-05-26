import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import contactus from "../assets/contactus.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [final, setFinal] = useState([]);
  console.log("final", final);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFinal([...final, formData]);
    console.log(formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Container fluid className="contact-form py-3">
        <Container>
          <Row className="justify-content-between">
            <Col md={6} lg={4}>
              <h1 className="text-center mb-3 mt-4">CONTACT US</h1>
              <div
                className="form-background p-3 text-white"
                style={{ backgroundColor: "#203543", borderRadius: "10px" }}
              >
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>
            <Col md={6}>
              <div className="content ">
                <img
                  src={contactus}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Contact;
