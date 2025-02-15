"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
export default function Historia({ events }) {
  const [paths, setPaths] = useState([]);
  const cardRefs = useRef([]);
  const timelineEvents = [
    {
      date: "02 de Febrero 2024",
      title: "Nuestro Primera Llamada",
      description: "La vez que nos conocimos",
    },
    {
      date: "07 de Febrero 2024",
      title: "El dia que nos hicimos Novios",
      description: "El dia mas feliz de mi vida",
    },
    {
      date: "14 de Febrero 2024",
      title: "Nuestro Primer San Valentín",
      description: "Un día especial para celebrar nuestro amor",
    },
    {
      date: "3 de mayo",
      title: "Tu cumpleaños",
      description: "Celebramos tu cumple",
    },
  ];
  useEffect(() => {
    const calculatePaths = () => {
      const newPaths = [];

      for (let i = 0; i < cardRefs.current.length - 1; i++) {
        const currentCard = cardRefs.current[i];
        const nextCard = cardRefs.current[i + 1];

        if (currentCard && nextCard) {
          const currentDot = currentCard.querySelector(".timeline-dot");
          const nextDot = nextCard.querySelector(".timeline-dot");

          if (currentDot && nextDot) {
            const currentRect = currentDot.getBoundingClientRect();
            const nextRect = nextDot.getBoundingClientRect();

            const currentX =
              i % 2 === 0
                ? currentRect.left + currentRect.width / 2
                : currentRect.right - currentRect.width / 2;
            const nextX =
              (i + 1) % 2 === 0
                ? nextRect.left + nextRect.width / 2
                : nextRect.right - nextRect.width / 2;

            const currentPoint = {
              x: currentX,
              y: currentRect.top + currentRect.height / 2,
            };
            const nextPoint = {
              x: nextX,
              y: nextRect.top + nextRect.height / 2,
            };

            const controlPoint1 = {
              x: currentPoint.x,
              y: currentPoint.y + (nextPoint.y - currentPoint.y) * 0.25,
            };
            const controlPoint2 = {
              x: nextPoint.x,
              y: currentPoint.y + (nextPoint.y - currentPoint.y) * 0.75,
            };

            // Create the SVG path
            const path = `M ${currentPoint.x} ${currentPoint.y} 
                         C ${controlPoint1.x} ${controlPoint1.y},
                           ${controlPoint2.x} ${controlPoint2.y},
                           ${nextPoint.x} ${nextPoint.y}`;

            newPaths.push(path);
          }
        }
      }
      setPaths(newPaths);
    };

    calculatePaths();
    window.addEventListener("resize", calculatePaths);
    return () => window.removeEventListener("resize", calculatePaths);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-red-50 dark:from-pink-900 dark:to-red-900 py-12">
      <svg
        className="absolute inset-0 h-full w-full"
        style={{ pointerEvents: "none" }}
      >
        {paths.map((path, index) => (
          <path
            key={index}
            d={path}
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="opacity-30"
          />
        ))}
      </svg>

      {/* Timeline cards */}
      <div className="relative z-10 space-y-12 max-w-2xl mx-auto grid place-items-center">
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`relative rounded-xl p-6 w-[330px] bg-[#1A1B1E] ${
              index === timelineEvents.length - 1 && "backdrop-blur-md "
            }`}
          >
            {index === timelineEvents.length - 1 && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="text-3xl font-bold text-white">
                  Próximamente...
                </span>
              </div>
            )}

            {/* Red accent bar */}
            <div
              className={`absolute left-0 top-0 h-full w-3 bg-red-500 rounded-l-xl ${
                index === timelineEvents.length - 1 ? "opacity-70" : ""
              }`}
            />

            {/* Timeline dot */}
            <div
              className={`timeline-dot absolute top-8 h-4 w-4 rounded-full border-4 ${
                index === timelineEvents.length - 1
                  ? "border-white/20 bg-red-500/70"
                  : "border-[#13151a] bg-red-500"
              }
                ${index % 2 === 0 ? "left-[20px]" : "right-[10px]"}`}
            />

            {/* Content */}
            <div
              className={`ml-7 ${
                index === timelineEvents.length - 1
                  ? "opacity-30 blur-[2px]"
                  : ""
              }`}
            >
              <p
                className={`text-lg font-medium ${
                  index === timelineEvents.length - 1
                    ? "text-red-300"
                    : "text-red-500"
                }`}
              >
                {event.date}
              </p>
              <h3 className="mt-2 text-lg font-bold text-white leading-tight">
                {event.title}
              </h3>
              <p
                className={`mt-3 ${
                  index === timelineEvents.length - 1
                    ? "text-gray-200"
                    : "text-gray-400"
                } text-sm`}
              >
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 w-[330px]"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
