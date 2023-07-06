import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import stock from "../../assets/images/profile-stock.jpeg";
import caro1 from "../../assets/images/caro-pic2_208x295.jpeg";
import caro3 from "../../assets/images/caro-pic3.jpeg";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="bio">
      <div className="profile-body">
        <img className="artist" src={stock} alt="Artist Picture" />
        <div>
          <div class="jumbotron">
            <h1 class="display-8">Artist Name</h1>
            <p class="lead">
              Freelance artist specializing in captivating visual narratives
              that transcend boundaries, blending intricate brushstrokes with
              vivid imagination to evoke profound emotions and spark
              thought-provoking conversations
            </p>
            <div class="my-2"> </div>

            <p class="lead">
              <a class="btn btn-primary btn-lg" href="#!" role="button">
                Contact
              </a>
            </p>
            <h2>My Work</h2>
            <div style={{ display: "flex", width: 1000, padding: 40 }}>
              <Carousel>
                <Carousel.Item interval={10000}>
                  <img className="carousel-image" src={caro3} alt="One" />
                  <Carousel.Caption>
                    <h4></h4>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                  <img className="carousel-image" src={caro1} alt="Two" />
                  <Carousel.Caption>
                    <h4></h4>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className="price-container">
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
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <h2>$</h2>
            <hr />
            <p>blah</p>
            <button className="buy-button">Buy Now</button>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <h2>$$</h2>
            <hr />
            <p>blah</p>
            <button className="buy-button">Buy Now</button>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <h2>$$$</h2>
            <hr />
            <p>blah</p>
            <button className="buy-button">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="portfolio">
        <h1 className="h1"></h1>
      </div>
    </div>
  );
}

export default Tabs;
