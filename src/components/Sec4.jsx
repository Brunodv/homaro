import { motion } from "framer-motion";

function Sec4() {
  return (
    <div className="min-h-[168vh] flex items-center justify-center">
      {/* Contenedor principal responsive */}
      <div className="w-full gap-2 h-full xl:gap-32 flex flex-col xl:flex-row xl:w-[70%] xl:h-[55%]">
        {/* Título sin borde animado */}
        <div className="flex xl:w-[80%] px-8 xl:px-0 xl:items-start md:items-center md:justify-center">
          <div className="flex flex-col sm:gap-4 sm:flex-row md:gap-4 md:px-10 sm:flex-col xl:flex-col">
            <h2 className="text-3xl font-bold sm:text-3xl md:text-4xl xl:text-6xl text-blue-700 anotherFont">
              Impulsamos
            </h2>
            <h2 className="text-3xl font-bold sm:text-3xl md:text-4xl xl:text-6xl text-blue-700 anotherFont">
              el cambio
            </h2>
            <h2 className="text-3xl font-bold m:text-3xl md:text-4xl xl:text-6xl text-blue-700 anotherFont">
              con propósito
            </h2>
          </div>
        </div>

        {/* Texto inferior */}
        <div className="w-full xl:w-[93%] flex items-end px-8 py-2 md:p-18 xl:p-2 xl:mt-20">
          <p className="text-xl sm:text-2xl xl:text-4xl text-gray-600 font-light w-[70%] leading-tight">
            En Homaro, creemos que la tecnología es una herramienta poderosa
            para mejorar no solo los procesos, sino también la vida de las
            personas que los hacen posibles. Somos una organización
            internacional con raíces en México y Brasil, especializada en{" "}
            <span className="text-orange-500 font-extrabold">
              transformación digital y adopción de tecnología de vanguardia
            </span>{" "}
            para optimizar recursos a lo largo de todo el ciclo
            de vida de los activos.
          </p>
        </div>

        <div className="flex items-start w-full h-[100%] p-5 lg:w-[50%] lg:m-0 lg:m-auto lg:py-6 lg:mr-8 xl:mr-10">
<img src="images/img5.png" className="rounded-2xl object-cover w-full h-full md:h-[340px] xl:h-[430px] lg:rounded-2xl" alt="" />
</div>

<div className="lg:flex lg:items-center lg:jusfify-center lg:p-5 lg:w-[90%]"><p className="text-gray-700 w-[84%] text-xl sm:text-2xl px-12 py-4 lg:px-6 lg:text-2xl font-light xl:text-3xl 2xl:p-18">
    Nuestra pasión es ayudar a organizaciones 
—y a las personas dentro de ellas— a 
evolucionar. Trabajamos para que cada 
proyecto, producto, infraestructura o 
construcción cobre vida de forma más 
eficiente, sostenible y humana. Porque al 
transformar la manera en que trabajamos, 
también {" "} <span className="text-green-600 italic font-extrabold">transformamos el mundo que 
habitamos.</span>
    </p></div>


      </div>
    </div>
  );
}

export default Sec4;
