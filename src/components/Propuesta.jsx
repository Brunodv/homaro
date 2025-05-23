import { useContext } from "react";
import MyContext from "../context/MyContext";
import { motion } from "framer-motion";
import { TfiPlus } from "react-icons/tfi";

function Propuesta() {
    const { offsetY } = useContext(MyContext); // Usar el valor de offsetY desde el contexto

    return (
        <motion.div 
        className="w-full  min-h-[950px] sm:min-h-[640px] md:min-h-[680px] xl:min-h-[920px] px-6 py-20 text-black m-auto bg-gray-200 gap-12 flex flex-col xl:gap-0 md:py-24 md:gap-18 mb-20 xl:w-[85%] xl:mt-20 xl:rounded-4xl"
        initial={{ y: 0 }}
            animate={{ y: -offsetY * 0.4 }} // Solo el contenedor principal tiene el parallax
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            {/* Título y párrafo sin efecto parallax */}
            <div className="w-full flex flex-col pl-2 sm:pl-6 md:pl-10 lg:pl-10 xl:pl-14 2xl:px-16">
                <h2 className="text-base font-bold text-blue-700 md:text-2xl 2xl:text-xl 2xl:font-bold 2xl:mb-2">PROPUESTA</h2>
                <p className="text-lg w-[85vw] sm:text-2xl md:text-3xl sm:w-[90%] xl:w-[80%] 2xl:w-[60%] leading-snug text-gray-800 font-light">
                    Soluciones complementarias que se integran para crear respuestas completas, versátiles y alineadas con los desafíos reales de las organizaciones.
                </p>
            </div>

            {/* Tarjetas sin parallax */}
            <div className="flex flex-col gap-12 w-[250px] sm:items-center m-0 m-auto lg: sm:grid sm:grid-cols-2 xl:flex sm:w-[100%] sm:px-10 sm:gap-8 lg:w-[80%] md:w-[100%] md:gap-8 xl:gap-8 2xl:gap-12 xl:my-0 xl:flex-row xl:w-[100%]">
                {/* Tarjeta 1 */}
                <div className="relative w-full h-[280px] sm:w-[100%]  md:w-[100%] lg:w-[100%] xl:w-[30%] sm:h-[300px] md:h-[400px] xl:h-[340px] 2xl:h-[440px]">
                    <div className="w-full h-full relative cursor-pointer border border-blue-600 rounded-3xl xl:mt-20">
                        {/* Cara frontal */}
                        <div className="absolute w-full h-full flex flex-col justify-between p-4 rounded-3xl hover:bg-[#FF5900] transition-all duration-1000">
                            {/* Símbolo + en la esquina superior derecha */}
                            <div className="flex justify-end">
                                <TfiPlus className="text-blue-600" size={40} />
                            </div>

                            {/* Título en la parte inferior */}
                            <p className="text-blue-800 font-normal text-2xl px-4 select-none md:text-4xl">Consultoría</p>
                        </div>
                    </div>
                </div>

                {/* Tarjeta 2 */}
                <div className="relative w-full h-[280px] sm:w-[100%]  md:w-[100%] lg:w-[100%] xl:w-[30%] sm:h-[300px] md:h-[400px] xl:h-[340px] 2xl:h-[440px]">
                    <div className="w-full h-full relative cursor-pointer xl:mt-40">
                        {/* Cara frontal */}
                        <div className="absolute w-full h-full flex flex-col justify-between p-4 border border-blue-600 rounded-3xl hover:bg-[#FF5900] transition-all duration-1000">
                            {/* Símbolo + en la esquina superior derecha */}
                            <div className="flex justify-end">
                                <TfiPlus className="text-blue-600" size={40} />
                            </div>

                            {/* Título en la parte inferior */}
                            <p className="text-blue-800 font-normal text-2xl px-4 select-none md:text-4xl">Educación</p>
                        </div>
                    </div>
                </div>

                {/* Tarjeta 3 */}
                <div className="relative w-full h-[280px] sm:w-[100%]  md:w-[100%] lg:w-[100%] xl:w-[30%] sm:h-[300px] md:h-[400px] xl:h-[340px] 2xl:h-[440px]">
                    <div className="w-full h-full relative cursor-pointer border border-blue-600 rounded-3xl">
                        {/* Cara frontal */}
                        <div className="absolute w-full h-full flex flex-col justify-between p-4 rounded-3xl hover:bg-[#FF5900] transition-all duration-1000">
                            {/* Símbolo + en la esquina superior derecha */}
                            <div className="flex justify-end">
                                <TfiPlus className="text-blue-600" size={40} />
                            </div>

                            {/* Título en la parte inferior */}
                            <p className="text-blue-800 font-normal text-2xl px-4 select-none md:text-4xl">Plataformas</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Propuesta;
