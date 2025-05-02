import { CgMenuGridO } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";
import { MdStarRate } from "react-icons/md";
import { useContext, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import MyContext from "../context/MyContext";
import { Link } from "react-router-dom";
function Sec1() {
  const { offset, handleMouseMove } = useContext(MyContext);

  return (
    <motion.div
      className="h-[800px] xl:min-h-[1000px] relative overflow-hidden flex flex-col"
      onMouseMove={handleMouseMove}
    >
      {/* Fondo fijo */}
      <div className="absolute inset-0 bg-[url('/images/img2.png')] bg-cover bg-center z-[-2]" />

      {/* Imagen vector con parallax */}
      <motion.div
        className="absolute inset-0 top-52 h-[350px] w-[111vw] xl:top-42 xl:w-[108.5vw] lg:h-[500px] bg-contain bg-center bg-no-repeat mix-blend-overlay pointer-events-none z-[-1] xl:h-[670px] xl:bg-contain"
        style={{
          backgroundImage: "url('/homaro/images/vector.png')",
          transform: `translate(${-offset.x * 10}px, ${-offset.y * 10}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* Imagen principal con parallax */}
      <motion.div
        className="absolute inset-0 m-auto h-[420px] bg-cover bg-center pointer-events-none z-[-1]  lg:h-[650px] xl:h-[900px] xl:bg-contain"
        style={{
          backgroundImage: "url('/homaro/images/img1.png')",
          transform: `translate(${offset.x * 10}px, ${offset.y * 10}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

{/* Top nav */}
<motion.div className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center w-[37%] sm:w-[25%] md:w-[20%] lg:w-[14%] xl:w-[11%] 2x:w-[11%] bg-transparent h-[140px] xl:h-[120px] z-[2] text-white">
  <Link to="/">
    <motion.img 
      src="/homaro/images/logo.png" 
      alt="Logo Homaro"
      className="w-full h-auto object-cover"
    />
  </Link>
</motion.div>


      {/* Espacio central */}
      <div className="h-[400px] flex-grow w-full xl:h-[460px]"></div>

      {/* Texto y botón principal */}
      <div className="pb-4 h-[260px] w-full xl:h-[430px] xl:w-[83%] xl:m-0 xl:m-auto xl:flex xl:flex-row xl:justify-between flex items-center justify-center">
        <div className="xl:w-[70%]">
          <h1 className="text-3xl xl:ml-9 xl:text-7xl">Transformación digital</h1>
          <h1 className="text-3xl xl:ml-9 font-bold xl:text-7xl">centrada en las personas</h1>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#123c7d" }}
            className="cursor-pointer rounded-full bg-[#011957] text-white font-semibold py-2 justify-center text-sm mt-4 flex items-center w-[80%] xl:mt-7 xl:py-3 xl:w-[40%] 2xl:w-[30%] xl:mx-9 "
          >
            <span className="text-orange-400 text-3xl leading-none align-middle">
              <MdStarRate size={30} color="#FF5900" />
            </span>
            <span className="leading-none align-middle m-3 font-light text-xl">
              DESCUBRE CÓMO
            </span>
          </motion.button>
        </div>

        <div className="hidden xl:w-[25%] h-[100%] xl:text-xl xl:flex xl:items-end">
          <p className="xl:mb-18">
            Adopción de tecnología de punta para la optimización de recursos en todas las etapas del ciclo de vida de los activos.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Sec1;
