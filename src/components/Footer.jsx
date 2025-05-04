import { motion } from "framer-motion";

function Footer() {
  return (
<div className="bg-[#0240D4] h-[700px] sm:h-[650px] md:h-[600px] lg:h-[700px] md:gap-14 2xl:gap-14 lg:pl-30 xl:pl-40 xl:pt-30 sm:flex-row-reverse text-white w-full pl-14 pt-16 pb-12 md:pl-14 md:pr-0 flex flex-col justify-between">
{/* Div interno que se estira y separa contenido arriba-abajo */}
      <div className="border-t-2 flex flex-col h-full gap-12 lg:gap-0 sm:w-[50%] lg:w-[60%] md:w-full md:flex-row md:mt-20 xl:mt-10 2xl:mt-14  xl:pt-10 xl:pl-10 xl:w-[70%] 2xl:w-[70%]">
        
        {/* Grid de Palabras */}
        <div className="flex flex-col gap-5 md:gap-7 mt-8 md:w-[60%] 2xl:w-[40%] font-thin ">
          <p className="text-4xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-thin">Consultoría</p>
          <p className="text-4xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-thin">Educación</p>
          <p className="text-4xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-thin">Plataformas</p>
        </div>

        <div className="flex flex-col gap-5 mt-8 md:w-[60%] font-thin">
          <p className="text-4xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-thin">Plitie</p>
          <p className="text-4xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-thin">BiimHub</p>
        </div>

      </div>
       {/* Contenedor principal (abajo de todo) */}
       <div className="flex flex-col text-center sm:text-left md:h-[300px] sm:w-[40%] 2xl:w-[30%] md:flex-row md:text-left justify-between gap-10 pr-14">
          <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[100%] flex flex-col gap-6 2xl:gap-10">
            {/*<h2 className="text-4xl md:text-5xl font-bold">HOMARO</h2>*/}
            <motion.img 
      src="/homaro/images/logo.png" 
      alt="Logo Homaro"
      className="h-auto object-cover m-0 m-auto sm:ml-0 w-[70%] sm:w-[100%] lg:w-[80%] 2xl:w-[100%]"
    />
            <p className="text-lg font-thin md:text-2xl">info@grupohomaro.com</p>
            <div className="hidden sm:block">
            <p className="text-lg font-thin md:text-2xl"> CDMX, México.</p>
            <p className="text-lg font-thin md:text-2xl">Indaiatuba, Brasil.</p></div>
          </div>
        </div>
    </div>
  );
}

export default Footer;
