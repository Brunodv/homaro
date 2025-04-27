import { useContext } from "react";
import MyContext from "../context/MyContext";
import { motion } from "framer-motion";
import { TfiPlus } from "react-icons/tfi";

function Propuesta() {
    const { offsetY } = useContext(MyContext); // Usar el valor de offsetY desde el contexto

    return (
        <motion.div 
            className="w-[90%] min-h-screen px-6 py-12 text-black m-auto bg-gray-200 rounded-3xl gap-12 flex flex-col xl:gap-0 md:py-24 md:gap-18 mb-20 xl:mt-20"
            initial={{ y: 0 }}
            animate={{ y: -offsetY * 0.4 }} // Solo el contenedor principal tiene el parallax
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            {/* Título y párrafo sin efecto parallax */}
            <div className="w-full">
                <h2 className="text-xl px-2 font-bold text-blue-700 mb-8 sm:px-14 md:text-2xl md:px-16 lg:px-22 xl:px-22 2xl:text-xl 2xl:font-bold 2xl:mb-2">PROPUESTA</h2>
                <p className="text-lg px-2 sm:text-2xl md:text-3xl w-full sm:w-[90%] xl:w-[80%] 2xl:w-[60%] leading-snug text-gray-800 font-light sm:m-0 sm:m-auto sm:px-8 xl:m-0 xl:px-22">
                    Soluciones complementarias que se integran para crear respuestas completas, versátiles y alineadas con los desafíos reales de las organizaciones.
                </p>
            </div>

            {/* Tarjetas sin parallax */}
            <div className="flex flex-col gap-12 w-full sm:items-center m-0 m-auto lg:w-[70%] md:gap-18 xl:gap-14 2xl:gap-17 xl:my-0 xl:flex-row xl:w-[90%]">
                {/* Tarjeta 1 */}
                <div className="relative w-full sm:w-[80%] md:w-[80%] xl:w-[30%] h-[340px] sm:h-[440px] md:h-[640px] xl:h-[340px] 2xl:h-[440px]">
                    <div className="w-full h-full relative cursor-pointer border border-blue-600 rounded-3xl xl:mt-20">
                        {/* Cara frontal */}
                        <div className="absolute w-full h-full flex flex-col justify-between p-4 rounded-3xl hover:bg-[#FF5900] transition-all duration-1000">
                            {/* Símbolo + en la esquina superior derecha */}
                            <div className="flex justify-end">
                                <TfiPlus className="text-blue-600" size={56} />
                            </div>

                            {/* Título en la parte inferior */}
                            <p className="text-blue-800 font-normal text-2xl px-4 select-none md:text-4xl">Consultoría</p>
                        </div>
                    </div>
                </div>

                {/* Tarjeta 2 */}
                <div className="relative w-full sm:w-[80%] md:w-[90%] xl:w-[30%] h-[340px] sm:h-[440px] md:h-[640px] xl:h-[340px] 2xl:h-[440px] rounded-3xl">
                    <div className="w-full h-full relative cursor-pointer xl:mt-40">
                        {/* Cara frontal */}
                        <div className="absolute w-full h-full flex flex-col justify-between p-4 border border-blue-600 rounded-3xl hover:bg-[#FF5900] transition-all duration-1000">
                            {/* Símbolo + en la esquina superior derecha */}
                            <div className="flex justify-end">
                                <TfiPlus className="text-blue-600" size={56} />
                            </div>

                            {/* Título en la parte inferior */}
                            <p className="text-blue-800 font-normal text-2xl px-4 select-none md:text-4xl">Educación</p>
                        </div>
                    </div>
                </div>

                {/* Tarjeta 3 */}
                <div className="relative w-full sm:w-[80%] md:w-[90%] xl:w-[30%] h-[340px] sm:h-[440px] md:h-[640px] xl:h-[340px] 2xl:h-[440px]">
                    <div className="w-full h-full relative cursor-pointer border border-blue-600 rounded-3xl">
                        {/* Cara frontal */}
                        <div className="absolute w-full h-full flex flex-col justify-between p-4 rounded-3xl hover:bg-[#FF5900] transition-all duration-1000">
                            {/* Símbolo + en la esquina superior derecha */}
                            <div className="flex justify-end">
                                <TfiPlus className="text-blue-600" size={56} />
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
