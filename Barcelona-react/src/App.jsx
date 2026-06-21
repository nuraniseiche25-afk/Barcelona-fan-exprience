import './App.css'
import Login from './login'
import Home from './home'
import Audio from './audio'
import Player from './player';
import { useState } from 'react'

function App() {
  const [halaman, setHalaman] = useState("landing")

  if (halaman === "login") {
    return (
      <Login 
          onLogin={() =>
  setHalaman("beranda")} 
       />
    )
  }
  if (halaman === "beranda") {
    return (
      <Home setHalaman={setHalaman} />
    )
  }
  if (halaman === "audio") {
    return (
      <Audio setHalaman={setHalaman} />
    )
  }
  if (halaman === "player") {
    return (
      <Player setHalaman={setHalaman} />
    )
  }

  return (
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

        <button onClick={() => setHalaman("login")}>
          Jelajahi
        </button>

      </div>
    </section>
  )
}

export default App

