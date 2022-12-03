import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer id="footer">
      <Container>
        <div className="content">
          <p className="footer-text">
            created by Rama Ramdhani Using REACT.JS
          </p>
        </div>
      </Container>
    </footer>
  );
}
