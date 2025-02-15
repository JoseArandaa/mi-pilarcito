"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Caveat, Kalam } from "next/font/google";
import { Homemade_Apple } from "next/font/google";
const caveat = Caveat({ subsets: ["latin"] });
const kalam = Kalam({ weight: "400", subsets: ["latin"] });
const homemade = Homemade_Apple({ weight: "400", subsets: ["latin"] });

const letters = [
  {
    id: 1,
    category: "Para cuando me extrañes",
    title: "Te extraño también...",
    content:
      "Cuando leas esto, quiero que sepas que siempre estás en mis pensamientos. Desde que te conocí, hay un rincón de mi mente y mi corazón que es solo tuyo. No importa lo que esté haciendo, siempre hay un momento en el que me pongo a pensar en vos y en todo lo que estamos construyendo.Te extraño de una manera difícil de explicar. Es raro extrañar tanto a alguien sin haberlo visto en persona, pero con vos se siente real. A veces la espera se hace larga, pero cada día que pasa es uno menos para vernos, y eso me da fuerzas.No suelo escribir cosas así, pero quiero que sepas lo mucho que significás para mí. No hace falta que esto sea perfecto, lo único que importa es que sepas que te amo y que siempre voy a estar acá para vos.",
    unlockDate: "2024-02-14",
    isLocked: true,
  },
  {
    id: 2,
    category: "Para cuando estés triste",
    title: "Desearia estar ahi con vs",
    content:
      "Mi amor, sé que ahora estás triste, y me duele no poder estar ahí para abrazarte fuerte y decirte en persona cuánto te amo. Pero quiero que sepas algo: no importa qué pase, no importa cómo te sientas en este momento, yo estoy con vos. Siempre.Ojalá pudiera hacer que todo lo que te preocupa desaparezca, o al menos sacarte una sonrisa ahora mismo. Pero si algo quiero que recuerdes es que no estás sola, que tenés a alguien que te ama con todo el corazón, que piensa en vos a cada momento y que daría lo que sea por verte bien.Me encanta todo de vos, no solo cuando estás feliz, sino también cuando estás así, porque sos real, porque sos vos, y te amo en cada una de tus versiones. Me encanta cómo sos, cómo pensás, cómo sentís. Me encanta tu risa, pero también me encanta cuando te abrís conmigo, cuando confiás en mí para contármelo todo.Si pudiera, te abrazaría ahora mismo y no te soltaría hasta que te sintieras mejor. Pero hasta que llegue ese día, quiero que sepas que acá estoy, que te amo infinito y que pase lo que pase, siempre voy a estar para vos. Porque sos mi princesa, porque no hay nada en el mundo que quiera más que verte bien. Así que si hoy el día se siente pesado, apoyate en mí. Si necesitás hablar, acá estoy. Y si solo querés que te recuerde cuánto te amo… también lo hago, y lo voy a hacer siempre. ❤️",
    unlockDate: "2024-02-14",
    isLocked: true,
  },
  {
    id: 3,
    category: "Para cuando estemos peleados",
    title: "Recuerda que te amo...",
    content:
      "Mi amor, sé que ahora estamos peleados y capaz las cosas no están bien, pero lo único que quiero que sepas es que te amo. No importa la discusión, no importa el enojo del momento, nada cambia lo que siento por vos. Porque sos lo mejor que tengo, porque sos mi princesa, y no hay nada en el mundo que me importe más que nosotros.Me duele que estemos así, me duele pensar que capaz te hice sentir mal, porque lo último que quiero es lastimarte. Pero también sé que ninguna pelea es más grande que el amor que nos tenemos. Siempre vamos a tener diferencias, porque somos dos personas distintas, pero lo importante es que nunca nos olvidemos de lo que sentimos, de lo que estamos construyendo juntos.No quiero que esto nos separe ni un segundo más de lo que ya nos separa la distancia. No quiero que el orgullo gane, porque prefiero mil veces abrazarte, aunque sea con palabras, antes que tener razón en algo que al final no importa. Lo único que me importa es que estemos bien, que vos estés bien, porque te amo con todo mi corazón y lo voy a hacer siempre.Cuando te sientas lista, quiero que hablemos, quiero arreglar esto, quiero seguir sumando momentos con vos y no perdiéndolos por una pelea. Porque si hay algo que tengo claro, es que no quiero un solo día sin vos en mi vida. ",
    unlockDate: "2024-02-14",
    isLocked: true,
  },
  {
    id: 4,
    category: "Para cuando necesites motivación",
    title: "Vs podes!",
    content:
      "Sentís que no podés más, que el mundo se te hace cuesta arriba o que las cosas no están saliendo como querés, quiero que leas esto y recuerdes algo: vos sos muchísimo más fuerte de lo que creés.No importa cuántas veces tropieces, lo único que importa es que te levantás. Y yo sé que siempre lo hacés, porque sos una luchadora, porque tenés una luz única, porque no hay nada que pueda frenarte cuando te proponés algo. A veces la vida se siente injusta, a veces el cansancio pesa, pero quiero que cuando eso pase, te tomes un respiro y recuerdes todo lo que ya lograste, todo lo que sos y todo lo que aún tenés por delante. Yo lo veo en vos todos los días: la capacidad inmensa que tenés para brillar, para crecer, para llegar adonde vos quieras. Nunca dudes de lo increíble que sos, nunca dudes de lo lejos que podés llegar, y sobre todo, nunca dudes de que yo voy a estar acá, creyendo en vos incluso cuando vos no lo hagas. Porque te amo con todo mi ser, y porque si hay algo de lo que estoy seguro, es de que sos capaz de TODO. No te rindas, porque vos naciste para ganar. ",
    unlockDate: "2024-02-14",
    isLocked: true,
  },
  {
    id: 5,
    category: "Para cuando tengas un logro",
    title: "¡Felicitaciones mi amor!",
    content:
      "Qué alegría saber que lograste algo tan importante. No sé los detalles, pero lo que importa es que lo conseguiste, y eso es increíble. Lo que más me gusta de vos es esa capacidad de seguir adelante, de ponerle todo a lo que te propones, y sé que este es solo un paso más hacia todo lo que podés lograr. No importa lo grande o chico que sea este logro, lo importante es que es tuyo, y me siento tan feliz de verte alcanzar tus metas. Te admiro muchísimo, porque no solo haces las cosas, sino que lo hacés con todo tu corazón y eso es lo que te hace única. Te celebro siempre, porque cada paso que das, para mí, es un motivo más para sentirme orgulloso de vos",
    unlockDate: "2024-02-14",
    isLocked: true,
  },
  {
    id: 6,
    category: "Para cuando necesites reír",
    title: "Una sonrisa para ti...",
    content:
      "Si estás leyendo esto, es porque quiero que te rías un poco. No sé si te agarré en un buen momento o no, pero si no estás sonriendo, vamos a tener un problema, eh. Porque amo tu risa, me encanta cuando te tentás, cuando te reís hasta que te duele la panza.Así que pensá en algo gracioso, no sé, algún momento bizarro que hayamos hablado, alguna boludez que te haya dicho, o simplemente en lo ridículo que soy escribiendo esto solo para hacerte reír. Pero si con todo esto no largaste aunque sea una sonrisa, voy a tener que tomar medidas más drásticas… como mandarte audios diciendo cualquier pavada hasta que lo logre. No hay nada más lindo que verte reír, y lo sabés. Así que dale, largá esa risa que tanto me gusta. ",
    unlockDate: "2024-02-14",
    isLocked: true,
  },
  {
    id: 7,
    category: "Para cuando dudes de mi amor",
    title: "Lee esto",
    content:
      "Sé que en algún momento pueden surgir dudas, y quiero que sepas que mi amor por vos es más fuerte de lo que a veces puedo expresar con palabras. No importa lo que pase o lo que nos toque enfrentar, mi sentimiento por vos no cambia. Cada día que pasa me doy cuenta de lo afortunado que soy por tenerte en mi vida, y eso es algo que jamás voy a dejar de sentir. Si alguna vez llegas a dudar de lo que siento, quiero que recuerdes que mi amor por vos es constante y verdadero. Lo que te prometí lo llevo en mi corazón, y siempre lo voy a cumplir. Te amo con todo mi ser, y aunque a veces las palabras no alcancen, quiero que confíes siempre en que mis sentimientos por vos son inquebrantables. No hay nada que cambie lo que siento por vos, y siempre vas a ser mi prioridad",
    unlockDate: "2024-02-14",
    isLocked: true,
  },
];

export default function Cartas() {
  const [unlockedLetters, setUnlockedLetters] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [...new Set(letters.map((letter) => letter.category))];

  useEffect(() => {
    const now = new Date();
    const unlocked = letters.filter((letter) => {
      const unlockDate = new Date(letter.unlockDate);
      return now >= unlockDate;
    });
    setUnlockedLetters(unlocked.map((l) => l.id));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-red-50 dark:from-pink-900 dark:to-red-900 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-red-600 dark:text-red-400 animate-slide-down">
          Cartas para Vos
        </h1>
        {!selectedCategory ? (
          <div className="text-center text-gray-500 mt-12 mb-10">
            Selecciona una categoría para ver las cartas disponibles
          </div>
        ) : null}
        {/* Categories Selection */}
        {!selectedCategory ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`p-6 text-left rounded-xl transition-all duration-300
                  bg-[#1A1B1E] 
                  border shadow-md hover:shadow-lg`}
              >
                <h3 className="text-xl font-medium text-white">{category}</h3>
              </button>
            ))}
          </div>
        ) : (
          <div className="mb-8">
            <button
              onClick={() => setSelectedCategory(null)}
              className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 animate-slide-in-left"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#ffff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span
                className={`text-lg text-[#FFFF] animate-slide-in-left`}
                style={{ animationDelay: "100ms" }}
              >
                Elegir otra categoría
              </span>
            </button>
          </div>
        )}

        {/* Letters Display */}
        {selectedCategory && (
          <div className="space-y-8 animate-fade-in">
            {letters
              .filter((letter) => letter.category === selectedCategory)
              .map((letter, index) => {
                const isUnlocked = unlockedLetters.includes(letter.id);
                return (
                  <div
                    key={letter.id}
                    className={`p-8 rounded-sm shadow-md
                      ${
                        isUnlocked
                          ? "hover:shadow-lg transform hover:-translate-y-0.5"
                          : "opacity-90"
                      }
                      transition-all duration-500 ease-in-out
                      bg-white/40
                      relative overflow-hidden
                      before:absolute before:inset-0 
                      before:bg-[url('/old-paper.webp')] before:opacity-70 before:mix-blend-multiply
                      after:absolute after:inset-0 
                      border-[#d4c5b9] dark:border-[#3d3631]
                      animate-slide-up`}
                    style={{
                      animationDelay: `${index * 150}ms`,
                    }}
                  >
                    <div className="relative z-10">
                      <div className="flex flex-col space-y-4 mb-6">
                        <div className="flex justify-end mb-2">
                          <div
                            className={`text-[#2a1810] italic ${caveat.className} text-lg`}
                          >
                            14 de Febrero, 2024
                          </div>
                        </div>
                        <div className="flex flex-col space-y-1 mb-4">
                          <div
                            className={`flex space-x-2 text-[#2a1810] ${caveat.className} text-lg`}
                          >
                            <span
                              className={`${homemade.className} opacity-75`}
                            >
                              Para:
                            </span>
                            <span
                              className={`${homemade.className} font-semibold`}
                            >
                              Pilar
                            </span>
                          </div>
                        </div>
                        <div>
                          <p
                            className={`text-base text-[#3d2b1f] font-medium drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] ${caveat.className}`}
                          >
                            {letter.category}
                          </p>
                          <h2
                            className={`text-2xl font-semibold text-[#2a1810] drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] ${kalam.className}`}
                          >
                            {letter.title}
                          </h2>
                        </div>
                      </div>
                      {isUnlocked ? (
                        <p
                          className={`text-[#2a1810] leading-relaxed pl-4 text-xl relative drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] ${kalam.className}`}
                        >
                          {letter.content}
                        </p>
                      ) : (
                        <p
                          className={`text-[#3d2b1f] pl-12 relative font-medium drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] ${caveat.className}`}
                        >
                          Disponible el{" "}
                          {new Date(letter.unlockDate).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                    <div
                      className={`mt-10 flex space-x-4 text-[#2a1810] ${caveat.className} text-lg justify-end`}
                    >
                      <span className={`${homemade.className} opacity-75`}>
                        De:
                      </span>
                      <span className={`${homemade.className} text-3xl`}>
                        Jose
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
        {!selectedCategory && (
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              Volver al Inicio
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
