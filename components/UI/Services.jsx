import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="Front-End Development" icon="ri-apps-line" />

                <ServicesItem title="Back-End Development" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
              Your website or application will be the first impression of you. Your vison is my goal. As a full stack web developer, I can help you build a website that is both beautiful and functional. I provide both front-end and back-end development services that will provide you with the necessary tools needed to help elevate your business to the next level. From UI/UX design to full product development, I produce the best possible solutions for all your business needs. A few examples of the technologies I include are: HTML5, CSS3, Javascript, React, Node.js, Express, MongoDB, MySQL, and more.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
