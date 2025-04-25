import { motion } from "framer-motion";
import { TfiPlus } from "react-icons/tfi";

function Propuesta() {
  return (
    <div className="w-[90%] min-h-screen px-6 py-12 text-black   m-auto bg-gray-200 rounded-3xl gap-12 flex flex-col xl:gap-0 md:py-24 md:gap-18 mb-20">
      {/* Título y párrafo */}
      <div className="w-full">
        <h2 className="text-xl px-2 font-bold text-blue-700 mb-8 sm:px-14 md:text-2xl md:px-16 lg:px-22 xl:px-22 2xl:text-xl 2xl:font-bold 2xl:mb-2 ">PROPUESTA</h2>
        <p className="text-lg px-2 sm:text-2xl md:text-3xl w-full sm:w-[90%] xl:w-[80%] 2xl:w-[60%] leading-snug text-gray-800 font-light sm:m-0 sm:m-auto sm:px-8 xl:m-0 xl:px-22">
          Soluciones complementarias que se integran para crear respuestas completas, versátiles y alineadas con los desafíos reales de las organizaciones.
        </p>
      </div>

      {/* Tarjetas */}
      <div className="flex flex-col gap-12 w-full sm:items-center m-0 m-auto lg:w-[70%]  md:gap-18 xl:gap-14 2xl:gap-17 xl:my-0  xl:flex-row xl:w-[90%]">
        {/* Tarjeta 1 */}
        <div
          className="relative w-full sm:w-[80%] md:w-[80%] xl:w-[30%] h-[340px] sm:h-[440px] md:h-[640px] xl:h-[340px] 2xl:h-[440px]"
          style={{ perspective: 1000 }}
        >
          <motion.div
            className="w-full h-full relative cursor-pointer border border-blue-600 rounded-3xl xl:mt-20 "
            whileHover={{ rotateY: 180 }}
            whileTap={{ rotateY: 180 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Cara frontal */}
            <div className="absolute w-full h-full backface-hidden flex flex-col justify-between p-4 bg-white rounded-3xl">
              {/* Símbolo + en la esquina superior derecha */}
              <div className="flex justify-end">
                <TfiPlus className="text-blue-600" size={56} />
              </div>

              {/* Título en la parte inferior */}
              <p className="text-blue-800 font-normal text-2xl px-4 select-none md:text-4xl">Consultoría</p>
            </div>

            {/* Cara trasera */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center bg-blue-600 text-white rounded-3xl">
              <p className="text-2xl font-bold select-none md:text-4xl">Más información</p>
            </div>
          </motion.div>
        </div>

        {/* Tarjeta 2 */}
        <div
          className="relative w-full sm:w-[80%] md:w-[90%] xl:w-[30%] h-[340px] sm:h-[440px]  md:h-[640px] xl:h-[340px] 2xl:h-[440px] rounded-3xl"
          style={{ perspective: 1000 }}
        >
          <motion.div
            className="w-full h-full relative cursor-pointer xl:mt-40"
            whileHover={{ rotateY: 180 }}
            whileTap={{ rotateY: 180 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            animate={{
              scale: [1, 1.1, 1.1, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Cara frontal */}
            <div className="absolute w-full h-full backface-hidden flex flex-col justify-between p-4 bg-orange-500 rounded-3xl">
              {/* Símbolo + en la esquina superior derecha */}
              <div className="flex justify-end">
                <TfiPlus className="text-white" size={56} />
              </div>

              {/* Título en la parte inferior */}
              <p className="text-white font-normal text-2xl px-4 select-none md:text-4xl">Educación</p>
            </div>

            {/* Cara trasera */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center bg-orange-700 text-white rounded-3xl">
              <p className="text-xl font-bold select-none md:text-4xl">Más sobre Educación</p>
            </div>
          </motion.div>
        </div>

        {/* Tarjeta 3 - estática pero con flip */}
        <div
          className="relative w-full sm:w-[80%] md:w-[90%] xl:w-[30%] h-[340px] sm:h-[440px] md:h-[640px] xl:h-[340px] 2xl:h-[440px]"
          style={{ perspective: 1000 }}
        >
          <motion.div
            className="w-full h-full relative cursor-pointer border border-blue-600 rounded-3xl"
            whileHover={{ rotateY: 180 }}
            whileTap={{ rotateY: 180 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Cara frontal */}
            <div className="absolute w-full h-full backface-hidden flex flex-col justify-between p-4 bg-white rounded-3xl">
              {/* Símbolo + en la esquina superior derecha */}
              <div className="flex justify-end">
                <TfiPlus className="text-blue-600" size={56} />
              </div>

              {/* Título en la parte inferior */}
              <p className="text-blue-800 font-normal text-2xl px-4 select-none md:text-4xl">Plataformas</p>
            </div>

            {/* Cara trasera */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center bg-blue-600 text-white rounded-3xl">
              <p className="text-xl font-bold select-none md:text-4xl">Explora más plataformas</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Propuesta;
