import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-[#3b82f6]/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-[#94a3b8]"
          >
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-[#f97316] fill-[#f97316]" />
            <span>por Daniel Sánchez</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#94a3b8] text-sm"
          >
            © 2026 Todos los derechos reservados
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-[#60a5fa] text-sm">
            Construido con React, Motion & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
