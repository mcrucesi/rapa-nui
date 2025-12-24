import { motion, useScroll, useTransform } from "framer-motion";
import confetti from "canvas-confetti";
import { Countdown } from "./components/Countdown";
import { FlightMap } from "./components/FlightMap";
import { PlaneWindow } from "./components/PlaneWindow";
import { MoaiReveal } from "./components/MoaiReveal";
import { Heart } from "lucide-react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const handleReveal = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#fbbf24", "#ffffff", "#22c55e"],
    });
  };

  return (
    <div className="bg-[#050505] text-white selection:bg-yellow-500/30">
      {/* SECCIÓN 1: EL MISTERIO */}
      <motion.section
        style={{ opacity, scale }}
        className="h-screen sticky top-0 flex flex-col items-center justify-center p-6"
      >
        {/* Decoración de Navidad */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <span className="text-6xl md:text-8xl">🎄</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-yellow-500 uppercase tracking-[0.5em] mb-4 text-sm text-center"
        >
          Preparate para algo especial
        </motion.p>
        <h1 className="text-5xl md:text-8xl font-serif italic mb-12 text-center leading-tight">
          Nuestra siguiente aventura
          <br />
          comienza en...
        </h1>
        <Countdown targetDate="2026-05-08T09:05:00" />
        <div className="absolute bottom-12 animate-bounce opacity-30">
          <p className="text-xs tracking-widest uppercase">
            Desliza para descubrir
          </p>
        </div>

          {/* Estrellas decorativas */}
          <div className="absolute top-20 left-10 text-yellow-500 opacity-30 text-2xl">
            ✨
          </div>
          <div className="absolute top-40 right-10 text-yellow-500 opacity-30 text-2xl">
            ✨
          </div>
          <div className="absolute bottom-20 left-20 text-yellow-500 opacity-30 text-2xl">
            ✨
          </div>
          <div className="absolute bottom-40 right-20 text-yellow-500 opacity-30 text-2xl">
            ✨
          </div>
      </motion.section>

      {/* SECCIÓN INTERMEDIA: VENTANA DEL AVIÓN */}
      <section className="relative z-10 h-screen bg-gradient-to-b from-transparent via-slate-900 to-blue-950">
        <PlaneWindow />
      </section>

      {/* SECCIÓN 3: LA REVELACIÓN */}
      <section className="relative z-10 min-h-screen bg-gradient-to-b from-blue-950 via-blue-950 to-black px-6 py-24 flex flex-col items-center">
        <motion.div
          onViewportEnter={handleReveal}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <div className="mb-8 flex justify-center">
            <MoaiReveal />
          </div>
          <p className="text-xl md:text-2xl font-light opacity-80 mb-16 max-w-xl mx-auto">
            El ombligo del mundo nos espera! Te amo Mucho{" "}
            <Heart className="inline-block ml-2 text-red-500" />
          </p>

          <FlightMap />

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            <InfoCard title="Destino" desc="Isla de Pascua, Chile" />
            <InfoCard title="Vuelo" desc="LATAM LA841" />
            <InfoCard title="Fecha" desc="8 de mayo de 2026" />
          </div>
        </motion.div>
      </section>

      {/* SECCIÓN 4: MENSAJE DE NAVIDAD */}
      <section className="relative z-10 min-h-screen bg-gradient-to-b from-black via-red-950/20 to-black px-6 py-24 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Decoración de Navidad */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <span className="text-6xl md:text-8xl">🎄</span>
          </motion.div>

          {/* Título */}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-6xl font-serif italic mb-8 text-yellow-500"
          >
            Feliz Navidad, mi amor
          </motion.h2>

          {/* Mensaje principal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-white/90"
          >
            <p>
              Este no es solo un viaje a una isla remota en medio del Pacífico.
            </p>
            <p>
              Seguiremos explorando Chile y el mundo, creando memorias para toda
              la vida.
            </p>
            <p>
              Rapa Nui representa todo lo que somos:{" "}
              <span className="text-yellow-400 font-medium">
                únicos, misteriosos, y eternos
              </span>
            </p>
            <p className="text-2xl font-serif italic text-yellow-500 mt-8">
              Este regalo es más que un destino...
            </p>
            <p className="text-xl">
              Es un recordatorio de que contigo, cada aventura es
              extraordinaria.
            </p>
          </motion.div>

          {/* Corazón animado */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            className="mt-12"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-16 h-16 md:w-20 md:h-20 mx-auto text-red-500 fill-red-500" />
            </motion.div>
          </motion.div>

          {/* Firma */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <p className="text-sm md:text-base tracking-[0.3em] uppercase opacity-60">
              Con todo mi amor
            </p>
            <p className="text-xl md:text-2xl font-serif italic mt-2 text-yellow-500">
              Feliz Navidad 2025
            </p>
          </motion.div>

          {/* Estrellas decorativas */}
          <div className="absolute top-20 left-10 text-yellow-500 opacity-30 text-2xl">
            ✨
          </div>
          <div className="absolute top-40 right-10 text-yellow-500 opacity-30 text-2xl">
            ✨
          </div>
          <div className="absolute bottom-20 left-20 text-yellow-500 opacity-30 text-2xl">
            ✨
          </div>
          <div className="absolute bottom-40 right-20 text-yellow-500 opacity-30 text-2xl">
            ✨
          </div>
        </motion.div>
      </section>
    </div>
  );
}

const InfoCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="p-8 border border-white/5 bg-white/5 backdrop-blur-md rounded-2xl">
    <h4 className="text-yellow-500 text-xs uppercase tracking-widest mb-2">
      {title}
    </h4>
    <p className="text-lg font-medium">{desc}</p>
  </div>
);
