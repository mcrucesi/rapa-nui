import { motion } from "framer-motion";

export const FlightMap = () => {
  // Definimos la misma ruta para el trazo y para el movimiento del avión
  const flightPath = "M 100 300 Q 400 50 700 300";

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] bg-slate-950/40 rounded-3xl border border-white/5 p-4 md:p-8 overflow-hidden backdrop-blur-md">
      {/* 1. FONDO: MAPA ESTILIZADO (Corregido para ser visible) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg viewBox="0 0 800 400" className="w-full h-full">
          {/* Grid de coordenadas */}
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Silueta de Sudamérica (Costa de Chile) mejorada */}
          <path
            d="M 0 100 Q 40 120 80 180 T 120 300 L 100 400 L 0 400 Z"
            fill="white"
            className="opacity-20"
          />

          {/* Círculos de Radar sobre Rapa Nui para dar contexto de isla */}
          <circle
            cx="700"
            cy="300"
            r="30"
            stroke="white"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 4"
            className="opacity-40"
          />
          <circle
            cx="700"
            cy="300"
            r="60"
            stroke="white"
            strokeWidth="1"
            fill="none"
            strokeDasharray="8 8"
            className="opacity-20"
          />
        </svg>
      </div>

      {/* 2. CAPA DE VUELO PRINCIPAL */}
      <svg
        viewBox="0 0 800 400"
        className="relative w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient id="flightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="1" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.5" />
          </linearGradient>

          {/* Filtro de resplandor para los puntos */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Trayectoria curva (Animada con trazo) */}
        <motion.path
          d={flightPath}
          fill="none"
          stroke="url(#flightGradient)"
          strokeWidth="3"
          strokeDasharray="1000"
          initial={{ strokeDashoffset: 1000 }}
          whileInView={{ strokeDashoffset: 0 }}
          transition={{ duration: 4, ease: "easeInOut" }}
          viewport={{ once: true }}
        />

        {/* Origen: Santiago */}
        <g filter="url(#glow)">
          <circle cx="100" cy="300" r="5" fill="#fbbf24" />
          <motion.circle
            cx="100"
            cy="300"
            r="10"
            stroke="#fbbf24"
            strokeWidth="1"
            fill="none"
            animate={{ scale: [1, 2], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </g>

        {/* Destino: Rapa Nui */}
        <g filter="url(#glow)">
          <circle cx="700" cy="300" r="6" fill="#fbbf24" />
          <motion.circle
            cx="700"
            cy="300"
            r="15"
            stroke="#fbbf24"
            strokeWidth="1"
            fill="none"
            animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </g>

        {/* ICONO DE AVIÓN (Siguiendo la curva real) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <path id="planePath" d={flightPath} fill="none" stroke="none" />
          <motion.g>
            <text fontSize="24">
              <textPath href="#planePath" startOffset="0%">
                ✈️
                <animate
                  attributeName="startOffset"
                  from="0%"
                  to="100%"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </textPath>
            </text>
          </motion.g>
        </motion.g>

        {/* Textos de Ciudades */}
        <text
          x="100"
          y="340"
          fill="white"
          fontSize="12"
          textAnchor="middle"
          className="font-light tracking-widest opacity-60"
        >
          SANTIAGO
        </text>
        <text
          x="700"
          y="340"
          fill="#fbbf24"
          fontSize="14"
          textAnchor="middle"
          className="font-bold tracking-[0.2em]"
        >
          RAPA NUI
        </text>
      </svg>
    </div>
  );
};
