import "./App.css";

import logo from "./assets/home/logo.barca.png";
import treble2009 from "./assets/moment/treble2009.jpg";
import wembley2011 from "./assets/moment/wembley2011.jpg";
import treble2015 from "./assets/moment/treble2015.jpg";
import laliga2023 from "./assets/moment/laliga2023.jpg";

const moments = [
  {
    year: "2009",
    title: "Treble Winner",
    desc: "Barcelona meraih treble pertama di bawah asuhan Pep Guardiola.",
    image: treble2009,
  },
  {
    year: "2011",
    title: "Wembley Glory",
    desc: "Barcelona mengalahkan Manchester United 3-1 di Final Liga Champions.",
    image: wembley2011,
  },
  {
    year: "2015",
    title: "Treble Winners",
    desc: "Messi, Neymar dan Suarez membawa Barcelona meraih treble kedua.",
    image: treble2015,
  },
  {
    year: "2023",
    title: "La Liga Champions",
    desc: "Barcelona kembali menjadi juara La Liga.",
    image: laliga2023,
  },
];

function Moment({ setHalaman }) {
  return (
    <div className="moment-page">

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

          <li onClick={() => setHalaman("trofi")}>
            Trofi
          </li>

          <li className="active">
            Momen
          </li>


           <li onClick={() => setHalaman("stadion")}>
            Stadion
          </li>

         

        </ul>

      </nav>

      <div className="moment-header">


        <h1>ICONIC MOMENTS</h1>
        <p>Momen-momen yang tak terlupakan</p>
      </div>

      <div className="moment-container">

        

        <div className="moment-list">

         {moments.map((item) => (

  <div className="moment-row" key={item.year}>

    <div
  className={`timeline-item ${
    item.year === moments[moments.length - 1].year ? "last" : ""
  }`}
>

      <div className="dot"></div>

      <span>{item.year}</span>

    </div>

    <div className="moment-card">

      <div className="moment-text">
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
      </div>

      <img
        src={item.image}
        alt={item.title}
      />

    </div>

  </div>

))}

        </div>

      </div>

    </div>
  );
}

export default Moment;