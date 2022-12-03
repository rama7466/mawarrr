import React from "react";
import "./Overview.css";
import { Container } from "react-bootstrap";
import devita from "../../assets/devita.jpg";
import Carousel from "../Carousel/Carousel";

export default function Overview() {
  return (
    <section id="overview">
      <Container fluid>
        <div className="content">
          <div className="grid-section">
            <div className="text">
              <h5 className="title">Tentang Devita</h5>
              <h3 className="subtitle">Devita Hasnasya Rahma</h3>
              <p className="desc">
                Dia bernama Devita Hasnasya Rahma tapi entah kenapa dia sering dibilang mawar,
                wanita cantik ini lahir pada tanggal 07 desember 2004 pada hari selasa di pekalongan jawa barat.tepat di bulan ini 07 desember 2022
                dia bertambah umur yang ke 18 tahun.Tak terasa bukan? sudah dewasa dan sudah banyak perasaan yang dia alami mulai
                dari sedih,bahagia,bingung dan masih banyak lagi,dia orangnya periang,apalagi dia mudah berteman dengan siapa saja mugkin karena sifat friendly nya,
                warna kesukaanya warna gelap terlihat dari outfitnya yang selalu memakai warna gelap tapi gatau juga kata dia suka warna gelapp,ukuran sepatunya 37 tapi katanya masi kegedean mungkin 36 ,tapi 36 juga kekecilan.Semoga dengan bertambah usia dia juga bertambah pengetahuan dan juga rezekinyaa aaammmmmmmiiiiiiinnnnn.GoodLuck.</p>
            </div>
            <img src={devita} alt="img grid" />
          </div>
        </div>
      </Container>
      <Carousel />
    </section>
  );
}
