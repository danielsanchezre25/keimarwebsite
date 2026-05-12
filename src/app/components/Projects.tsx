import { motion, useInView } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Plataforma completa de comercio electrónico construida con Next.js, implementando pasarelas de pago, gestión de inventario y panel de administración.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1715583622581-3245cefe117d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJsdWUlMjBncmFkaWVudCUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzc0NDU5MjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-[#3b82f6] to-[#1e40af]"
    },
    {
      title: "Music Production Dashboard",
      description: "Dashboard interactivo para productores musicales con análisis de audio en tiempo real y colaboración en la nube.",
      tech: ["React", "Django", "Web Audio API", "WebSockets"],
      image: "https://images.unsplash.com/photo-1762287614642-fb698c27bc39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGhlYWRwaG9uZXMlMjBhdWRpbyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzc0NTU1NzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-[#f97316] to-[#fb923c]"
    },
    {
      title: "SaaS Analytics Tool",
      description: "Herramienta de análisis empresarial con visualización de datos en tiempo real y reportes personalizables.",
      tech: ["React", "Node.js", "MongoDB", "D3.js"],
      image: "https://images.unsplash.com/photo-1582138825658-fb952c08b282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjb2RlJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzc0NTU1NzQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-[#60a5fa] to-[#3b82f6]"
    },
    {
      title: "Design System Library",
      description: "Sistema de diseño completo con componentes reutilizables, documentación interactiva y guías de estilo.",
      tech: ["React", "TypeScript", "Storybook", "Tailwind"],
      image: "https://images.unsplash.com/photo-1715583622581-3245cefe117d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJsdWUlMjBncmFkaWVudCUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzc0NDU5MjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      gradient: "from-[#1e40af] to-[#f97316]"
    }
  ];

  return (
    <section id="projects" ref={ref} className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#f97316] rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#3b82f6] rounded-full blur-3xl opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4" style={{ fontWeight: 700 }}>
            Proyectos <span className="text-[#f97316]">Destacados</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3b82f6] to-[#f97316] mx-auto mb-6" />
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
            Una selección de trabajos que demuestran mi pasión por crear soluciones innovadoras
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#1e3a8a]/20 border border-[#3b82f6]/30 backdrop-blur-sm">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity`} />
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl" style={{ fontWeight: 600 }}>{project.title}</h3>
                  <p className="text-[#94a3b8] leading-relaxed">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#3b82f6]/20 text-[#60a5fa] rounded-full text-sm border border-[#3b82f6]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#3b82f6] text-white rounded-lg hover:bg-[#2563eb] transition-all hover:scale-105">
                      <ExternalLink className="w-4 h-4" />
                      Ver Demo
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-transparent border border-[#3b82f6]/50 text-[#60a5fa] rounded-lg hover:bg-[#3b82f6]/20 transition-all">
                      <Github className="w-4 h-4" />
                      Código
                    </button>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
