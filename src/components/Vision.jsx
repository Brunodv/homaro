function Vision() {

  return (
    <div className="h-auto mb-24 flex flex-col w-full md:flex-row md:h-[70vh] lg:w-[90%] lg:m-0 lg:m-auto xl:h-[190vh]">
      <div
        className="w-[70%] sm:w-[63%] m-0 m-auto"
      ><img src="images/img3.jpg" className="w-full h-full object-cover" alt="" />
</div>

        <div className="w-full text-left lg:w-[90%] xl:w-[70%] xl:px-20 md:m-0 md:m-auto md:w-[50%]">
          <h2 className="px-8 text-xl sm:text-lg sm:px-12 font-bold text-blue-700 md:px-2 xl:text-2xl">
            VISIÓN
          </h2>
          <p className="px-8 py-4 text-lg font-light sm:text-2xl sm:px-12 xl:text-3xl text-gray-700 leading-tight md:px-2 lg:pb-28 xl:pb-42 2xl:pb-72 xl:text-4xl">
          Empoderar a la humanidad con herramientas, 
conocimiento y experiencia para abrazar la 
transformación digital desde una mirada 
profundamente humana.          </p>
        </div>
      </div>
  );
}

export default Vision;
