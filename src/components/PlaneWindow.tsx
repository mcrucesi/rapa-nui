import { motion } from "framer-motion";

export const PlaneWindow = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Contenedor Principal del Marco */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-20"
      >
        {/* Marco exterior (El plástico del avión) */}
        <div className="relative w-80 h-96 md:w-[500px] md:h-[600px] rounded-[80px] bg-slate-200 p-[35px] shadow-2xl shadow-black">
          {/* HUECO DE LA VENTANA */}
          <div className="relative w-full h-full rounded-[50px] overflow-hidden bg-sky-900 border-4 border-slate-400/30">
            {/* IMAGEN DEL OCÉANO (Ahora dentro del hueco) */}
            <motion.img
              initial={{ scale: 1.5 }}
              animate={{ scale: 1, x: [0, 10, 0] }}
              transition={{
                scale: { duration: 3 },
                x: { duration: 20, repeat: Infinity, ease: "linear" },
              }}
              src="/licensed-image.jpeg"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Capas de vidrio y reflejos */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 shadow-[inner_0_0_50px_rgba(0,0,0,0.5)] pointer-events-none" />
          </div>

          {/* Detalles del avión (Tornillos) */}
          <div className="absolute top-10 left-10 w-2 h-2 bg-slate-400 rounded-full shadow-inner" />
          <div className="absolute top-10 right-10 w-2 h-2 bg-slate-400 rounded-full shadow-inner" />
        </div>
        {/* Texto informativo */}
        <div className="absolute -bottom-16 left-0 right-0 text-center">
          <p className="text-white text-sm tracking-[0.4em] uppercase font-light">
            Cruzando el Pacífico a 3700 kilometros de distancia!
          </p>
        </div>
      </motion.div>

      {/* Nubes sutiles pasando por fuera del marco para dar profundidad */}
      <motion.div
        animate={{ x: [-200, 1200] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-0 w-64 h-20 bg-white/10 blur-3xl"
      />
    </div>
  );
};
