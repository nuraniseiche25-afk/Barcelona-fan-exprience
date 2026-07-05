import { useState } from "react";
import "./App.css";

import tribun1 from "./assets/Stadion/Tribun/tribun1.jpg";
import tribun2 from "./assets/Stadion/Tribun/tribun2.jpg";
import tribun3 from "./assets/Stadion/Tribun/tribun3.jpg";

import ruang1 from "./assets/Stadion/RuangGanti/ruang1.jpg";
import ruang2 from "./assets/Stadion/RuangGanti/ruang2.jpg";
import ruang3 from "./assets/Stadion/RuangGanti/ruang3.jpg";

import lorong1 from "./assets/Stadion/Lorong/lorong1.jpg";
import lorong2 from "./assets/Stadion/Lorong/lorong2.jpg";
import lorong3 from "./assets/Stadion/Lorong/lorong3.jpg";

import lapangan1 from "./assets/Stadion/Lapangan/lapangan1.jpg";
import lapangan2 from "./assets/Stadion/Lapangan/lapangan2.jpg";
import lapangan3 from "./assets/Stadion/Lapangan/lapangan3.jpg";

import museum1 from "./assets/Stadion/Museum/museum1.jpg";
import museum2 from "./assets/Stadion/Museum/museum2.jpg";
import museum3 from "./assets/Stadion/Museum/museum3.jpg";

import logo from "./assets/home/logo.barca.png";

const tempat = [
  {
    nama: "Tribun Utama",
    photos: [
      tribun1,
      tribun2,
      tribun3,
    ],
  },
  {
    nama: "Ruang Ganti",
    photos: [
      ruang1,
      ruang2,
      ruang3,
    ],
  },
  {
    nama: "Lorong Pemain",
    photos: [
      lorong1,
      lorong2,
      lorong3,
    ],
  },
  {
    nama: "Lapangan",
    photos: [
      lapangan1,
      lapangan2,
      lapangan3,
    ],
  },
  {
    nama: "Museum",
    photos: [
      museum1,
      museum2,
      museum3,
    ],
  },
];

function VirtualTour({ setHalaman }) {

  const [selectedPlace, setSelectedPlace] = useState(tempat[0]);
const [selectedPhoto, setSelectedPhoto] = useState(tempat[0].photos[0]);

  return (

    <div className="virtual-page">

        <img
  src={logo}
  alt="Barcelona"
  className="virtual-logo"
/>

<nav className="navbar">

  <div className="logo">
    <img src={logo} alt="Barcelona" />
  </div>

  <ul>
   <li onClick={() => setHalaman("beranda")}>
            Beranda
          </li>

    <li onClick={() => setHalaman("audio")}>Audio</li>

    <li onClick={() => setHalaman("player")}>Pemain</li>

    <li onClick={() => setHalaman("trofi")}>Trofi</li>

    <li onClick={() => setHalaman("moment")}>Momen</li>

    <li className="active">Stadion</li>
  </ul>

</nav>

      <div className="virtual-header">

        <h1>CAMP NOU</h1>

        <p>
          Jelajahi stadion kebanggaan FC Barcelona secara virtual
        </p>

      </div>

      <div className="virtual-container">

        {/* KIRI */}

        <div className="virtual-left">

          <div className="virtual-image">

           <img
  src={selectedPhoto}
  alt={selectedPlace.nama}
/>

            

          </div>

          <div className="thumbnail-container">

  {selectedPlace.photos.map((foto, index) => (

    <img
      key={index}
      src={foto}
      alt={selectedPlace.nama}
      onClick={() => setSelectedPhoto(foto)}
      className={
        selectedPhoto === foto
          ? "thumb active-thumb"
          : "thumb"
      }
    />

  ))}

</div>

        </div>

        {/* KANAN */}

        <div className="virtual-sidebar">

          {tempat.map((item) => (

            <div
              key={item.nama}
              className={
                selectedPlace.nama === item.nama
                  ? "place-card active-place"
                  : "place-card"
              }
              onClick={() => {
  setSelectedPlace(item);
  setSelectedPhoto(item.photos[0]);
}}
            >
<img
  src={item.photos[0]}
  alt={item.nama}
/>

              <div>

                <h3>{item.nama}</h3>

                <p>Klik untuk melihat</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}

export default VirtualTour;