import { motion } from "framer-motion";
import { useRef } from "react";

function Sec3() {
  const containerRef = useRef(null);

  const titles = [
    "Arquitectura",
    "Ingeniería",
    "Construcción",
    "Diseño de Productos",
    "Manufactura de Productos",
    "Operación",
    "Mantenimiento",
  ];

  const positions = [
    { top: "20%", left: "11%", size: 240 },
    { top: "5%", left: "60%", size: 250 },
    { top: "14%", left: "86%", size: 180 },
    { top: "5%", left: "30%", size: 180 },
    { top: "60%", left: "5%", size: 170 },
    { top: "48%", left: "78%", size: 260 },
    { top: "70%", left: "30%", size: 200 },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[110vh] bg-gradient-to-t from-[#011345] to-[#023BC6] overflow-hidden z-[-2]"
    >
      {/* Contenedor principal */}
      <div className="absolute inset-0 flex flex-col justify-between items-center">
        
        {/* Círculo central */}
        <div className="flex h-[60vh] flex items-end justify-center">
          <div className="rounded-full aspect-square w-[95vw] md:w-[50vw] xl:w-[35vw] bg-[url('/images/img4.png')] bg-cover bg-center p-6 flex items-center justify-center">
            <h1 className="text-2xl font-light w-[40%] xl:text-5xl text-white leading-tight text-center">
              Experiencia en todas las industrias que impactan al mundo.
            </h1>
          </div>
        </div>

        {/* Texto centrado en mobile */}
        <div className="w-full m-0 m-auto flex flex-col items-center justify-center text-white sm:hidden gap-2 px-6">
          {titles.map((title, index) => (
            <p key={index} className="text-center text-2xl font-light">
              {title}
            </p>
          ))}
        </div>
      </div>

      {/* Esferas en desktop */}
      <div className="hidden sm:block">
        {positions.map((pos, index) => (
          <div
            key={index}
            className="absolute rounded-full border-2 border-white flex items-center justify-center text-white font-thin"
            style={{
              top: pos.top,
              left: pos.left,
              width: pos.size,
              height: pos.size,
            }}
          >
            <span
              className="text-center"
              style={{
                fontSize: pos.size < 180 ? "14px" : "20px",
                padding: pos.size < 180 ? "6px" : "10px",
              }}
            >
              {titles[index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sec3;
