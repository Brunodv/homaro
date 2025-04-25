import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Sec3() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  const titles = [
    "Diseño de Productos",
    "Ingeniería",
    "Construcción",
    "Arquitectura",
    "Operación",
    "Manufactura de Productos",
    "Mantenimiento",
  ];

  const positions = [
    { top: "0%", left: "30%", speed: 100, size: 180, radius: 500, angle: 85 },
    { top: "0%", left: "60%", speed: 180, size: 250, radius: 330, angle: 170 },
    { top: "14%", left: "86%", speed: 140, size: 180, radius: 670, angle: 230 },
    { top: "20%", left: "11%", speed: 200, size: 240, radius: 700, angle: 50 },
    { top: "48%", left: "78%", speed: 90, size: 260, radius: 660, angle: 270 },
    { top: "60%", left: "5%", speed: 200, size: 170, radius: 700, angle: 10 },
    { top: "60%", left: "5%", speed: 200, size: 170, radius: 700, angle: -30 },
  ];

  // Ángulo de rotación para las esferas basado en el scroll
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <>
    <div
      ref={containerRef}
      className="relative w-full min-h-[140vh] bg-gradient-to-t from-[#011345] to-[#023BC6] overflow-hidden z-[-2]"
    >
      {/* Círculo central con parallax */}
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 50]), // Menos desplazamiento vertical
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="rounded-full aspect-square w-[70vw] md:w-[50vw] xl:w-[35vw] bg-[url('/images/img4.png')] bg-cover bg-center p-6 flex items-center justify-center">
          <h1 className="text-3xl xl:text-5xl text-white leading-tight text-center">
            Experiencia en todas las industrias que impactan al mundo.
          </h1>
        </div>
      </motion.div>

      {/* Esferas */}
      {positions.map((pos, index) => {
        // Movimiento de la esfera (traslación circular)
        const angle = useTransform(rotation, [0, 360], [pos.angle, pos.angle + 360]);

        // Calcular las posiciones X y Y en base al ángulo y radio
        const x = useTransform(angle, (angle) => `${Math.cos((angle * Math.PI) / 180) * pos.radius + window.innerWidth / 2}px`);
        const y = useTransform(angle, (angle) => `${Math.sin((angle * Math.PI) / 180) * pos.radius + window.innerHeight / 2}px`);

        return (
          <motion.div
            key={index}
            style={{
              x,
              y,
              position: "absolute",
              width: pos.size, // Tamaño dinámico del círculo
              height: pos.size, // Tamaño dinámico del círculo
              backgroundColor: "transparent",
              border: "2px solid #FFFFFF",
              transformOrigin: "center", // Hace que las esferas roten alrededor de su propio centro
            }}
            className="rounded-full flex items-center justify-center text-white font-thin"
          >
            <span
              className="text-center"
              style={{
                fontSize: pos.size < 180 ? "14px" : "20px", // Ajusta el tamaño del texto según el tamaño del círculo
                padding: pos.size < 180 ? "6px" : "10px",
              }}
            >
              {titles[index]}
            </span>
          </motion.div>
        );
      })}
    </div></>
  );
}

export default Sec3;
