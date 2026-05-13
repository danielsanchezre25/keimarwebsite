import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import keimarDrawingOne from '../../imports/keimardraw1.png';
import keimarDrawingTwo from '../../imports/keimardraw2.png';
import keimarDrawingThree from '../../imports/keimardraw3.png';
import { useRef } from 'react';

const collections = [
  {
    title: 'Colección Principal',
    description: 'Diseños florales y colores vibrantes que celebran el renacimiento de la naturaleza.',
    items: [
      { image: keimarDrawingOne },
      { image: keimarDrawingTwo },
      { image: keimarDrawingThree },
    ],
  },
];

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="gallery" className="py-32 px-6 bg-[#faf8f6]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-center">
            Nuestras Colecciones
          </h2>
          <p className="text-xl text-[#6b6b6b] text-center mb-20 max-w-3xl mx-auto">
            Explora nuestras colecciones de diseños únicos. Cada pieza es una obra de arte que puedes llevar contigo.
          </p>

          <div className="space-y-24">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-12 rounded-sm shadow-sm"
              >
                <div className="mb-8">
                  <h3 className="text-3xl mb-4">{collection.title}</h3>
                  <p className="text-lg text-[#6b6b6b]">{collection.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {collection.items.map((item, i) => (
                    <div
                      key={i}
                      className="aspect-[3/4] bg-[#f5f0ed] rounded-sm overflow-hidden group cursor-pointer"
                    >
                      <div className="w-full h-full flex items-center justify-center text-[#d4a5a5] group-hover:scale-105 transition-transform duration-300">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={`Diseño ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-center">
                            <svg
                              className="w-16 h-16 mx-auto mb-4"
                              fill="none"
                              stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <p className="text-sm">Diseño {i + 1}</p>
                        </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-[#6b6b6b] mb-6">
              ¿Quieres ver más o hacer un pedido personalizado?
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-[#d4a5a5] text-white hover:bg-[#b88888] transition-all duration-300 rounded-sm"
            >
              Contáctanos
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
