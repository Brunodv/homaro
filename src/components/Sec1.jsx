import { CgMenuGridO } from "react-icons/cg";
import { motion } from "framer-motion";
import { TbJewishStarFilled } from "react-icons/tb";
import { useEffect, useState } from "react";

function Sec1() {

  const [offsetY, setOffsetY]=useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleScroll = () => setOffsetY(window.pageYOffset);
const handleResize = () => setIsDesktop(window.innerWidth >= 768);

useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);

  handleResize(); // 👈 importante para que detecte desde el inicio

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleResize);
  };
}, []);

  return (
    <>
      <motion.div
        className="relative min-h-screen items-end flex flex-col text-white bg-[url('/images/img2.png')] bg-cover bg-center z-0"
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
  <div style={{ transform: `translateY(-${offsetY * 0.1}px)` }} className="mt-14 absolute inset-0 m-0 m-auto bg-[url('/images/vector.png')] bg-no-repeat bg-contain bg-center h-[80%] w-[90%] mix-blend-overlay pointer-events-none  xl:mt-42 xl:mr-9"></div>
<div
  style={{
    transform: isDesktop
      ? `translateY(${offsetY * 0.05}px)`   // PC: mueve 0.5
      : `translateY(${offsetY * 0.17}px)`,  // Móvil: mueve 0.2
  }}
  className="mt-14 absolute inset-0 m-0 m-auto bg-[url('/images/img1.png')] bg-no-repeat bg-cover bg-center h-[70%] pointer-events-none xl:bg-cover xl:h-[100%] xl:mt-10"
></div>

        {/* Imagen sobrepuesta con efecto de zoom suave */}

        {/* Top nav */}
        <motion.div
          className="flex justify-between items-center px-6 py-4 w-full h-[14vh]"
          initial={{ y: -50, opacity: 0 }}a
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="w-1/3" />
          <div className="w-1/3 flex justify-center">
            <motion.h1
              className="text-2xl md:text-4xl font-bold text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              HOMARO
            </motion.h1>
          </div>
          <div className="w-1/3 flex justify-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer bg-transparent text-blue-800 font-semibold flex items-center gap-2 rounded hover:bg-opacity-80 transition"
            >
              <span className="hidden sm:inline">MENÚ</span>
              <CgMenuGridO className="text-4xl md:text-5xl" />
            </motion.button>
          </div>
        </motion.div>

        {/* Contenido central medio */}
        <div className="h-0 xl:h-[50vh]"></div>

        {/* Contenido central inferior */}
        <div className="w-full flex flex-col h-[86vh] md:flex-row md:h-64 px-4 md:px-0 pb-10 md:pb-0 gap-4 items-center justify-end">
        <motion.div
            className="w-full md:w-[58%] z-1 text-left flex flex-col"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h1   style={{
  transform: `translateX(${offsetY * 0.2}px)`,
}} className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-none font-light">Transformación digital</h1>
            <h1 style={{
  transform: `translateX(-${offsetY * 0.2}px)`,
}} className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-none">centrada en las personas</h1>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#123c7d" }}
              className="cursor-pointer rounded-full bg-[#0D2C5C] text-white font-semibold py-3 px-2 flex items-center w-[60%] xl:w-[25%] justify-center text-sm md:text-base mt-4"
              style={{
                transform: `translateX(${offsetY * 0.5}px)`,
              }}
            >
              <span className="text-orange-400 text-3xl md:text-5xl leading-none align-middle"><TbJewishStarFilled size={20} color="#FF5900" />
              </span>
              <span className="leading-none align-middle m-2 font-normal text-base ">DESCUBRE CÓMO</span>
            </motion.button>
          </motion.div>

          <motion.div
            className="w-full md:w-[30%] h-auto md:h-64 z-1"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div style={{
  transform: `translateX(${offsetY * 0.2}px)`,
}} className="flex items-end justify-center h-full md:mt-0">
              <motion.p
                className="text-base md:text-xl max-w-sm text-left mb-2 mr-18"

                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                Adopción de tecnología de punta para la optimización de recursos en todas las etapas del ciclo de vida de los activos.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Sec1;
