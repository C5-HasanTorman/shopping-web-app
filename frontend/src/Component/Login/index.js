import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";

import { setLogin } from "../../redux/reducers/users";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);

  // useDispatch instens
  const dispatch = useDispatch();

  // to assess to store use useSelector
  const { isLoggedIn } = useSelector((state) => {
    return {
      isLoggedIn: state.users.isLoggedIn,
    };
  });

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      console.log(res);
      if (res) {
        dispatch(setLogin(res.data));
        setStatus(true);
        setMessage("");
        console.log(res.data);
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while Login, please try again");
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      history("/home");
    }
  });

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
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Example@gmail.com"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group className="d-flex justify-content-center">
                    <Button
                      className="mt-4"
                      variant="warning"
                      onClick={() => {
                        login();
                      }}
                    >
                      Login
                    </Button>
                  </Form.Group>
                  <Form.Group className="d-flex justify-content-center">
                    <Alert
                      variant={
                        message ? (status ? "success " : "danger ") : "light "
                      }
                      className="mt-4"
                    >
                      {message}
                    </Alert>
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
