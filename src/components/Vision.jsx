import MyContext from "../context/MyContext";
import { useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function Vision() {
  const { offsetY, isDesktop } = useContext(MyContext);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [isInView, controls]);

  // Aquí puedes ajustar la posición inicial
  const initialPosition = 50; // Posición inicial en píxeles (ajusta como necesites)

  return (
    <div
      className="h-[250vh] mb-24 flex flex-col w-full md:flex-row md:h-[70vh] lg:w-[90%] lg:m-0 lg:m-auto xl:h-[250vh]"
      style={{ transform: `translateY(${initialPosition + offsetY * 0.1}px)` }} // Ajusta la posición inicial aquí
    >
      <div className="w-[70%] sm:w-[63%] mx-auto mt-200 mb-12 xl:m-auto xl: m-0">
        <img
          src="images/img3.jpg"
          className="w-full h-full object-cover xl:mt-280"
          style={{
            transform: `translateY(${initialPosition - offsetY * 0.4}px)`, // Posición inicial ajustada para la imagen
          }}
          alt=""
        />
      </div>

      <div className="w-full text-left lg:w-[90%] xl:w-[70%] xl:px-20 xl:mt-190 md:w-[50%]">
        <h2 className="px-8 text-xl sm:text-lg sm:px-12 font-bold text-blue-700 md:px-2 xl:text-2xl">
          VISIÓN
        </h2>
        <p className="px-8 py-4 text-lg font-light sm:text-2xl sm:px-12 xl:text-3xl text-gray-700 leading-tight md:px-2 lg:pb-28 xl:pb-42 2xl:pb-72 xl:text-4xl">
          Empoderar a la humanidad con herramientas,
          conocimiento y experiencia para abrazar la
          transformación digital desde una mirada
          profundamente humana.
        </p>
      </div>
    </div>
  );
}

export default Vision;
