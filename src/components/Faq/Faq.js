import React from "react";
import "../Roadmap/Roadmap.css";
import { Container } from "react-bootstrap";
import Accordian from "../Accordian/Accordian";

export default function Faq() {
  return (
    // Sharing the same styles as ROADMAP component
    <section id="faq">
      <Container>
        <div className="content">
          <h4 className="sm-title">Lagu</h4>
          <div className="top-text">
            <h1 className="lg-title">MUSIC FOR DEVITA</h1>
            <h2 className="desc">
                Music Random
            </h2>
          </div>
        </div>
      </Container>
      <div className="customContainer">
        <Accordian theme="dark" />
      </div>
    </section>
  );
}
