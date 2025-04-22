function Footer() {
  return (
    <div className="bg-blue-700 text-white w-full py-16 px-6 md:px-20 flex flex-col gap-12">
      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Columna Izquierda */}
        <div className="w-full md:w-[40%] flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-bold">HOMARO</h2>
          <p className="text-lg md:text-xl">info@grupohomaro.com</p>
          <div className="text-lg md:text-xl">
            <p>CDMX, México.</p>
            <p>Indaiatuba, Brasil.</p>
          </div>
        </div>

        {/* Grid de Palabras */}
        <div className="w-full md:w-[60%] grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 md:mt-0">
          <p className="text-2xl sm:text-3xl">Consultoría</p>
          <p className="text-2xl sm:text-3xl">Plitie</p>
          <p className="text-2xl sm:text-3xl">Educación</p>
          <p className="text-2xl sm:text-3xl">BiimHub</p>
          <p className="text-2xl sm:text-3xl">Plataformas</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
