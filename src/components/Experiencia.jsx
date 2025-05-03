import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

function Sec3() {
  const containerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 100%", "end 1%"]
  });

  const width = useTransform(scrollYProgress, [0, 1], ["100vw", "200vw"]);
  const height = useTransform(scrollYProgress, [0, 1], ["1500px", "2000px"]);
  const mobileWidth = "100vw";
  const mobileHeight = "950px";

  const isInView = useInView(containerRef, { amount: 0.3 });

  return (
    <div className="flex items-center justify-center min-h-[1000px] sm:min-h-[1150px] md:min-h-[1250px] xl:min-h-[1400px] w-screen z-[0]">
      <motion.div
        ref={containerRef}
        className={`bg-gradient-to-t from-[#011345] to-[#023BC6] z-[-2] min-h-[1000px] sm:min-h-[1150px] absolute ${isMobile ? "left-0" : "left-1/2 transform -translate-x-1/2"}`}
        style={{
          width: isMobile ? mobileWidth : width,
          height: isMobile ? mobileHeight : height,
          clipPath: isMobile ? "none" : "ellipse(80% 40% at 50% 50%)",
        }}
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="flex min-h-[500px] sm:min-h-[700px] md:min-h-[600px] xl:min-h-[850px] rounded-full items-center justify-center">
            <div className="rounded-full aspect-square w-[95vw] md:w-[50vw] xl:w-[50vw] bg-[url('/images/img4.png')] bg-cover bg-center p-6 flex items-center justify-center">
              <h1 className="text-2xl font-light w-[40%] xl:text-5xl text-white leading-tight text-center">
                Experiencia en todas las industrias que impactan al mundo.
              </h1>
            </div>
          </div>

          <div className="w-full m-auto flex flex-col items-center justify-center md:mt-0 text-white lg:hidden gap-2 px-6">
            {[
              "Arquitectura",
              "Ingeniería",
              "Construcción",
              "Diseño de Productos",
              "Manufactura de Productos",
              "Operación",
              "Mantenimiento",
            ].map((title, index) => (
              <p key={index} className="text-center text-2xl font-light">
                {title}
              </p>
            ))}
          </div>
        </div>

        <div className="hidden lg:block">
          <AnimatePresence>
            {isInView && (
              <>
                {[
                  { top: "33%", left: "23%", size: 240 },
                  { top: "26.5%", left: "58%", size: 250 },
                  { top: "34%", left: "76%", size: 180 },
                  { top: "23%", left: "34%", size: 180 },
                  { top: "57%", left: "18%", size: 170 },
                  { top: "58%", left: "68%", size: 260 },
                  { top: "70%", left: "45%", size: 130 },
                ].map((pos, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5 + index * 0.15,
                      ease: "easeOut",
                    }}
                    className="absolute rounded-full border-2 border-white flex items-center justify-center text-white font-thin"
                    style={{
                      top: pos.top,
                      left: pos.left,
                      width: pos.size,
                      height: pos.size,
                    }}
                  >
                    <span
                      className="text-center"
                      style={{
                        fontSize: pos.size < 180 ? "14px" : "20px",
                        padding: pos.size < 180 ? "6px" : "10px",
                      }}
                    >
                      {
                        [
                          "Arquitectura",
                          "Ingeniería",
                          "Construcción",
                          "Diseño de Productos",
                          "Manufactura de Productos",
                          "Operación",
                          "Mantenimiento",
                        ][index]
                      }
                    </span>
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

export default Sec3;
