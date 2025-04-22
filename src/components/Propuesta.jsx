import { motion } from "framer-motion";

function Propuesta() {
  return (
    <div className="w-[90%] min-h-screen px-6 py-12 md:px-32 md:py-24 text-black m-auto bg-gray-200 rounded-3xl">
      
      {/* Título y párrafo */}
      <div className="w-full mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">PROPUESTA</h2>
        <p className="text-xl sm:text-2xl md:text-3xl w-full sm:w-[90%] xl:w-[55%] leading-relaxed">
          Soluciones complementarias que se integran para crear respuestas completas, versátiles y alineadas con los desafíos reales de las organizaciones.
        </p>
      </div>

      {/* Tarjetas */}
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Tarjeta 1 */}
        <motion.div className="border border-blue-600 rounded-3xl h-[440px] flex items-end p-4 w-full xl:w-[30%]">
          <p className="text-blue-800 font-semibold text-3xl px-4">Consultoría</p>
        </motion.div>

        {/* Tarjeta 2 */}
        <motion.div className="rounded-3xl h-[440px] flex items-end p-8 w-full xl:w-[30%] bg-orange-500 lg:mt-32 box" transition={{duration:1.5}} animate={{scale:[1,1.1,1.1,1,1],rotate:[0,0,270,270,0], borderRadius:["20%","20%","50%","50%","20%"]}}>
          <p className="text-white font-semibold text-3xl px-4">Educación</p>
        </motion.div>

        {/* Tarjeta 3 */}
        <div className="border border-blue-600 rounded-3xl h-[440px] flex items-end p-4 w-full xl:w-[30%] lg:mb-32">
          <p className="text-blue-800 font-semibold text-3xl px-4">Plataformas</p>
        </div>

      </div>
    </div>
  );
}

export default Propuesta;
