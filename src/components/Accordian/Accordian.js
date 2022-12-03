import React from "react";
import AudioPlayer from "react-h5-audio-player";
import tulus from "../../assets/tulus.mp3"
import dan from "../../assets/dan.mp3"
import resahpayung from "../../assets/resahpayung.mp3"
import resahdaun from "../../assets/resahdaun.mp3"
import amazing from "../../assets/amazing.mp3"
import L from "../../assets/L.mp3"
import abuu from "../../assets/abuu.mp3"
import "./Accordian.css";
import { Accordion } from "react-bootstrap";

export default function Accordian({ theme }) {
  return (
    <>
      {theme ? (
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0" className="faq-accordian-item">
          <Accordion.Header>
              Tulus - Bunga Tidur
            </Accordion.Header>
            <Accordion.Body>
            <AudioPlayer
                src={tulus}  
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="faq-accordian-item">
          <Accordion.Header>
               sheila on 7 - dan
            </Accordion.Header>
            <Accordion.Body>
            <AudioPlayer
                src={dan}  
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="faq-accordian-item">
          <Accordion.Header>
              rex country - amazing
            </Accordion.Header>
            <Accordion.Body>
            <AudioPlayer
                src={amazing}  
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="faq-accordian-item">
          <Accordion.Header>
              resah - payung teduh
            </Accordion.Header>
            <Accordion.Body>
            <AudioPlayer
                src={resahpayung}  
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="faq-accordian-item">
          <Accordion.Header>
              resah - daun jatuh
            </Accordion.Header>
            <Accordion.Body>
            <AudioPlayer
                src={resahdaun}  
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6" className="faq-accordian-item">
            <Accordion.Header>Hal-L</Accordion.Header>
            <Accordion.Body>
            <AudioPlayer
                src={L}  
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7" className="faq-accordian-item">
            <Accordion.Header>Tulus - Langit Abu-Abu</Accordion.Header>
            <Accordion.Body>
            <AudioPlayer
                src={abuu}  
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ) : (
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              
            </Accordion.Header>
            <Accordion.Body>
            
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header></Accordion.Header>
            <Accordion.Body>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
    </>
  );
}
