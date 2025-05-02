import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

function Sec4() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ 
        clipPath: "inset(0% 0% 0% 0%)",
        transition: { duration: 3, ease: "easeOut" },
      });
    } else {
      controls.start({
        clipPath: "inset(0% 0% 100% 0%)",
        transition: { duration: 0.1, ease: "easeOut" },
      });
    }
  }, [isInView, controls]);

  return (
    <div
      ref={ref}
      className="relative min-h-[800px] mt-24 sm:min-h-[1800px] md:min-h-[2200px] xl:min-h-[1600px] flex items-center justify-center xl:mt-10"
    >
      <div className="xl:flex xl:flex-col xl:m-0 xl:m-auto xl:items-center xl:justify-center">
        {/* 🎯 Fondo animado */}
        <motion.div
          className="absolute inset-0 bg-contain bg-no-repeat bg-center top-[0%] left-[-20%] z-[-2] h-full w-full hidden xl:block"
          style={{
            backgroundImage: "url('/homaro/images/complex.png')",
          }}
          animate={controls}
          initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
        />
        <div
          className="absolute inset-0 bg-contain bg-no-repeat bg-center top-[-82%] left-[55%] z-[-2] h-full w-full block sm:hidden"
          style={{
            backgroundImage: "url('/homaro/images/mobile-lin-3.png')",
          }}
          animate={controls}
          initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
        />
        <div
          className="absolute inset-0 bg-contain bg-no-repeat bg-center top-[30%] left-[55%] z-[-2] h-full w-full block sm:hidden"
          style={{
            backgroundImage: "url('/homaro/images/mobile-line-2.png')",
          }}
          animate={controls}
          initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
        />

        {/* Contenedor principal responsive */}
        <div className="font-bold xl:font-normal mb-5 w-full gap-2 h-full flex flex-col xl:flex-row xl:w-[70%] xl:h-[1400px] xl:gap-32">
          {/* Título sin borde animado */}
          <div className="flex xl:w-[100%] xl:h-[400px] px-8 xl:px-0 xl:items-start xl:mt-70 md:items-center md:justify-center">
            <div className="flex flex-col sm:gap-4 sm:flex-row md:gap-4 md:px-10 sm:flex-col xl:flex-col xl:gap-0">
              <h2 className="text-3xl sm:text-3xl md:text-4xl xl:text-6xl text-blue-700 anotherFont">
                Impulsamos
              </h2>
              <h2 className="text-3xl sm:text-3xl md:text-4xl xl:text-6xl text-blue-700 anotherFont">
                el cambio
              </h2>
              <h2 className="text-3xl sm:text-3xl md:text-4xl xl:text-6xl text-blue-700 anotherFont">
                con propósito
              </h2>
            </div>
          </div>

          {/* Texto inferior */}
          <div className="w-full flex items-center px-8 py-2 md:p-18 xl:p-2 xl:mt-20 xl:h-[800px]">
            <p className="text-xl xl:w-[100%] sm:text-2xl xl:text-3xl text-gray-600 font-light w-[70%] leading-tight">
              En Homaro, creemos que la tecnología es una herramienta poderosa
              para mejorar no solo los procesos, sino también la vida de las
              personas que los hacen posibles. Somos una organización
              internacional con raíces en México y Brasil, especializada en{" "}
              <span className="text-orange-500 font-extrabold">
                transformación digital y adopción de tecnología de vanguardia
              </span>{" "}
              para optimizar recursos a lo largo de todo el ciclo de vida de los activos.
            </p>
          </div>
        </div>

        <div className="xl:mb-12 xl:rounded-3xl xl:bg-gray-100 xl:flex xl:flex-row-reverse xl:w-[77%]">
          <div className="flex items-start w-full h-full p-5 lg:w-[50%] lg:m-0 lg:m-auto lg:py-6 lg:mr-8 xl:mr-10">
            <img
              src="images/img5.png"
              className="rounded-2xl object-cover w-full h-full md:h-[340px] xl:h-[430px] lg:rounded-2xl"
              alt=""
            />
          </div>
          <div className="xl:justify-center lg:flex lg:items-center lg:jusfify-center lg:p-5 lg:w-[90%]">
            <p className="pb-12 text-gray-700 w-[84%] text-xl sm:text-2xl px-12 py-4 lg:px-6 lg:text-2xl font-light xl:text-3xl 2xl:p-18">
              Nuestra pasión es ayudar a organizaciones —y a las personas
              dentro de ellas— a evolucionar. Trabajamos para que cada proyecto,
              producto, infraestructura o construcción cobre vida de forma más
              eficiente, sostenible y humana. Porque al transformar la manera en
              que trabajamos, también{" "}
              <span className="text-green-600 italic font-extrabold">
                transformamos el mundo que habitamos.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec4;
