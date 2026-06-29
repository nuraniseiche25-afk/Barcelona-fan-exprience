import { useState } from "react";
import "./App.css";

import logo from "./assets/home/logo.barca.png";
import laliga from "./assets/Trofi/La Liga.png";
import ucl from "./assets/Trofi/EUFA Champions League.png";
import copa from "./assets/Trofi/Copa del rey.png";
import supercopa from "./assets/Trofi/Supercopa de espana.png";
import supercup from "./assets/Trofi/EUFA super cup.png";
import clubworldcup from "./assets/Trofi/FIFA club world cup.png";

const trofi = [
  {
  nama: "La Liga",
  jumlah: 28,
  image: laliga,

  desc:
    "Kompetisi liga tertinggi di Spanyol yang telah dimenangkan FC Barcelona sebanyak 28 kali.",

  tahun:
    "1929, 1945, 1948, 1949, 1952, 1953, 1959, 1960, 1974, 1985, 1991, 1992, 1993, 1994, 1998, 1999, 2005, 2006, 2009, 2010, 2011, 2013, 2015, 2016, 2018, 2019, 2023, 2025",
  },
  {
  nama: "UEFA Champions League",
  jumlah: 5,
  image: ucl,

  desc:
    "Kompetisi klub paling bergengsi di Eropa yang telah dimenangkan Barcelona sebanyak 5 kali.",

  tahun:
    "1992, 2006, 2009, 2011, 2015",
  },
  {
  nama: "Copa del Rey",
  jumlah: 32,
  image: copa,

  desc:
    "Kompetisi piala domestik Spanyol yang paling sering dimenangkan Barcelona.",

  tahun:
    "1910, 1912, 1913, 1920, 1922, 1925, 1926, 1928, 1942, 1951, 1952, 1953, 1957, 1959, 1963, 1968, 1971, 1978, 1981, 1983, 1988, 1990, 1997, 1998, 2009, 2012, 2015, 2016, 2017, 2018, 2021, 2025",
  },
  {
  nama: "Supercopa de España",
  jumlah: 15,
  image: supercopa,

  desc:
    "Trofi yang mempertemukan juara liga dan juara Copa del Rey.",

  tahun:
    "1983, 1991, 1992, 1994, 1996, 2005, 2006, 2009, 2010, 2011, 2013, 2016, 2018, 2023, 2025",
  },
  {
  nama: "UEFA Super Cup",
  jumlah: 5,
  image: supercup,

  desc:
    "Trofi yang mempertemukan juara Liga Champions dan Liga Europa.",

  tahun:
    "1992, 1997, 2009, 2011, 2015",
  },
  {
  nama: "FIFA Club World Cup",
  jumlah: 3,
  image: clubworldcup,

  desc:
    "Kompetisi yang mempertemukan juara dari setiap konfederasi dunia.",

  tahun:
    "2009, 2011, 2015",
  },
];

function Trofi({ setHalaman }) {
  const [selectedTrofi, setSelectedTrofi] = useState(trofi[0]);
  const [showDetail, setShowDetail] = useState(false);
  const currentIndex =
trofi.findIndex(
(item)=>item.nama===selectedTrofi.nama
);

  if (showDetail) {
    return (
      <div className="trofi-detail-page">
      
        <div className="detail-header">

  <h1>DETAIL PERJALANAN TROFI</h1>

  <p>
    Jelajahi sejarah kejayaan FC Barcelona
  </p>

</div>
        <div className="trofi-detail-box">

          <div className="trofi-sidebar">

            {trofi.map((item) => (

              <div
                key={item.nama}
                className={
selectedTrofi.nama===item.nama
?
"sidebar-item active-sidebar"
:
"sidebar-item"
}
onClick={()=>setSelectedTrofi(item)}
              >
                {String(
trofi.indexOf(item)+1
).padStart(2,"0")}

{" "}

{item.nama}
              </div>

            ))}

          </div>

          <div className="trofi-content">

            <img
              src={selectedTrofi.image}
              alt={selectedTrofi.nama}
            />

            <div>

              <h1>{selectedTrofi.nama}</h1>

              <h2>{selectedTrofi.jumlah} Trofi</h2>

              <p>{selectedTrofi.desc}</p>
              <h3 className="tahun-title">Tahun Kemenangan</h3>
              <p>{selectedTrofi.tahun}</p>

            </div>
            
<div className="detail-navigation">

  <button
  onClick={()=>{
if(currentIndex>0){

setSelectedTrofi(
trofi[currentIndex-1]
);

}

}}>
    ← Sebelumnya
  </button>

  <button
    onClick={() => setShowDetail(false)}
  >
    Tutup
  </button>

  <button
  onClick={()=>{

if(currentIndex<trofi.length-1){

setSelectedTrofi(
trofi[currentIndex+1]
);

}

}}>
    Selanjutnya →
  </button>

</div>

          </div>

        </div>

      </div>
    );
  }
  return (
    <div className="trofi-page">

      <nav className="navbar">

        <div className="logo">
          <img src={logo} alt="Barcelona" />
        </div>

        <ul>

          <li onClick={() => setHalaman("beranda")}>
            Beranda
          </li>

          <li onClick={() => setHalaman("audio")}>
            Audio
          </li>

          <li onClick={() => setHalaman("player")}>
            Pemain
          </li>

          <li className="active">
            Trofi
          </li>

          <li>
            Momen
          </li>

          <li>
            Stadion
          </li>

        </ul>

      </nav>

      <div className="trofi-header">

        <h1>TROPHY ROOM</h1>

        <p>
          Koleksi 6 trofi utama yang telah diraih oleh FC Barcelona
        </p>

      </div>

      <div className="trofi-container">

        {trofi.map((item, index) => (

          <div className="trofi-card" key={index}>

            <img
              src={item.image}
              alt={item.nama}
            />

            <h3>{item.nama}</h3>

            <h2>{item.jumlah}</h2>

            <p>Trofi</p>

          </div>

        ))}

      </div>

      <div className="trofi-button">

        <button
        onClick={()=>
            setShowDetail(true)
        }>
          🏆 LIHAT DETAIL PERJALANAN TROFI →
        </button>

      </div>

    </div>
  );
}

export default Trofi;