import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form, Card, FloatingLabel, Button } from "react-bootstrap";

const ForgetPassword = () => {
	const nevigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    console.log(event);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div
      className="col d-flex justify-content-center align-items-center"
      style={{ height: "100vh", backgroundColor: "#0d6efd" }}
    >
      <Card
        className="card text-center"
        style={{ width: "25rem", backgroundColor: "white" }}
      >
        <Card.Header style={{ backgroundColor: "white", borderBottom: "0px" }}>
          <h3>Forget Password</h3>
        </Card.Header>
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="email" required />
              <Form.Control.Feedback type="invalid">
                Please Enter Valid Email
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form>
        </Card.Body>
        <Card.Footer>
          <Row className="mb-2">
            <Col md={12} >
              <Button variant="primary" type="submit" >
                Submit
              </Button>
			  <Button variant="danger" type="button" style={{marginLeft:"3%"}} onClick={() => nevigate('/')}>
                Back
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ForgetPassword;
