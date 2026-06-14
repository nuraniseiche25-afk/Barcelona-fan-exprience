const trophies = [
  {
    title: "Champions League",
    year: "2015",
    image: "/IMG/ucl.jpg",
  },
  {
    title: "La Liga",
    year: "2023",
    image: "/IMG/laliga.jpg",
  },
  {
    title: "Copa del Rey",
    year: "2021",
    image: "/IMG/copadelrey.jpg",
  },
  {
    title: "Supercopa de España",
    year: "2023",
    image: "/IMG/supercopa.jpg",
  },
];

export default function TrophyGallery() {
  return (
    <section className="bg-slate-900 py-16 px-6 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">
        Galeri Trofi FC Barcelona
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trophies.map((trophy, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition"
          >
            <img
              src={trophy.image}
              alt={trophy.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold text-xl">{trophy.title}</h3>
              <p className="text-yellow-400">{trophy.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}