import logo from "./assets/home/logo.barca.png"
import messi from "./assets/home/messi.jpg"
import pique from "./assets/home/pique.jpg"
import rivaldo from "./assets/home/rivaldo.jpg"

function Home({ setHalaman }) {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="Barcelona Logo" />
        </div>

        <ul>
          <li>
            <a className="active" href="#">
              Beranda
            </a>
          </li>

          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setHalaman("audio")
              }}
            >
              Audio
            </a>
          </li>

          <li>
            <a href="#">
              Pemain
            </a>
          </li>

          <li>
            <a href="#">
              Trofi
            </a>
          </li>

          <li>
            <a href="#">
              Momen
            </a>
          </li>

          <li>
            <a href="#">
              Stadion
            </a>
          </li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>
            MES QUE <br />
            <span>UN CLUB</span>
          </h1>

          <p>
            Lebih dari sebuah klub.
            Ini adalah hidup kami.
          </p>
        </div>
      </section>

      <section className="about">
        <h2>Tentang FC Barcelona</h2>

        <p>
          FC Barcelona adalah klub sepak bola profesional
          Spanyol yang berbasis di Barcelona, Catalonia,
          Spanyol.
        </p>
      </section>

      <section className="players">
        <h2>Pemain Legendaris</h2>

        <div className="player-container">

          <div className="player-card">
            <img src={messi} alt="Messi" />
            <h3>Lionel Messi</h3>
          </div>

          <div className="player-card">
            <img src={pique} alt="Pique" />
            <h3>Gerard Pique</h3>
          </div>

          <div className="player-card">
            <img src={rivaldo} alt="Rivaldo" />
            <h3>Rivaldo</h3>
          </div>

        </div>
      </section>

      <section className="trophy">
        <h2>Prestasi</h2>

        <div className="cards">

          <div className="card">
            <h3>La Liga</h3>
            <p>27 Gelar</p>
          </div>

          <div className="card">
            <h3>Champions League</h3>
            <p>5 Gelar</p>
          </div>

          <div className="card">
            <h3>Copa del Rey</h3>
            <p>31 Gelar</p>
          </div>

        </div>
      </section>

      <section className="quote-section">
        <h2>FEEL THE ATMOSPHERE</h2>

        <p>
          90.000 suara.
          Satu stadion.
          Satu kebanggaan.
        </p>
      </section>
    </>
  )
}

export default Home