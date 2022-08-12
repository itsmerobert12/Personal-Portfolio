import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col align-items="center">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Let&apos;s Chat!</h3>
            <p>
              I am always online and ready to help you with any questions you may have or if you just want to just chat, contact me!
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Texas</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>robthedev12@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+19564574229</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="https://github.com/itsmerobert12">
                <i className="ri-github-line"></i>
              </Link>
              <Link href="https://www.linkedin.com/in/roberto-c-gomez-86a735b6/">
                <i className="ri-linkedin-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
