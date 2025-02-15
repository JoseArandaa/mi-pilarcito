"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const familyMembers = [
  {
    id: 1,
    label: "yo",
    image: "/jose.webp",
    type: "parent",
  },
  {
    id: 2,
    label: "vos",
    image: "/pilu.webp",
    type: "parent",
  },
  {
    id: 3,
    name: "Isais Gael",
    image: "/interrogacion.webp",
    type: "child",
  },
  {
    id: 4,
    name: "Bruno Lionel",
    image: "/interrogacion.webp",
    type: "child",
  },
  {
    id: 5,
    name: "Emma maia",
    image: "/interrogacion.webp",
    type: "child",
  },
  {
    id: 6,
    name: "Malena isabel",
    image: "/interrogacion.webp",
    type: "child",
  },
];

const pets = [
  {
    name: "Max",
    image: "/interrogacion.webp",
  },
  {
    name: "Catriel",
    image: "/interrogacion.webp",
  },
  {
    name: "Tobi",
    image: "/interrogacion.webp",
  },
  {
    name: "Rocco",
    image: "/interrogacion.webp",
  },
  {
    name: "Rex",
    image: "/interrogacion.webp",
  },
  {
    name: "Milton",
    image: "/interrogacion.webp",
  },
  {
    name: "Laika",
    image: "/interrogacion.webp",
  },
  {
    name: "Akira",
    image: "/interrogacion.webp",
  },
  {
    name: "Luna",
    image: "/interrogacion.webp",
  },
  {
    name: "Nala",
    image: "/interrogacion.webp",
  },
  {
    name: "Tina",
    image: "/interrogacion.webp",
  },
  {
    name: "Lola",
    image: "/interrogacion.webp",
  },
];

export default function Familia() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-red-50 dark:from-pink-900 dark:to-red-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-red-600 dark:text-red-400 mb-20 animate-slide-down">
          Nuestro Árbol Familiar
        </h1>

        <div className="max-w-4xl mx-auto">
          {/* Family Tree Section */}
          <div className="relative mb-24">
            {/* Parents Level */}
            <div className="mt-6 flex justify-center gap-4 sm:gap-8 md:gap-16 mb-8 animate-slide-down">
              {familyMembers
                .filter((member) => member.type === "parent")
                .map((member) => (
                  <div key={member.id} className="relative">
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-lg sm:text-xl font-[Kaushan-Script] uppercase pb-[40px]">
                      {member.label}
                    </span>
                    <div
                      className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg 
                             hover:shadow-xl transition-all duration-300 overflow-hidden
                             relative cursor-pointer transform hover:scale-105"
                      onClick={() => setSelectedMember(member.id)}
                    >
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.label}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
            </div>

            {/* Connecting Lines */}
            <div className="absolute top-24 sm:top-32 md:top-40 left-1/2 w-px h-8 sm:h-12 md:h-16 bg-gradient-to-b from-red-300 to-red-500 -translate-x-1/2 h-[45%] animate-pulse" />
            <div className="absolute top-32 sm:top-44 md:top-56 left-1/4 right-1/4 h-px bg-gradient-to-r from-red-300 via-red-500 to-red-300 animate-pulse" />

            {/* Children Level */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 px-4 sm:px-8 mt-8 sm:mt-12 animate-slide-down">
              {familyMembers
                .filter((member) => member.type === "child")
                .map((member) => (
                  <div
                    key={member.id}
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg 
                             hover:shadow-xl transition-all duration-300 overflow-hidden
                             relative cursor-pointer transform hover:scale-105"
                    onClick={() => setSelectedMember(member.id)}
                  >
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name || ""}
                      fill
                      className="object-cover p-5"
                    />
                    {member.name && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-1 sm:p-2 text-white text-center">
                        <span className="text-xs sm:text-sm font-medium">
                          {member.name}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>

          {/* Pets Section */}
          <div className="mt-24 animate-slide-up">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
              Nuestras Mascotas
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {pets.map((pet, index) => (
                <div
                  key={index}
                  className="aspect-square bg-white dark:bg-gray-800 rounded-lg shadow-lg 
                           hover:shadow-xl transition-all duration-300 overflow-hidden relative
                           transform hover:scale-105 "
                >
                  <Image
                    src={pet.image || "/placeholder.svg"}
                    alt={pet.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-1 text-white text-center">
                    <span className="text-xs font-medium">{pet.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
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
