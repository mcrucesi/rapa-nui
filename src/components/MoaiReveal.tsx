import { motion } from "framer-motion";
import { MoaiIcon } from "./MoaiIcon";

export const MoaiReveal = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-slate-900 py-20 px-6">
      {/* Contenedor del Moai con resplandor */}
      <div className="relative group">
        {/* Aura de luz detrás del Moai */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.3, scale: 1.2 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-yellow-500 rounded-full blur-[100px]"
        />

        {/* Tu componente Moai con animación de entrada */}
        <motion.div
          initial={{ y: 50, opacity: 0, rotateY: 45 }}
          whileInView={{ y: 0, opacity: 1, rotateY: 0 }}
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 50,
          }}
          viewport={{ once: true }}
          className="relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,1)]"
        >
          <MoaiIcon className="w-48 h-64 md:w-64 md:h-80 text-slate-300 hover:text-white transition-colors duration-700" />
        </motion.div>
      </div>

      {/* Texto final revelador */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-center mt-12 space-y-4"
      >
        <h2 className="text-4xl md:text-6xl font-serif italic text-yellow-500">
          Iorana, Rapa Nui
        </h2>
        <p className="text-slate-400 tracking-[0.3em] uppercase text-sm">
          Nuestro próximo destino
        </p>

        {/* Botón de acción final / Confirmación */}
        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 bg-transparent border border-yellow-500/50 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300 text-xs tracking-widest uppercase font-bold"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ¿Lista para la maleta?
        </motion.button> */}
      </motion.div>
    </section>
  );
};
