import { useState } from "react";
import { Button, Card, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import art from "../../assets/images/art.jpg";
import art1 from "../../assets/images/art1.JPG";
import art2 from "../../assets/images/art2.jpg";
import art3 from "../../assets/images/art3.JPG";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <Row className="px-4 my-2">
        <Col sm={3}>
          <Image src="https://picsum.photos/id/1005/5000/3333" fluid rounded />
        </Col>
        <Col sm={5}>
          <h1>artist name</h1>
          <p class="mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <a href="https://www.google.com">
            <Button variant="outline-info">Contact</Button>
          </a>
        </Col>
      </Row>

      {/* cards for pics*/}
      <Row>
        <Col
          className="text-center my-5 py-4"
          style={{
            fontSize: "16px",
            borderBottom: "2px solid black",
            fontWeight: "bold",
          }}
        >
          <Card.Body>Explore art packages below</Card.Body>
        </Col>
        <div
          className="d-flex justify-content-center"
          style={{ margin: "auto" }}
        >
          <Card
            className="m-4"
            style={{
              width: "400px",
            }}
          >
            <Card.Body>
              <div className="price-tabs">
                <button
                  className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(1)}
                >
                  Basic
                </button>
                <button
                  className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(2)}
                >
                  Standard
                </button>
                <button
                  className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(3)}
                >
                  Premium
                </button>
              </div>

              <div className="content-tabs">
                <div
                  className={
                    toggleState === 1 ? "content active-content" : "content"
                  }
                >
                  <h2>$29.99</h2>
                  <hr />
                  <p>
                    Basic Package: Affordable digital prints and art for
                    enthusiasts.
                  </p>
                  <button className="buy-button">Buy</button>
                </div>

                <div
                  className={
                    toggleState === 2 ? "content active-content" : "content"
                  }
                >
                  <h2>$79.99</h2>
                  <hr />
                  <p>
                    Standard Package: Digital and physical prints with
                    personalized consultation included.
                  </p>
                  <button className="buy-button">Buy</button>
                </div>

                <div
                  className={
                    toggleState === 3 ? "content active-content" : "content"
                  }
                >
                  <h2>$299.99</h2>
                  <hr />
                  <p>
                    Premium Package: Exclusive access to original artworks with
                    tailored services and personalized framing options.
                  </p>
                  <button className="buy-button">Buy</button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: "18rem", backgroundColor: "black" }}>
            <Card.Img
              variant="top"
              src={art}
              style={{ objectFit: "cover", height: "18rem", width: "18rem" }}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>

              <Button variant="outline-info">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={art1}
              style={{ objectFit: "cover", height: "18rem", width: "18rem" }}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>

              <Button variant="outline-info">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={art3}
              style={{ objectFit: "cover", height: "18rem", width: "18rem" }}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>

              <Button variant="outline-info">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={art2}
              style={{ objectFit: "cover", height: "18rem", width: "18rem" }}
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>

              <Button variant="outline-info">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Tabs;
