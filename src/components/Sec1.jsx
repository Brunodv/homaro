import { CgMenuGridO } from "react-icons/cg";
import { motion } from "framer-motion";

function Sec1() {
  const bunito="0"
  return (
    <>
      <motion.div
        className="relative h-screen flex flex-col justify-between text-white bg-[url('/images/img2.png')] bg-cover bg-center z-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Imagen sobrepuesta con efecto de zoom suave */}
        <motion.div
          className="absolute top-14 inset-0 bg-[url('/images/img1.png')] bg-cover bg-center z-2"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />

        {/* Vector overlay con fade delay */}
        <motion.div
          className="absolute inset-0 bg-[url('/images/vector.png')] top-32 left-48 bg-no-repeat bg-center mix-blend-overlay z-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        />

        {/* Top nav */}
        <motion.div
          className="flex justify-between bg-transparent items-center px-6 py-4 w-full h-32"
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
              className="bg-transparent text-blue-800 font-semibold flex items-center gap-2 rounded hover:bg-opacity-80 transition"
            >
              <span className="hidden sm:inline">MENÚ</span>
              <CgMenuGridO className="text-4xl md:text-5xl" />
            </motion.button>
          </div>
        </motion.div>

        {/* Contenido central inferior */}
        <div className="w-full flex flex-col md:flex-row items-end h-auto md:h-64 px-4 md:px-0 pb-10 md:pb-0 gap-4">
          <div className="hidden md:block w-[12%] h-64 z-10000 text-left"></div>

          <motion.div
            className="w-full md:w-[58%] z-10000 text-left"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h1 className="text-3xl md:text-6xl lg:text-7xl leading-tight">Transformación digital</h1>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold leading-tight">Centrada en las Personas</h1>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#123c7d" }}
              className="rounded-full bg-[#0D2C5C] mt-6 md:mt-10 text-white font-semibold py-2 px-6 md:px-8 flex items-center justify-center transition text-sm md:text-base"
            >
              <span className="text-orange-400 text-3xl md:text-5xl leading-none align-middle">•</span>
              <span className="leading-none align-middle ml-2">DESCUBRE CÓMO</span>
            </motion.button>
          </motion.div>

          <motion.div
            className="w-full md:w-[30%] h-auto md:h-64 z-1"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex items-end justify-center h-full mt-8 md:mt-0">
              <motion.p
                className="text-base md:text-xl max-w-sm text-left"
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
