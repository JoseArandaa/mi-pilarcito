"use client";

import Link from "next/link";
import { useState } from "react";

const playlist = [
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    cover: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
    description: "Nuestra primera canción juntos...",
  },
  {
    title: "All of Me",
    artist: "John Legend",
    cover: "https://i.scdn.co/image/ab67616d0000b273766c5b12c3dce11c95d0dfe8",
    description: "Para esos momentos especiales...",
  },
];

export default function Playlist() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-red-50 dark:from-pink-900 dark:to-red-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-red-600 dark:text-red-400 mb-12">
          Nuestra Playlist
        </h1>

        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/6A0wow3b355bCkItZnsQAA?utm_source=generator"
          width="100%"
          height="500"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>

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
