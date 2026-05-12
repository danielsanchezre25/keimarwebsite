import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Instagram, Phone } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-center">
            Hablemos
          </h2>
          <p className="text-xl text-[#6b6b6b] text-center mb-20 max-w-2xl mx-auto">
            ¿Tienes una idea? ¿Quieres una pieza personalizada? Estamos aquí para escucharte.
          </p>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl mb-8">Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f5f0ed] rounded-sm flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#b88888]" />
                  </div>
                  <div>
                    <h4 className="mb-1">Email</h4>
                    <p className="text-[#6b6b6b]">contacto@keimar.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f5f0ed] rounded-sm flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-[#b88888]" />
                  </div>
                  <div>
                    <h4 className="mb-1">Instagram</h4>
                    <p className="text-[#6b6b6b]">@keimar_art</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f5f0ed] rounded-sm flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#b88888]" />
                  </div>
                  <div>
                    <h4 className="mb-1">Teléfono</h4>
                    <p className="text-[#6b6b6b]">+52 123 456 7890</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-[#faf0ed] rounded-sm">
                <h4 className="mb-4">Horario de Atención</h4>
                <p className="text-[#6b6b6b] mb-2">Lunes - Viernes: 10:00 - 18:00</p>
                <p className="text-[#6b6b6b]">Sábado: 10:00 - 14:00</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-8">Envíanos un Mensaje</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#faf8f6] border border-[#d4a5a5]/20 rounded-sm focus:outline-none focus:border-[#d4a5a5] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#faf8f6] border border-[#d4a5a5]/20 rounded-sm focus:outline-none focus:border-[#d4a5a5] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-[#faf8f6] border border-[#d4a5a5]/20 rounded-sm focus:outline-none focus:border-[#d4a5a5] transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-[#d4a5a5] text-white hover:bg-[#b88888] transition-all duration-300 rounded-sm"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>

          <div className="mt-24 pt-12 border-t border-[#d4a5a5]/20 text-center">
            <p className="text-[#6b6b6b]">
              © 2026 Keimar. Arte que se viste. Todos los derechos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
