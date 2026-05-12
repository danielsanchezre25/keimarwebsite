import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-6xl md:text-8xl mb-8 tracking-tight">
            Arte que se viste
          </h1>
          <p className="text-xl md:text-2xl text-[#6b6b6b] max-w-3xl mx-auto leading-relaxed mb-12">
            Diseños únicos pintados a mano en prendas exclusivas.
            <br />
            Cada pieza cuenta una historia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-6 justify-center"
        >
          <button
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-[#d4a5a5] text-white hover:bg-[#b88888] transition-all duration-300 rounded-sm"
          >
            Ver Colección
          </button>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-[#d4a5a5] text-[#1a1a1a] hover:bg-[#faf0ed] transition-all duration-300 rounded-sm"
          >
            Conoce más
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
        >
          <div className="p-8 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="mb-4 text-[#b88888]">Diseño Único</h3>
            <p className="text-[#6b6b6b]">
              Cada prenda es una obra de arte única, pintada a mano con dedicación y pasión.
            </p>
          </div>
          <div className="p-8 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="mb-4 text-[#b88888]">Calidad Premium</h3>
            <p className="text-[#6b6b6b]">
              Utilizamos solo las mejores telas y pinturas de alta calidad para garantizar durabilidad.
            </p>
          </div>
          <div className="p-8 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="mb-4 text-[#b88888]">Edición Limitada</h3>
            <p className="text-[#6b6b6b]">
              Piezas exclusivas en cantidades limitadas. Cuando se acaban, no vuelven.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
