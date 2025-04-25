//import useScrollAnimation from "../hooks/useScrollAnimation";

function Vision() {
  //const ref = useScrollAnimation("fade-in");

  return (
    <div className="min-h-screen flex flex-col w-full md:flex-row items-center justify-center">
      {/* Imagen (bloque amarillo) */}
      <div
        className="w-full md:w-1/2 h-64 md:h-screen bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: 'url("images/img3.jpg")' }}
      ></div>

      {/* Texto (bloque verde) */}
      <div
       /* ref={ref}*/
        className="w-full md:w-1/2 flex items-left justify-left md:pt-32"
      >
        <div className="w-full md:w-[90%] text-left">
          <h2 className="p-8 text-xl sm:text-2xl font-bold text-blue-700 ">
            VISIÓN
          </h2>
          <p className="p-8 text-lg font-light sm:text-xl md:text-4xl text-gray-700 leading-tight ]">
          Empoderar a la humanidad con herramientas, 
conocimiento y experiencia para abrazar la 
transformación digital desde una mirada 
profundamente humana.          </p>
        </div>
      </div>
    </div>
  );
}

export default Vision;
