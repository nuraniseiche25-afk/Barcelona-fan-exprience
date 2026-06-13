import anthem from "./assets/audio/FC Barcelona Anthem.mp3"
import goal from "./assets/audio/Goal Celebration.mp3"
import stadion from "./assets/audio/Stadion Atmosphere.mp3"
import chant from "./assets/audio/Supporters Chant.mp3"

import bgAudio from "./assets/images/halaman utama audio.jpg"
import logo from "./assets/images/logo.barca.png"

function Audio() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="Barcelona Logo" />
        </div>

        <ul>
          <li><a href="#">Beranda</a></li>
          <li><a className="active" href="#">Audio</a></li>
          <li><a href="#">Pemain</a></li>
          <li><a href="#">Trofi</a></li>
          <li><a href="#">Momen</a></li>
          <li><a href="#">Stadion</a></li>
        </ul>
      </nav>

      <section
        className="audio-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${bgAudio})`
        }}
      >
        <h1>AUDIO EXPERIENCE</h1>

        <p>
          Dengarkan atmosfer Camp Nou dari sudut pandang supporter FC Barcelona.
        </p>
      </section>

      <section
        className="audio-list"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${bgAudio})`
        }}
      >
        <h2 className="audio-title">Daftar Audio :</h2>

        <div className="audio-content anthem">
          <h2>🎵 FC Barcelona Anthem</h2>

          <audio controls>
            <source src={anthem} type="audio/mpeg" />
          </audio>
        </div>

        <div className="audio-content chant">
          <h2>📣 Supporters Chant</h2>

          <audio controls>
            <source src={chant} type="audio/mpeg" />
          </audio>
        </div>

        <div className="audio-content goal">
          <h2>⚽ Goal Celebration</h2>

          <audio controls>
            <source src={goal} type="audio/mpeg" />
          </audio>
        </div>

        <div className="audio-content atmosphere">
          <h2>🏟 Stadium Atmosphere</h2>

          <audio controls>
            <source src={stadion} type="audio/mpeg" />
          </audio>
        </div>

      </section>
    </>
  )
}

export default Audio