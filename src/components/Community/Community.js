import React from "react";
import "./Community.css";
import { Container } from "react-bootstrap";
import poker from "../../assets/poker.png";

export default function Community() {
  return (
    <section id="community">
      <Container>
        <div className="content">
          <div className="grid-section">
            <img src={poker} alt="img grid" />
            <div className="text">
              <h1 className="title">End OF The Story</h1>
              <h2 className="desc">
               Epilog Tanpa Prolog
              </h2>
              {/* <div className="btns">
                <button href="https://drive.google.com/file/d/1UV1mlEJClDWpAs-6NeT-8mCP3HeubMEq/view?usp=sharing" className="btn btn-join">Baca Pesan</button>
              </div> */}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
