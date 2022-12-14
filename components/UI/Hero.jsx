import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/hero.jpg";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Roberto Gomez</h2>
              <h5 className="mb-4">Full Stack Web Developer</h5>
              <p>
                Always looking for new opportunities to help you build a better web experience.
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="mailto:robthedev12@gmail.com">Hire me!</Link>
                </button>

                <button className="secondary__btn">
                  <Link href="https://docs.google.com/document/d/1TOvrmMHrgWHhLXp6m_gbwrx5OZM-lJzg8YMzsatWOvo/edit?usp=sharing">Resume</Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} height="700" width="375" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
