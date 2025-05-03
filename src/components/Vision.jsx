import MyContext from "../context/MyContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

function Vision() {
  const { offsetY, isDesktop } = useContext(MyContext);

  // Referencia al contenedor de la línea
  const lineRef = useRef(null);
  
  // Usamos useInView para detectar cuando la línea entra en vista
  const isInView = useInView(lineRef, { triggerOnce: true, amount: 0.5 });

  return (
    <div className="relative h-[650px] flex items-center justify-center flex-col w-full sm:h-[700px] md:flex-row md:h-[600px] lg:w-[90%] lg:m-0 lg:m-auto xl:h-[1000px] md:flex-row-reverse">
      
      {/* Línea azul animada */}
      <motion.div
        ref={lineRef}
        className="absolute  transform translate-x-[-10%] translate-y-[0%] top-[60%] hidden xl:block"
        style={{
          backgroundImage: "url('/homaro/images/line-blue.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "30%", // Ajustar el tamaño de la línea según sea necesario
        }}
        // Animación de dibujado con `height`
        initial={{ height: "0%" }} // Empieza invisible
        animate={{ height: isInView ? "370px" : "0%" }} // La línea se dibuja cuando entra en vista
        transition={{ duration: 1, ease: "easeOut" }}
      />

<div className="w-full text-left lg:w-[90%] xl:w-[70%] xl:px-20 md:w-[50%] md:px-4 relative z-10">
        <h2 className="px-8 text-sm sm:text-lg sm:px-12 sm:mt-32 md:px-2 font-bold text-blue-700 xl:text-2xl">
          VISIÓN
        </h2>
        <p className="px-8 py-4 text-xl font-light sm:text-2xl sm:px-12 xl:text-3xl text-gray-700 leading-tight md:px-2 lg:pb-28 xl:pb-42 2xl:pb-72 xl:text-4xl">
          Empoderar a la humanidad con herramientas,
          conocimiento y experiencia para abrazar la
          transformación digital desde una mirada
          profundamente humana.
        </p>
      </div>
      <div className="w-[75%]  mx-auto xl:m-auto xl: m-0">
        <img
          src="images/img3.jpg"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
}

export default Vision;
