import React, { useState , useEffect  } from "react";
import { useNavigate } from "react-router-dom";

import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

import { Row, Col, Form, Card, FloatingLabel, Button } from "react-bootstrap";

const Login = () => {
  const nevigate = useNavigate();

  const [validated, setValidated] = useState(false);
  const [ user, setUser ] = useState([]);

  const handleNevigateToForgetPassword = () => {
    nevigate("/forget-password");
  };

  const handleNevigateToCreateProfile = () => {
    nevigate("/create-profile");
  };

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
          <h3>Sign In</h3>
        </Card.Header>
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="floatingInputEmail"
              label="Email"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="email" required />
              <Form.Control.Feedback type="invalid">
                Please Enter Valid Email
              </Form.Control.Feedback>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputPassword"
              label="Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="12345" required />
              <Form.Control.Feedback type="invalid">
                Please Enter Valid Password
              </Form.Control.Feedback>
            </FloatingLabel>
            <Row>
              <Col md={6} className="mb-2">
                <Button
                  variant="primary"
                  style={{ width: "100%" }}
                  type="submit"
                >
                  Sign In
                </Button>
              </Col>
              <Col md={6} className="mb-2">
                <GoogleOAuthProvider clientId="728020871864-hmevc2e45i70s24d9esc1fq4amcvhbto.apps.googleusercontent.com">
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
						setUser(credentialResponse)
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                </GoogleOAuthProvider>
                {/* <Button
                  variant="primary"
                  style={{ width: "100%" }}
                  type="button"
				  onClick={() => login()}
                >
                  Sign In With Google
                </Button> */}
              </Col>
            </Row>
          </Form>
        </Card.Body>
        <Card.Footer>
          <Row className="mb-2">
            <Col md={12}>
              <Button
                variant="danger"
                style={{ width: "100%" }}
                type="button"
                onClick={handleNevigateToCreateProfile}
              >
                Sign Up
              </Button>
            </Col>
          </Row>
          <Row className="mb-2 text-align-center">
            <Col md={12}>
              <Button
                variant="danger"
                style={{ width: "100%" }}
                type="button"
                onClick={handleNevigateToForgetPassword}
              >
                Forget Password
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Login;
