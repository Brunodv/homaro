import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

function Sec3() {
  const containerRef = useRef(null);

  // Estado para manejar si es móvil o no
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detecta el tamaño de la ventana para definir si es móvil
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);  // Cambia este valor si deseas otro breakpoint
    };

    window.addEventListener("resize", handleResize);
    handleResize();  // Llamar al principio para establecer el estado

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Usa el contenedor para calcular el scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // empieza a crecer al entrar, termina al salir
  });

  // Animación solo en desktop
  const width = useTransform(scrollYProgress, [0, 1], ["55vw", "200vw"]);
  const height = useTransform(scrollYProgress, [0, 1], ["150vh", "200vh"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.7], ["100% 100% 0% 0%", "0% 0% 0% 0%"]);

  // Valores fijos para móviles
  const mobileWidth = "100vw";
  const mobileHeight = "100vh";
  const mobileBorderRadius = "0%";

  return (
    <div className="flex items-center justify-center min-h-screen w-full overflow-x-hidden">
      <motion.div
        ref={containerRef}
        className="bg-gradient-to-t from-[#011345] to-[#023BC6] overflow-hidden z-[-2]"
        style={{
          // Se aplica condicionalmente: si es móvil, se usan valores fijos, si no, se aplican las animaciones
          width: isMobile ? mobileWidth : width,
          height: isMobile ? mobileHeight : height,
          borderRadius: isMobile ? mobileBorderRadius : borderRadius,
        }}
      >
        {/* Contenedor principal */}
        <div className="flex flex-col justify-center items-center w-full h-full">
          
          {/* Contenido principal */}
          <div className="flex h-[60vh] xl:mt-70 xl:h-[67vh] rounded-full flex items-end justify-center">
            <div className="rounded-full aspect-square w-[95vw] md:w-[50vw] xl:w-[35vw] bg-[url('/images/img4.png')] bg-cover bg-center p-6 flex items-center justify-center">
              <h1 className="text-2xl font-light w-[40%] xl:text-5xl text-white leading-tight text-center">
                Experiencia en todas las industrias que impactan al mundo.
              </h1>
            </div>
          </div>

          {/* Texto centrado en mobile */}
          <div className="w-full m-0 m-auto flex flex-col items-center justify-center text-white sm:hidden gap-2 px-6">
            {["Arquitectura", "Ingeniería", "Construcción", "Diseño de Productos", "Manufactura de Productos", "Operación", "Mantenimiento"].map((title, index) => (
              <p key={index} className="text-center text-2xl font-light">
                {title}
              </p>
            ))}
          </div>
        </div>

        {/* Esferas en desktop */}
        {/* Esferas en desktop con fade-in */}
<div className="hidden sm:block">
  {[
    { top: "53%", left: "11%", size: 240 },
    { top: "49.5%", left: "60%", size: 250 },
    { top: "53%", left: "86%", size: 180 },
    { top: "50%", left: "30%", size: 180 },
    { top: "58%", left: "5%", size: 170 },
    { top: "58%", left: "78%", size: 260 },
    { top: "59%", left: "22%", size: 200 },
  ].map((pos, index) => (
    <motion.div
  key={index}
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.8 }}
  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
  viewport={{ amount: 0.3 }} // ajusta el porcentaje visible para activar la animación
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
        {["Arquitectura", "Ingeniería", "Construcción", "Diseño de Productos", "Manufactura de Productos", "Operación", "Mantenimiento"][index]}
      </span>
    </motion.div>
  ))}
</div>

      </motion.div>
    </div>
  );
}

export default Sec3;
