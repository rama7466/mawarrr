import React from "react";
import "./Traits.css";
import { Container } from "react-bootstrap";
import  dr1 from "../../assets/dr1.jpg";
import  dr2 from "../../assets/dr2.jpg";


export default function Traits() {
  return (
    <section id="traits">
      <Container fluid>
        <div className="content">
          <div className="grid-section">
            <div className="text">
              <h5 className="title"></h5>
              <h3 className="subtitle">first time</h3>
              <p className="desc">
                first time rama foto dan ngobrol lama sama devita,dan ini menjadi salah satu bulan juni terbaik buat rama.
              </p>
            </div>
            <img src={dr1} alt="img grid" />
          </div>
          <img src={dr2} alt="not found" className="gunImg" />
        </div>
      </Container>
    </section>
  );
}
