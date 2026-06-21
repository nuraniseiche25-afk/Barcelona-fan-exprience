import { useState } from "react";

import logo from "./assets/home/logo.barca.png";
import lamine from "./assets/Player/lamine.png";
import pedri from "./assets/Player/pedri.png";
import gavi from "./assets/Player/gavi.png";
import frenkie from "./assets/Player/frenkie.png";
import dani from "./assets/Player/dani olmo.png";
import ronald from "./assets/Player/ronald.png";
import jules from "./assets/Player/jules.png";
import alejandro from "./assets/Player/alejandro.png";
import fermin from "./assets/Player/fermin.png";
import joan from "./assets/Player/joan garcia.png";

const players = [
  {
    name: "Lamine Yamal",
    position: "Winger",
    age: "18 tahun",
    image: lamine,
    desc: "Dikenal luas sebagai salah satu talenta muda paling cemerlang di dunia, memecahkan berbagai rekor sebagai pemain termuda yang tampil dan mencetak gol di ajang Euro.",

    detail: `
    Biodata Lamine Yamal

Nama Lengkap: Lamine Yamal Nasraoui Ebana
Tempat Lahir: Esplugues de Llobregat, Catalonia, Spanyol
Tanggal Lahir: 13 Juli 2007
Usia: 18 tahun
Agama: Islam
Kewarganegaraan: Spanyol
Keturunan: Maroko (Ayah) & Guinea Khatulistiwa (Ibu)
Karier Sepak BolaKlub Saat Ini: FC Barcelona
Posisi: Penyerang Sayap Kanan
Nomor Punggung: 10
Tinggi Badan: 1,83 meter
Agensi: GestifuteKarier Internasional
Tim Nasional: SpanyolDebut 
Timnas Senior: September 2023
Prestasi UtamaGelar Klub: Juara La Liga, Juara Supercopa de España (bersama FC Barcelona)
Gelar Internasional: Juara UEFA European Championship (EURO)
Penghargaan Individu: Pemain Muda Terbaik EURO, Golden Boy`
  },

  {
    name: "Pedri",
    position: "Gelandang",
    age: "23 tahun",
    image: pedri,
    desc: " Ia diakui sebagai salah satu playmaker terbaik dunia karena visi, kontrol bola yang sangat halus, dan kemampuannya mengatur ritme permainan, yang sering disamakan dengan legenda Barcelona, Andrés Iniesta.",
  
    detail: `
    Biodata Pedri

Nama Lengkap: Pedro González López
Tempat Lahir: Tegueste, Santa Cruz de Tenerife, Spanyol
Tanggal Lahir: 25 November 2002
Tinggi Badan: 1,74 m
Posisi Utama: Gelandang Tengah
Kaki Dominan: Kanan
Klub Saat Ini: FC Barcelona
Bergabung dengan Barcelona: 2 September 2019 (efektif bergabung pada Agustus 2020)
Durasi Kontrak: Terikat kontrak di Barcelona hingga 30 Juni 2030

Karier dan Pencapaian
Klub Profesional Pertama: Las Palmas (2019–2020)
Debut La Liga: 27 September 2020 bersama FC Barcelona melawan Villarreal
Timnas Spanyol: Menjadi andalan lini tengah Spanyol dan meraih penghargaan Pemain Muda Terbaik di ajang UEFA EURO 2020 (diadakan pada 2021).`
  },

  {
    name: "Gavi",
    position: "Gelandang",
    age: "21 tahun",
    image: gavi,
    desc: " Dikenal dengan visi, visi bermain cerdas, dan etos kerja yang tinggi. Gavi juga merupakan pemenang penghargaan bergengsi seperti Golden Boy dan Kopa Trophy.",

    detail: `
    Biodata Gavi

Nama Lengkap: Pablo Martín Páez Gavira
Tempat Lahir: Los Palacios y Villafranca, Spanyol
Tanggal Lahir: 5 Agustus 2004
Tinggi/Berat Badan: 173 cm / 68 kg
Posisi Bermain: Gelandang Tengah
Klub Saat Ini: FC Barcelona
Nomor Punggung: 6 (di Barcelona dan Timnas Spanyol)
*Perjalanan Karier & Prestasi*
Karier Junior: Memulai karier di klub lokal La Liara Balompié dan akademi Real Betis sebelum bergabung dengan akademi muda Barcelona (La Masia) pada tahun 2015.
Debut Senior: Melakukan debut kompetitif untuk tim utama Barcelona pada Agustus 2021.
Timnas Spanyol: Menjadi debutan sekaligus pencetak gol termuda sepanjang sejarah tim nasional senior Spanyol.
Gelar Utama: Memenangkan gelar La Liga, Copa del Rey, Piala Super Spanyol, dan UEFA Nations League.
Penghargaan Individu: Meraih penghargaan prestisius Golden Boy dan Kopa Trophy pada tahun 2022.`
  },

  {
    name: "Frenkie de Jong",
    position: "Gelandang",
    age: "29 tahun",
    image: frenkie,
    desc: "Dikenal luas karena visi, kemampuan menggiring bola, dan akurasi umpannya yang luar biasa, ia diakui sebagai salah satu gelandang pengatur serangan yang paling cerdas di dunia sepak bola modern.",

    detail: `
    Biodata Frenkie DeJong

Informasi Pribadi
Nama Lengkap:Frenkie de Jong
Tempat Lahir:Gorinchem, Belanda
Tanggal Lahir:12 Mei 1997
Usia:29 tahun
Kewarganegaraan:Belanda
Tinggi Badan:181 cm
Posisi Bermain:Gelandang (Tengah / Bertahan)

Karier Klub
Klub Saat Ini:FC Barcelona
Nomor Punggung:21
Karier Senior:Willem II (2015–2016), Ajax (2016–2019), Barcelona (2019–Sekarang)

Fakta menarik
Gaya Bermain: Sangat diandalkan sebagai pengatur tempo. Ia memiliki pemahaman taktik yang kuat dan dikenal piawai saat menguasai bola di area pertahanan untuk memicu transisi menyerang.
Prestasi Utama: Meraih penghargaan Gelandang Terbaik Liga Champions UEFA musim 2018/19 saat masih berseragam Ajax.
Nomor Punggung: Angka 21 sangat identik dengannya karena ia dedikasikan khusus untuk kakeknya, yang lahir pada tanggal 21.`
  },

  {
    name: "Dani Olmo",
    position: "Attacking Midfielder",
    age: "28 tahun",
    image: dani,
    desc: "Dikenal dengan visi bermain yang luar biasa, fleksibilitas posisi, dan akurasi tendangannya, Olmo merupakan salah satu pilar utama yang mengantarkan Spanyol menjuarai Euro 2024.",

    detail: `
    Biodata Dani Olmo

Informasi Pribadi
Nama Lengkap: Daniel Olmo Carvajal
Tempat Lahir: Terrassa, Spanyol
Tanggal Lahir: 7 Mei 1998
Tinggi Badan: 1,79 m
Posisi Utama: Gelandang Serang / Pemain Sayap
Kaki Terkuat: Kanan
Kewarganegaraan: Spanyol

Karier Klub
2006–2007: Espanyol (Junior)
2007–2014: FC Barcelona (La Masia)
2014–2020: Dinamo Zagreb
2020–2024: RB Leipzig
2024–Sekarang: FC Barcelona

Fakta Menarik
Latar Belakang Keluarga: Darah sepak bola mengalir dari sang ayah, Miquel Olmo, yang merupakan mantan pemain dan pelatih klub seperti Girona dan Sabadell.
Lompatan Karier Berani: Pada usia 16 tahun, ia membuat keputusan mengejutkan dengan meninggalkan akademi La Masia Barcelona untuk bergabung dengan klub Kroasia, Dinamo Zagreb, demi mendapatkan waktu bermain reguler di tim utama.
Prestasi Level Klub: Bersama Dinamo Zagreb, ia berhasil memenangkan gelar Liga Kroasia sebanyak lima kali dan Piala Kroasia tiga kali. Bersama RB Leipzig, ia turut memenangkan DFB-Pokal dua kali.
Karier Internasional: Menjadi salah satu pilar penting Timnas Spanyol, ia turut membawa negaranya menjuarai UEFA Euro 2024, serta menjadi salah satu pencetak gol terbanyak di turnamen tersebut.`
  },

  {
    name: "Ronald Araujo",
    position: "Bek Tengah",
    age: "27 tahun",
    image: ronald,
    desc: "Ronald Araújo adalah bek tengah andalan FC Barcelona dan timnas Uruguay yang dikenal karena kecepatan, kekuatan fisik, dan kemampuan tekelnya.",

    detail: `
    Biodata Ronald Araújo

Nama Lengkap: Ronald Federico Araújo Da Silva
Tanggal Lahir: 7 Maret 1999 (Usia 27)
Tempat Lahir: Rivera, Uruguay
Tinggi Badan: 192 cm
Posisi Bermain: Bek Tengah (Bek Utama), juga fasih sebagai Bek Kanan
Kaki Dominan: Kanan
Klub Saat Ini: FC Barcelona
Nomor Punggung: 4
Agama: Kristen (Pernikahan dilangsungkan di Kuil Metodis Montevideo)
Keluarga: Menikah dengan Abigail Olivera (2025) dan memiliki dua putri (Aitana dan Adara)

Perjalanan Karier dan Statistik
Karier Klub Junior: Mulai berlatih di klub lokal Uruguay, sebelum bergabung dengan akademi Boston River.
Barcelona B: Direkrut oleh Barcelona pada Agustus 2018 dan awalnya bermain untuk tim cadangan (Barcelona B) di Segunda División B.
Debut Tim Utama: Melakukan debut kompetitifnya di La Liga pada Oktober 2019. Sejak saat itu, ia menjadi sosok krusial di lini pertahanan Blaugrana.
Karier Internasional: Merupakan anggota reguler Tim Nasional Uruguay (sering berpartisipasi di pentas Piala Dunia dan Copa América).`
  },

  {
    name: "Jules Kounde",
    position: "Bek",
    age: "27 tahun",
    image: jules,
    desc: "Jules Koundé adalah pemain sepak bola profesional Prancis yang dikenal sebagai salah satu bek paling serbaguna dan tangguh di dunia.",

    detail: `
    Biodata Jules Koundé

Nama Lengkap: Jules Olivier Koundé
Tanggal Lahir: 12 November 1998
Tempat Lahir: Paris, Prancis
Kewarganegaraan: Prancis (memiliki keturunan Benin)
Tinggi Badan: 1,80 m
Posisi: Bek Kanan / Bek Tengah

Karier Klub
2017–2019: Bordeaux (Prancis)
2019–2022: Sevilla (Spanyol)
2022–Sekarang: FC Barcelona (Spanyol)

Prestasi Utama
FC Barcelona: Juara La Liga (Liga Spanyol) 
dan Supercopa de España.
Sevilla: Juara UEFA Europa League.
Timnas Prancis: Juara UEFA Nations League.`
  },

  {
    name: "Alejandro Balde",
    position: "Bek Kiri",
    age: "22 tahun",
    image: alejandro,
    desc: "Lulusan akademi La Masia ini dikenal luas karena kecepatannya yang luar biasa, kemampuan dribel yang kuat, serta dedikasinya dalam bertahan.",

    detail: `
    Biodata Alejandro Balde

Profil dan Data Pribadi
Nama Lengkap: Alejandro Balde Martínez
Tempat Lahir: Barcelona, Spanyol
Tanggal Lahir: 18 Oktober 2003
Tinggi/Berat: 175 cm / 69 kg
Posisi: Bek Kiri (Left-Back)
Klub Saat Ini: FC Barcelona
Nomor Punggung: 3

Latar Belakang dan Karier Klub
Keturunan: Balde lahir di Barcelona dari ayah yang berasal dari Guinea-Bissau dan ibu dari Republik Dominika.
Jalur Karier: Ia bergabung dengan akademi muda Barcelona (La Masia) pada usia muda dan dengan cepat menembus tim utama.
Debut Tim Utama: Melakukan debut kompetitifnya untuk Barcelona pada September 2021 dan segera menjadi pilihan utama di posisi bek kiri reguler.
Prestasi Klub: Turut serta membawa Barcelona menjuarai gelar La Liga, Copa del Rey, serta Piala Super Spanyol.

Karier Internasional
Timnas Spanyol: Memilih untuk membela Tim Nasional Spanyol (La Roja) dan telah mewakili negaranya di berbagai kelompok umur hingga menembus skuad senior.
Piala Dunia: Menjadi bagian dari skuad Timnas Spanyol di ajang Piala Dunia FIFA 2022.`
  },

  {
    name: "Fermin Lopez",
    position: "Gelandang",
    age: "23 tahun",
    image: fermin,
    desc: "ia dikenal karena kemampuan mencetak gol yang tajam, visi bermain yang kreatif, dan pergerakan tanpa bola yang cerdas.",

    detail: `
    Biodata Fermin Lopez 

Nama Lengkap: Fermín López Marín
Tanggal Lahir: 11 Mei 2003
Tempat Lahir: El Campillo, Spanyol
Tinggi Badan: 1,74 m
Klub Saat Ini: FC Barcelona
Nomor Punggung: 16
Posisi Bermain: Gelandang Serang / Sayap
Kaki Dominan: Kanan

Karier Klub:
2016-2022: Akademi La Masia (Barcelona)
2022-2023: Dipinjamkan ke Linares Deportivo (Tampil 37 kali dan mencetak 12 gol)
2023-Sekarang: Tim Utama Barcelona (Mencetak puluhan penampilan dan gol untuk klub)

Statistik Internasional:
Ia telah membela tim nasional Spanyol di berbagai kelompok umur, termasuk Spanyol U-21 dan U-23, serta sukses menembus skuad tim nasional senior Spanyol.`
  },

  {
    name: "Joan Garcia",
    position: "Kiper",
    age: "25 tahun",
    image: joan,
    desc: " ia dikenal dengan postur tubuhnya yang menjulang tinggi (1,94 m) dan menjadi salah satu kiper tangguh yang memiliki statistik impresif dalam menggagalkan peluang gol lawan.",

    detail: `
    Biodata Joan Garcia

Nama Lengkap: Joan García Pons
Tanggal Lahir: 4 Mei 2001
Tempat Lahir: Sallent, Spanyol
Tinggi Badan: 194 cm
Posisi: Penjaga gawang
Kaki Dominan: Kanan
Klub Saat Ini: Barcelona
Tim Nasional: Spanyol U-17 hingga U-21

Perjalanan Karier Klub:
2016–2020: Bergabung dengan akademi muda Espanyol.
2019–2025: Membela tim senior Espanyol (melakoni debut profesional dan mencatatkan puluhan penampilan).
2025–Sekarang: Resmi direkrut oleh Barcelona setelah klub mengaktifkan klausul pelepasan dengan durasi kontrak jangka panjang.`
  }
];

function Player({ setHalaman }) {

  const [selectedPlayer, setSelectedPlayer] =
  useState(players[0]);

const [showDetail, setShowDetail] =
  useState(false);

  if(showDetail){
  return(
    <section className="detail-page">

      <button
        onClick={() => setShowDetail(false)}
      >
        ← Kembali
      </button>

      <img
        src={selectedPlayer.image}
        alt={selectedPlayer.name}
      />

      <h1>{selectedPlayer.name}</h1>
      <div className="detail-text">
        {selectedPlayer.detail}
      </div>

    </section>
  )
}

  return (
    <>
  <nav>
    <div className="logo">
      <img src={logo} alt="Barcelona Logo" />
    </div>

    <ul>
      <li>
        <a onClick={() => setHalaman("beranda")}>
          Beranda
        </a>
      </li>

      <li>
        <a onClick={() => setHalaman("audio")}>
          Audio
        </a>
      </li>

      <li>
        <a className="active">
          Pemain
        </a>
      </li>

      <li>
        <a>Trofi</a>
      </li>

      <li>
        <a>Momen</a>
      </li>

      <li>
        <a>Stadion</a>
      </li>
    </ul>
  </nav>

    <section className="player-section">

      <div className="player-main">

        <div className="player-left">
          <img
            src={selectedPlayer.image}
            alt={selectedPlayer.name}
          />
        </div>

        <div className="player-right">

          <h1>{selectedPlayer.name}</h1>
          <h3>{selectedPlayer.position}</h3>
          <h4>usia: {selectedPlayer.age}</h4>
          <p>{selectedPlayer.desc}</p>

          <button
  onClick={() => setShowDetail(true)}
>
  Lihat Detail
</button>

        </div>

      </div>

      <div className="player-slider">

        {players.map((player) => (

          <div
            className="player-card"
            key={player.name}
            onClick={() =>
              setSelectedPlayer(player)
            }
          >

            <img
              src={player.image}
              alt={player.name}
            />

            <h4>{player.name}</h4>

          </div>
        ))}
        </div>
        <div className="club-info">
  <h2>FC Barcelona</h2>

  <div className="club-cards">

    <div className="info-card">
      <h1>27</h1>
      <p>La Liga</p>
    </div>

    <div className="info-card">
      <h1>5</h1>
      <p>UCL</p>
    </div>

    <div className="info-card">
      <h1>31</h1>
      <p>Copa del Rey</p>
    </div>

    <div className="info-card">
      <h1>1899</h1>
      <p>Berdiri</p>
    </div>

  </div>
</div>

</section>

    </>
  );
}

export default Player;