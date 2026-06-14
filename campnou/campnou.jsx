export default function CampNou() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div>
          <img
            src="/IMG/campnou.jpg"
            alt="Camp Nou"
            className="rounded-xl shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Stadion Camp Nou
          </h2>

          <p className="text-gray-700 mb-4">
            Camp Nou merupakan stadion kebanggaan FC Barcelona dan salah satu
            stadion sepak bola terbesar di dunia.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold">Dibuka</h3>
              <p>1957</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold">Kapasitas</h3>
              <p>99.354 Penonton</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold">Lokasi</h3>
              <p>Barcelona, Spanyol</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold">Pemilik</h3>
              <p>FC Barcelona</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}