import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl mb-12 text-center">
            Nuestra Historia
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
                Keimar nace de la pasión por el arte y la moda. Creemos que cada prenda debe ser más que solo ropa: debe ser una expresión de individualidad, una pieza que cuente tu historia.
              </p>
              <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
                Cada diseño es cuidadosamente pintado a mano sobre telas de alta calidad, asegurando que tu pieza sea verdaderamente única. No hay dos prendas iguales.
              </p>
              <p className="text-lg text-[#6b6b6b] leading-relaxed">
                Trabajamos con técnicas tradicionales de pintura textil, combinadas con diseños contemporáneos que reflejan la estética moderna.
              </p>
            </div>

            <div className="bg-[#f5f0ed] p-12 rounded-sm">
              <h3 className="text-2xl mb-8 text-[#b88888]">Nuestro Proceso</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="mb-2">1. Diseño</h4>
                  <p className="text-[#6b6b6b]">
                    Cada diseño comienza como un boceto, inspirado en el arte, la naturaleza y las emociones.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2">2. Selección</h4>
                  <p className="text-[#6b6b6b]">
                    Elegimos cuidadosamente cada prenda, asegurándonos de que sea de la más alta calidad.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2">3. Creación</h4>
                  <p className="text-[#6b6b6b]">
                    Pintamos a mano cada diseño con pinturas textiles profesionales.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2">4. Acabado</h4>
                  <p className="text-[#6b6b6b]">
                    Fijamos los colores con calor para garantizar durabilidad y resistencia al lavado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
