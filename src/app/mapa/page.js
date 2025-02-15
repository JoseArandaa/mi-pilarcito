"use client";

import { useState } from "react";
import Link from "next/link";

const locations = [
  {
    id: 1,
    name: "Nuestra Primera Llamada",
    description: "Donde todo comenzó...",
    type: "memory",
    emoji: "💕",
  },
  {
    id: 2,
    name: "Futura Casa",
    description: "Donde construiremos nuestro hogar...",
    type: "dream",
    emoji: "🏡",
  },
  {
    id: 3,
    name: "Brasil",
    description: "El pais que soñamos visitar",
    type: "future",
    emoji: "🇧🇷",
  },
  {
    id: 4,
    name: "París",
    description: "La ciudad del amor que visitaremos juntos...",
    type: "future",
    emoji: "🗼",
  },
];

export default function Mapa() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-red-50 dark:from-pink-900 dark:to-red-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-red-600 dark:text-red-400 mb-12">
          Mapa del Amor
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <div
                key={location.id}
                className={`p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl
                  transform hover:-translate-y-1 transition-all duration-300 cursor-pointer
                  ${
                    selectedLocation === location.id
                      ? "ring-2 ring-red-500"
                      : ""
                  }`}
                onClick={() => setSelectedLocation(location.id)}
              >
                <div className="text-4xl mb-4">{location.emoji}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {location.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {location.description}
                </p>
                <div className="mt-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm
                    ${
                      location.type === "memory"
                        ? "bg-pink-100 text-pink-800"
                        : location.type === "dream"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {location.type === "memory"
                      ? "Recuerdo"
                      : location.type === "dream"
                      ? "Sueño"
                      : "Futuro"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
