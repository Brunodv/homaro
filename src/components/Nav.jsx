import { CgMenuGridO } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";
import { MdStarRate } from "react-icons/md";
import { useContext, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import MyContext from "../context/MyContext";
import { Link } from "react-router-dom";
function Nav() {
    const {  isMenuOpen, setIsMenuOpen, toggleMenu } = useContext(MyContext);

    return (
        <>
          {/* Top nav */}
          <motion.div className="flex justify-end items-center xl:px-6 py-4 w-full h-[140px] xl:h-[120px] bg-transparent fixed z-[1] text-white cursor-pointer">
  <motion.button
    onClick={() => setIsMenuOpen(prev => !prev)}
    className="flex items-center gap-2 mr-2 xl:mr-10 cursor-pointer"
  >
    <span className="hidden sm:inline xl:inline text-[#123c7d]">MENÚ</span>
    <CgMenuGridO className="text-4xl md:text-5xl" color="#123c7d" />
  </motion.button>
</motion.div>

    
    {/* Menú lateral animado */}
    <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-2 flex items-center justify-end xl:pr-4 xl:py-[2%]"
            onClick={() => setIsMenuOpen(false)} // Cierra el menú si se hace clic en el fondo
          >
            <motion.div
              initial={{ scaleY: 0, width: '0%', originY: 0 }}  // Comienza con 100% en móviles
              animate={{
                scaleY: 1,
                width: isMenuOpen
                  ? window.innerWidth >= 1024  // Si la pantalla es grande (mayor o igual a 1024px)
                    ? '20%'                    // Ancho reducido para pantallas grandes
                    : '100%'                    // Ancho mayor para móviles y pantallas pequeñas
                  : '0%',
                originY: 0,
              }}
              exit={{
                scaleY: 0,
                width: '15%',
                originY: 0
              }}
              transition={{ duration: 0.4 }}
              className="bg-[#e6fbff] overflow-hidden h-full z-2 shadow-lg flex flex-col p-6 rounded-xl 
                sm:w-[60%] lg:w-[80%] w-full"  // Responsivo: 100% en móviles, 60% en sm+, 80% en lg+
              onClick={(e) => e.stopPropagation()} // Evitar que el clic en el menú cierre el menú
            >
              <div className="flex justify-end w-full">
                <button onClick={() => setIsMenuOpen(false)} className="text-3xl text-[#011957] flex items-center text-base cursor-pointer">
                  <IoMdClose />
                  <span>cerrar</span>
                </button>
              </div>
              <nav className="mt-10 flex flex-col gap-4">
                <Link to="/" onClick={toggleMenu} className="text-lg font-medium text-[#011957] hover:text-blue-500">Inicio</Link>
                <Link to="/servicios" onClick={toggleMenu} className="text-lg font-medium text-[#011957] hover:text-blue-500">Servicios</Link>
                <Link to="/nosotros" onClick={toggleMenu} className="text-lg font-medium text-[#011957] hover:text-blue-500">Nosotros</Link>
                <Link to="/contacto" onClick={toggleMenu} className="text-lg font-medium text-[#011957] hover:text-blue-500">Contacto</Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
    );
}

export default Nav;
