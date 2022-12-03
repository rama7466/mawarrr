import React from "react";
import "./Origin.css";
import { Container } from "react-bootstrap";
import devita1 from "../../assets/devita1.jpg";

export default function Origin() {
  return (
    <section id="origin">
      <Container>
        <div className="content">
          <div className="text">
            <h1 className="title">Ucapan</h1>
            <h3 className="desc">
              Haii! Devita.Apa kabar?bagaimana hari ini?gimana kuliahnya?ada cerita apa hari ini? dan masi banyak lagi yang ingin rama tanyakan,
              tapi mau bagaimana lagi kita sudah tidak seperti dulu.Di ulang tahun devita yang ke 18 tahun ini, rama berharap tahun ini lebih baik
              dari tahun kemarin,semoga apa yang devita semogakan akan tersemogakan,dan semuanya berjalan dengan lancar,mulai dari kuliahnya serta kegiatan
              yang devita lakukan saat ini,goodluck and yaa selamat ulang Tahun Devita Hasnasya Rahma,semoga suka ya sama kadonya:).{" "}
            </h3>
          </div>
          <div className="image">
            <img src={devita1} alt="not found" />
          </div>
        </div>
      </Container>
    </section>
  );
}
