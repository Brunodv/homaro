import { CgMenuGridO } from "react-icons/cg";
import { motion } from "framer-motion";
import { TbJewishStarFilled } from "react-icons/tb";
import { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";

import MyContext from "../context/MyContext";

function Sec1() {
  const { offsetY, isDesktop } = useContext(MyContext);
  
  // Estado para manejar la visibilidad del menú
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <>
      <motion.div
        className="relative min-h-[120vh] items-end flex flex-col text-white bg-[url('/images/img2.png')] bg-cover bg-center z-0"
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div style={{ transform: `translateY(-${offsetY * 0.1}px)` }} className="absolute inset-0 mb-70 bg-[url('/images/vector.png')] lg:h-[55%] lg:mt-40 lg:mr-10 bg-no-repeat bg-contain bg-center w-[100%] mix-blend-overlay pointer-events-none sm:w-[80%] sm:mx-0 sm:mx-auto xl:w-[58%] xl:h-[58%]  xl:mt-42 xl:ml-118"></div>
        <div
          style={{
            transform: isDesktop
              ? `translateY(${offsetY * 0.17}px)`
              : `translateY(${offsetY * 0.17}px)`,
          }}
          className="mt-24 absolute inset-0 m-0 m-auto bg-[url('/images/img1.png')] bg-no-repeat bg-cover bg-center h-[45%] lg:h-[80%] lg:mt-12  pointer-events-none xl:bg-cover xl:w-[90%] xl:h-[70%] xl:mt-18"
        ></div>

        {/* Top nav */}
        <motion.div
          className="flex justify-between items-center px-6 py-4 w-full h-[14vh]"
          initial={{ y: -50, opacity: 0 }}
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
              onClick={toggleMenu}  // Llamamos al toggle cuando se presiona el botón
            >
              <span className="hidden sm:inline">MENÚ</span>
              <CgMenuGridO className="text-4xl md:text-5xl" />
            </motion.button>
          </div>
        </motion.div>

        {/* Menú de navegación */}
        {isMenuOpen && (
  <motion.div
    className={`fixed top-0 right-0 h-full bg-[#0240D4] text-white flex flex-col items-center justify-center z-10 ${
      isDesktop ? 'w-[20%]' : 'w-full'  // Si es escritorio, el ancho será del 20%
    }`}
    initial={{ x: "100%" }}  // Inicia fuera de la pantalla (a la derecha)
    animate={{ x: 0 }}       // Se mueve a su posición original (en la pantalla)
    transition={{ duration: 0.5 }}
  >
    <div className="flex flex-col gap-8 text-2xl">
      <motion.a
        href="#sec1"
        className="hover:text-orange-400 transition"
        onClick={toggleMenu}  // Cerramos el menú cuando se selecciona una opción
      >
        Sec 1
      </motion.a>
      <motion.a
        href="#sec2"
        className="hover:text-orange-400 transition"
        onClick={toggleMenu}
      >
        Sec 2
      </motion.a>
      <motion.a
        href="#sec3"
        className="hover:text-orange-400 transition"
        onClick={toggleMenu}
      >
        Sec 3
      </motion.a>
    </div>
    <motion.button
      whileHover={{ scale: 1.1 }}
      className="absolute top-4 right-4 text-white text-3xl"
      onClick={toggleMenu}  // Cerrar el menú
    >
      <IoMdClose size={50} className="cursor-pointer"/>

    </motion.button>
  </motion.div>
)}


        {/* Contenido central medio */}
        <div className="h-0 md:h-[50vh] xl:h-[50vh]"></div>

        {/* Contenido central inferior */}
        <div className="w-full flex flex-col h-[86vh] md:flex-row md:h-64 px-4 md:px-0 pb-10 md:pb-0 md: gap-4 items-center justify-end md:justify-start xl:justify-end xl:w-[94%]">
          <motion.div
            className="w-full md:w-[64%] z-1 text-left flex flex-col"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h1
              style={{
                transform: `translateX(${offsetY * 0.2}px)`,
              }}
              className="text-3xl md:text-5xl lg:text-5xl xl:text-7xl leading-none px-2 font-light sm:ml-18 xl:ml-0"
            >
              Transformación digital
            </h1>
            <h1
              style={{
                transform: `translateX(-${offsetY * 0.2}px)`,
              }}
              className="px-2 text-3xl md:text-5xl lg:text-5xl xl:text-7xl font-extrabold leading-none sm:ml-18 xl:ml-0"
            >
              centrada en las personas
            </h1>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#123c7d" }}
              className="ml-2 cursor-pointer rounded-full bg-[#011957] text-white font-semibold py-3 flex items-center w-[70%] md:w-[40%] xl:w-[21%] xl:ml-0 justify-center text-sm md:text-base mt-4 sm:ml-18 "
              style={{
                transform: `translateX(${offsetY * 0.5}px)`,
              }}
            >
              <span className="text-orange-400 text-3xl md:text-5xl leading-none align-middle">
                <TbJewishStarFilled size={20} color="#FF5900" />
              </span>
              <span className="leading-none align-middle m-2 font-normal text-base">
                DESCUBRE CÓMO
              </span>
            </motion.button>
          </motion.div>

          <motion.div
            className="w-full md:w-[30%] h-auto md:h-64 z-1"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div
              style={{
                transform: `translateX(${offsetY * 0.2}px)`,
              }}
              className="flex items-end justify-center h-full md:mt-0"
            >
              <motion.p
                className="px-2 text-base md:text-xl max-w-sm text-left mb-20 lg:text-lg lg:mb-10 xl:mr-30 xl:mb-0"
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
