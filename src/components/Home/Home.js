
import React from "react";
import Typewriter from "./Typewriter"
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import howYouDoin from "../../Assets/how-you-doin-joey.gif"
//import Particle from "../Particle";
import Home2 from "./Home2";
function Home(){
    return(
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              <strong className="main-name"> Hi There!</strong> <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Typewriter />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={howYouDoin} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
    );
}

export default Home;