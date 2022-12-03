import React from "react";
import "./Roadmap.css";
import { Container } from "react-bootstrap";
import Accordian from "../Accordian/Accordian";

export default function Roadmap() {
  return (
    <section id="roadmap">
      <Container>
        <div className="content">
          <h4 className="sm-title">Lagu For Devita</h4>
          <div className="top-text">
            <h1 className="lg-title">MUSIC</h1>
            <h2 className="desc">
              music music buat devita
            </h2>
          </div>
        </div>
      </Container>
      <div className="customContainer">
        <Accordian />
      </div>
    </section>
  );
}
