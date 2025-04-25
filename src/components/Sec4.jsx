import { motion } from "framer-motion";

function Sec4() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Contenedor principal responsive */}
      <div className="w-full gap-2 h-[100%] xl:gap-32 flex flex-col xl:flex-row xl:w-[70%] xl:h-[55%]">
        {/* Título con borde animado */}
        <div className="flex  xl:w-[80%] px-8 xl:px-0 xl:items-start relative md:items-center md:justify-center">
          {/* Animación del borde: derecha en xl, abajo en móvil */}
          <motion.div
            className="xl:bg-blue-700 md:bg-white"
            initial={{ scaleY: 0, scaleX: 0 }}
            animate={{ scaleY: 1, scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: "2px",
              height: "100%",
              transformOrigin: "top",
            }}
            // Tailwind usa este en móvil
            // y reemplazamos los estilos para pantallas pequeñas
            media="(max-width: 1279px)"
            // Para móviles, override manual con JS
            onAnimationStart={() => {
              if (window.innerWidth < 1280) {
                const el = document.querySelector("#motion-border");
                if (el) {
                  el.style.width = "100%";
                  el.style.height = "2px";
                  el.style.right = "auto";
                  el.style.top = "auto";
                  el.style.left = "0";
                  el.style.bottom = "0";
                  el.style.transformOrigin = "left";
                }
              }
            }}
            id="motion-border"
          />
          <div className="flex flex-col sm:gap-4 sm:flex-row md:gap-4 md:px-10 sm:flex-col xl:flex-col">
          <h2 className="text-4xl sm:text-3xl md:text-4xl xl:text-6xl text-blue-700 z-10 anotherFont">
            Impulsamos
          </h2>
          <h2 className="text-4xl sm:text-3xl md:text-4xl xl:text-6xl text-blue-700 z-10 anotherFont">
            el cambio
          </h2>
          <h2 className="text-4xl sm:text-3xl md:text-4xl xl:text-6xl text-blue-700 z-10 anotherFont">
          con propósito
          </h2></div>
        </div>

        {/* Texto inferior */}
        <div className="w-full xl:w-[93%] flex items-end p-8 md:p-18 xl:p-2 xl:mt-20">
          <p className="text-md sm:text-2xl xl:text-4xl text-gray-600 font-light">
            En Homaro, creemos que la tecnología es una herramienta poderosa
            para mejorar no solo los procesos, sino también la vida de las
            personas que los hacen posibles. Somos una organización
            internacional con raíces en México y Brasil, especializada en{" "}
            <span className="text-orange-500 font-extrabold italic">
              transformación digital y adopción de tecnología
            </span>{" "}
            de vanguardia para optimizar recursos a lo largo de todo el ciclo
            de vida de los activos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sec4;
