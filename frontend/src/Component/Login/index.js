import React from "react";
import "./style.css";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <div>
      <Container className="mt-5">
        <Row className="d-flex justify-content-center mt-4">
          <Col xs={12} lg={6}>
            <Card className="shadow-lg">
              <Card.Header className="d-flex justify-content-center">
                <h4>Login</h4>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Control
                      className="mb-3"
                      type="email"
                      placeholder="Example@gmail.com"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group className="d-flex justify-content-center">
                    <Button className="mt-4" variant="warning" type="submit">
                      Login
                    </Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
