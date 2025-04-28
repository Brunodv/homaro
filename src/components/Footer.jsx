function Footer() {
  return (
    <div className="bg-[#0240D4] min-h-[80vh] text-white w-full pl-14 pt-16 pb-12 md:px-20 flex flex-col justify-between">
      {/* Div interno que se estira y separa contenido arriba-abajo */}
      <div className="border-t-2 flex flex-col h-full gap-12">
        
        {/* Grid de Palabras */}
        <div className="flex flex-col gap-5 mt-8 md:w-[60%] font-thin">
          <p className="text-4xl sm:text-3xl">Consultoría</p>
          <p className="text-4xl sm:text-3xl">Educación</p>
          <p className="text-4xl sm:text-3xl">Plataformas</p>
        </div>

        <div className="flex flex-col gap-5 mt-8 md:w-[60%] font-thin">
          <p className="text-4xl sm:text-3xl">Plitie</p>
          <p className="text-4xl sm:text-3xl">BiimHub</p>
        </div>

      </div>
       {/* Contenedor principal (abajo de todo) */}
       <div className="flex flex-col text-center md:flex-row justify-between gap-10 pr-14">
          <div className="w-full md:w-[40%] flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl font-bold">HOMARO</h2>
            <p className="text-lg font-thin md:text-xl">info@grupohomaro.com</p>
          </div>
        </div>
    </div>
  );
}

export default Footer;
