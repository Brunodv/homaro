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
  ];

  const positions = [
    { top: "0%", left: "30%", speed: 100 },
    { top: "0%", left: "60%", speed: 180 },
    { top: "10%", left: "80%", speed: 140 },
    { top: "15%", left: "13%", speed: 200 },
    { top: "50%", left: "80%", speed: 90 },
    { top: "60%", left: "5%", speed: 160 },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[120vh] bg-gradient-to-t from-[#011345] to-[#023BC6] overflow-hidden z-[-2]"
    >
      {positions.map((pos, index) => {
        const y = useTransform(scrollYProgress, [0, 1], [0, pos.speed]);

        return (
          <motion.div
            key={index}
            style={{
              y,
              position: "absolute",
              top: pos.top,
              left: pos.left,
              width: window.innerWidth < 640 ? 110 : 200,
              height: window.innerWidth < 640 ? 110 : 200,
              backgroundColor: "transparent",
              border: "2px solid #FFFFFF",
            }}
            className="rounded-full flex items-center justify-center text-white font-thin"
          >
            <span
              className="text-center"
              style={{
                fontSize: window.innerWidth < 640 ? "14px" : "20px",
                padding: window.innerWidth < 640 ? "6px" : "10px",
              }}
            >
              {titles[index]}
            </span>
          </motion.div>
        );
      })}

      {/* Círculo central con parallax */}
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 150]),
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="rounded-full aspect-square w-[70vw] md:w-[50vw] xl:w-[35vw] bg-[url('/images/img4.png')] bg-cover bg-center p-6 z-[-1] flex items-center justify-center">
          <h1 className="text-3xl xl:text-5xl text-white leading-tight text-center">
            Experiencia en todas las industrias que impactan al mundo.
          </h1>
        </div>
      </motion.div>
    </div>
  );
}

export default Sec3;
