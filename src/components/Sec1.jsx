import { CgMenuGridO } from "react-icons/cg";
import { motion } from "framer-motion";
import { MdStarRate } from "react-icons/md";
import { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";

import MyContext from "../context/MyContext";

function Sec1() {
  const { offset, setOffset, isDesktop,isMenuOpen, setIsMenuOpen, handleMouseMove } = useContext(MyContext); 

  return (
    <motion.div 
      className="h-[88vh] xl:min-h-[100vh] relative overflow-hidden" 
      onMouseMove={handleMouseMove}
    >
      {/* Fondo fijo */}
      <div className="absolute inset-0 bg-[url('/images/img2.png')] bg-cover bg-center z-[-2]" />

{/* Imagen 2 con Parallax */}
<motion.div
        className="absolute inset-0 top-41 h-[55%] w-[111vw] xl:top-42 xl:w-[108.5vw] bg-cover bg-center bg-no-repeat mix-blend-overlay pointer-events-none z-[-1] xl:h-[67%] xl:bg-contain"
        style={{
          backgroundImage: "url('/homaro/images/vector.png')",
          transform: `translate(${-offset.x * 10}px, ${-offset.y * 10}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* Imagen con Parallax */}
      <motion.div
        className="absolute inset-0 m-auto h-[60%] bg-cover bg-center pointer-events-none z-[-1] xl:h-[100%] xl:bg-contain"
        style={{
          backgroundImage: "url('/homaro/images/img1.png')",
          transform: `translate(${offset.x * 10}px, ${offset.y * 10}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* Top nav */}
      <motion.div className="flex justify-between items-center px-6 py-4 w-full h-[17vh] xl:h-[11vh]">
        <div className="w-1/3 bg-green-300" />
        <div className="w-1/3 flex justify-center">
          <motion.h1 className="text-2xl md:text-4xl font-bold text-center">
            HOMARO
          </motion.h1>
        </div>
        <div className="w-1/3 flex justify-end">
          <motion.button className="flex items-center gap-2 mr-10">
            <span className="hidden sm:inline xl:inline text-[#123c7d]">MENÚ</span>
            <CgMenuGridO className="text-4xl md:text-5xl" color="#123c7d" />
          </motion.button>
        </div>
      </motion.div>

      {/* div central */}
      <div className="h-[45.7vh] w-full xl:h-[46vh] "></div>

      <div className="h-[25.3vh] w-full xl:h-[43vh] xl:w-[83%] xl:m-0 xl:m-auto xl:flex xl:flex-row xl:justify-between flex items-center justify-center ">
        <div className="xl:w-[70%]">
        <h1 className="text-3xl xl:ml-9 xl:text-7xl">Transformación digital</h1>
        <h1 className="text-3xl xl:ml-9 font-bold xl:text-7xl">centrada en las personas</h1>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#123c7d" }}
          className="mx-auto cursor-pointer rounded-full bg-[#011957] text-white font-semibold py-2 xl:py-3 flex items-center w-[80%] xl:mt-7 xl:w-[25%] xl:mx-9 justify-center text-sm mt-4"
        >
          <span className="text-orange-400 text-3xl leading-none align-middle">
            <MdStarRate size={30} color="#FF5900" />
          </span>
          <span className="leading-none align-middle m-2 font-light text-xl">
            DESCUBRE CÓMO
          </span>
        </motion.button>
        </div>

        <div className="hidden xl:w-[25%] h-[100%] xl:text-xl xl:flex xl:items-end">
          <p className="xl:mb-18">
        Adopción de tecnología de punta para la optimización de recursos en todas las etapas del ciclo de vida de los activos.</p>
          </div>        
      </div>
    </motion.div>
  );
}

export default Sec1;
