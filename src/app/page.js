import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-red-50 dark:from-pink-900 dark:to-red-900 py-12">
      {" "}
      <div className="container mx-auto px-4">
        {" "}
        <div className="text-center mb-12 animate-fade-in">
          {" "}
          <h1 className="text-4xl md:text-6xl font-bold text-red-600 dark:text-red-400 mb-4">
            {" "}
            Feliz San Valentín{" "}
          </h1>{" "}
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {" "}
            Un viaje por nuestra historia de amor{" "}
          </p>{" "}
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/familia"
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">👨‍👩‍👦</div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Nuestra Familia
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Explora nuestro árbol familiar
              </p>
            </div>
          </Link>

          <Link
            href="/mapa"
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🗺️</div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Mapa del Amor
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Descubre nuestros lugares especiales
              </p>
            </div>
          </Link>

          <Link
            href="/historia"
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">📖</div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Nuestra Historia
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Revive nuestros momentos juntos
              </p>
            </div>
          </Link>

          <Link
            href="/cartas"
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">💌</div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Cartas de Amor
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Mensajes desde el corazón
              </p>
            </div>
          </Link>
        </div>
        <div className="text-center mt-12">
          <Link
            href="/playlist"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors duration-300"
          >
            💝 Nuestra Playlist
          </Link>
        </div>
      </div>
    </div>
  );
}
