import axios from "axios";
import "./style.css";
import React, { useState } from "react";
import { Container, Button, Card, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";

const MainPage = () => {
  const { token, isLoggedIn } = useSelector((state) => {
    return {
      token: state.users.token,
      isLoggedIn: state.users.isLoggedIn,
    };
  });

  const [product, setProduct] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addItem = () => {
    axios
      .post(
        "http://localhost:5000/product",
        {
          productName,
          description,
          price,
          url,
        },
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        }
      )
      .then((result) => {
        setProduct(result.result);
        console.log(result);
      })
      .catch((err) => {g
        console.log(err);
      });
  };

  return (
    <div>
      <Container className="mt-5 ">
        <Button variant="warning" onClick={handleShow}>
          Add Item
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setProductName();
                  }}
                  type="text"
                  placeholder="Product Name"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>URL</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setUrl();
                  }}
                  type="text"
                  placeholder="Product URL"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setDescription();
                  }}
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Price</Form.Label>
                <Form.Control
                  onChange={(e) => {
                    setPrice();
                  }}
                  type="number"
                  placeholder="Price"
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              onClick={() => {
                handleClose();
                addItem();
              }}
              variant="warning"
            >
              Add
            </Button>
          </Modal.Footer>
        </Modal>{" "}
        <div className="container deal-con cont">
          <section className="deal-sec">
            <header className="deal-head">
              <h2 className="deal-title">New Product </h2>
            </header>
            <article className="deal-card">
              <Row className="d-md-flex deal-grid">
                <Col md="6" lg={"3"} className="col-12 mb-5 product">
                  {" "}
                  <Card className="deal-gri">
                    <figure>
                      <Card.Img
                        variant="top"
                        src="//main-cdn.grabone.co.nz/goimage/325x225/dfcf94ebb30d8e74723c0d8bc6c0ba815dcaeed5.jpg "
                        alt="One-Hour Pool Table Game incl. Two Cans of Soft Drink or Two Heineken 0% "
                      />
                      <figcaption>
                        <p>
                          {" "}
                          Two-Person Boutique Dining & Movie Package incl.
                          Tickets
                        </p>
                      </figcaption>
                    </figure>

                    <Card.Body>
                      <Card.Title>
                        <header className="top-card">
                          <h5 class="card-text">Boutique Dining </h5>
                          <div className="text-cont">
                            <p>
                              {" "}
                              <span className="name-Stores">
                                Monterey Cinemas Takapuna
                              </span>
                            </p>
                          </div>
                        </header>
                      </Card.Title>
                      <Card.Text>
                        <footer className="bottom-card">
                          <div className="text-right">
                            <p className="from-word">from</p>
                            <div>
                              <span className="price"> $195</span>
                            </div>
                          </div>
                        </footer>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="6" lg={"3"} className=" product">
                  {" "}
                  <Card className="deal-gri">
                    <figure>
                      <Card.Img
                        variant="top"
                        alt="Luxury Five-Star Auckland Stay for Two at Cordis Auckland incl. Buffet Breakfast, $50 Food & Beverage Credit, Drinks, Pool & Spa Access, Daily Parking & Late Checkout - Options to Stay in the Pinnacle Tower & Up to Three Nights with $150 Credit"
                        src="//main-cdn.grabone.co.nz/goimage/325x225/384a963932ad1eae27aa16e7f54b06e90cae3d44.jpg"
                      />
                      <figcaption>
                        <p>
                          Matariki Deal – One-Night Auckland CBD Stay for Two in
                        </p>
                      </figcaption>
                    </figure>

                    <Card.Body>
                      <Card.Title>
                        <header className="top-card">
                          <h5 class="card-text">4-Star CBD Auckland </h5>
                          <div className="text-cont">
                            <p>
                              {" "}
                              <span className="name-Stores">
                                Mercure Hotel Queen Street{" "}
                              </span>
                            </p>
                          </div>
                        </header>
                      </Card.Title>
                      <Card.Text>
                        <footer className="bottom-card">
                          <div className="text-right">
                            <p className="from-word">from</p>
                            <div>
                              <span className="price"> $195</span>
                            </div>
                          </div>
                        </footer>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="6" lg={"3"} className="product">
                  <Card className="deal-gri">
                    <figure>
                      <Card.Img
                        variant="top"
                        alt="Two-Person Boutique Dining & Movie Package incl. Tickets, Pizza, Two Choc Top Ice Creams & Two Glasses of Prosecco, Wine or Beer - Options for up to Eight People"
                        src="//main-cdn.grabone.co.nz/goimage/325x225/45a3bffce1d7d6e2269b487ccec9fd42807c16da.jpg"
                      />
                      <figcaption>
                        <p> 2M Golf Cage Tent - Two Colours Available</p>
                      </figcaption>
                    </figure>

                    <Card.Body>
                      <Card.Title>
                        <header className="top-card">
                          <h5 class="card-text">HIFU Treatment Package</h5>
                          <div className="text-cont">
                            <p>
                              {" "}
                              <span className="name-Stores">
                                Honda Stores Auckland
                              </span>
                            </p>
                          </div>
                        </header>
                      </Card.Title>
                      <Card.Text>
                        <footer className="bottom-card">
                          <div className="text-right">
                            <p className="from-word">from</p>
                            <div>
                              <span className="price"> $195</span>
                            </div>
                          </div>
                        </footer>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="6" lg={"3"} className="product">
                  <Card className="deal-gri">
                    <figure>
                      <Card.Img
                        variant="top"
                        alt="One-Hour Axe Throwing Experience - Option for up to Four People"
                        src="//main-cdn.grabone.co.nz/goimage/325x225/4e878fd70b0766c99669fc3e1a510a30a75827ca.jpg"
                      />
                      <figcaption>
                        <p> 2M Golf Cage Tent - Two Colours Available</p>
                      </figcaption>
                    </figure>

                    <Card.Body>
                      <Card.Title>
                        <header className="top-card">
                          <h5 class="card-text">HIFU Treatment Package</h5>
                          <div className="text-cont">
                            <p>
                              {" "}
                              <span className="name-Stores">
                                Honda Stores Auckland
                              </span>
                            </p>
                          </div>
                        </header>
                      </Card.Title>
                      <Card.Text>
                        <footer className="bottom-card">
                          <div className="text-right">
                            <p className="from-word">from</p>
                            <div>
                              <span className="price"> $195</span>
                            </div>
                          </div>
                        </footer>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="6" lg={"3"} className="product mt-1">
                  {" "}
                  <Card className="deal-gri">
                    <figure>
                      <Card.Img
                        variant="top"
                        alt="Luxury Five-Star Auckland Stay for Two at Cordis Auckland incl. Buffet Breakfast, $50 Food & Beverage Credit, Drinks, Pool & Spa Access, Daily Parking & Late Checkout - Options to Stay in the Pinnacle Tower & Up to Three Nights with $150 Credit"
                        src="//main-cdn.grabone.co.nz/goimage/325x225/62eb86730ba65ee45c1d77b863f876308ca5df8d.jpg"
                      />
                      <figcaption>
                        <p> 2M Golf Cage Tent - Two Colours Available</p>
                      </figcaption>
                    </figure>

                    <Card.Body>
                      <Card.Title>
                        <header className="top-card">
                          <h5 class="card-text">HIFU Treatment Package</h5>
                          <div className="text-cont">
                            <p>
                              {" "}
                              <span className="name-Stores">
                                Honda Stores Auckland
                              </span>
                            </p>

                            <p>
                              {" "}
                              <span className="name-ops">Auckland </span>
                            </p>
                          </div>
                        </header>
                      </Card.Title>
                      <Card.Text>
                        <footer className="bottom-card">
                          <div className="text-right">
                            <p className="from-word">from</p>
                            <div>
                              <span className="price"> $195</span>
                            </div>
                          </div>
                        </footer>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="6" lg={"3"} className="product">
                  {" "}
                  <Card className="deal-gri">
                    <figure>
                      <Card.Img
                        variant="top"
                        alt="Luxury Five-Star Auckland Stay for Two at Cordis Auckland incl. Buffet Breakfast, $50 Food & Beverage Credit, Drinks, Pool & Spa Access, Daily Parking & Late Checkout - Options to Stay in the Pinnacle Tower & Up to Three Nights with $150 Credit"
                        src="//main-cdn.grabone.co.nz/goimage/325x225/b66b8a3e8a52670f98b8621b66b3211ebcce3288.jpg"
                      />
                      <figcaption>
                        <p> 2M Golf Cage Tent - Two Colours Available</p>
                      </figcaption>
                    </figure>

                    <Card.Body>
                      <Card.Title>
                        <header className="top-card">
                          <h5 class="card-text">HIFU Treatment Package</h5>
                          <div className="text-cont">
                            <p>
                              {" "}
                              <span className="name-Stores">
                                Honda Stores Auckland
                              </span>
                            </p>
                          </div>
                        </header>
                      </Card.Title>
                      <Card.Text>
                        <footer className="bottom-card">
                          <div className="text-right">
                            <p className="from-word">from</p>
                            <div>
                              <span className="price"> $195</span>
                            </div>
                          </div>
                        </footer>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="6" lg={"3"} className="product">
                  {" "}
                  <Card className="deal-gri">
                    <figure>
                      <Card.Img
                        variant="top"
                        alt="Luxury Five-Star Auckland Stay for Two at Cordis Auckland incl. Buffet Breakfast, $50 Food & Beverage Credit, Drinks, Pool & Spa Access, Daily Parking & Late Checkout - Options to Stay in the Pinnacle Tower & Up to Three Nights with $150 Credit"
                        src="//main-cdn.grabone.co.nz/goimage/325x225/8dfb9d97b6a761931edbb3c0e39e38ed70cb7274.jpg"
                      />
                      <figcaption>
                        <p> 2M Golf Cage Tent - Two Colours Available</p>
                      </figcaption>
                    </figure>

                    <Card.Body>
                      <Card.Title>
                        <header className="top-card">
                          <h5 class="card-text">HIFU Treatment Package</h5>
                          <div className="text-cont">
                            <p>
                              {" "}
                              <span className="name-Stores">
                                Honda Stores Auckland
                              </span>
                            </p>
                          </div>
                        </header>
                      </Card.Title>
                      <Card.Text>
                        <footer className="bottom-card">
                          <div className="text-right">
                            <p className="from-word">from</p>
                            <div>
                              <span className="price"> $195</span>
                            </div>
                          </div>
                        </footer>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="6" lg={"3"} className="product">
                  {" "}
                  <Card className="deal-gri">
                    <figure>
                      <Card.Img
                        variant="top"
                        alt="Luxury Five-Star Auckland Stay for Two at Cordis Auckland incl. Buffet Breakfast, $50 Food & Beverage Credit, Drinks, Pool & Spa Access, Daily Parking & Late Checkout - Options to Stay in the Pinnacle Tower & Up to Three Nights with $150 Credit"
                        src="//main-cdn.grabone.co.nz/goimage/325x225/63b7eb1e3b90fd87c7d876b29810cb58d478226c.jpg"
                      />
                      <figcaption>
                        <p> 2M Golf Cage Tent - Two Colours Available</p>
                      </figcaption>
                    </figure>

                    <Card.Body>
                      <Card.Title>
                        <header className="top-card">
                          <h5 class="card-text">HIFU Treatment Package</h5>
                          <div className="text-cont">
                            <p>
                              {" "}
                              <span className="name-Stores">
                                Honda Stores Auckland
                              </span>
                            </p>
                          </div>
                        </header>
                      </Card.Title>
                      <Card.Text>
                        <footer className="bottom-card">
                          <div className="text-right">
                            <p className="from-word">from</p>
                            <div>
                              <span className="price"> $195</span>
                            </div>
                          </div>
                        </footer>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </article>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default MainPage;
