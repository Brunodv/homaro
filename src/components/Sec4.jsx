function Sec4(){
    return(
        <>
        <div className="min-h-screen flex items-center justify-center bg-white">
  {/* Segundo contenedor centrado verticalmente */}
  <div className="w-full gap-8  flex flex-col xl:flex-row xl:w-[70%] xl:h-[55%]">
    {/* Div superior pegado arriba */}
    <div className="flex px-8 xl:w-[40%] xl:items-start">
      <h2 className="text-4xl lg:text-6xl text-blue-700">
        Impulsamos el cambio con propósito
      </h2>
    </div>

    {/* Div inferior pegado abajo */}
    <div className="p-8 w-full xl:w-[60%] flex items-end">
      <p className="text-2xl xl:text-4xl text-gray-600">
      En Homaro, creemos que la tecnología 
es una herramienta poderosa para 
mejorar no solo los procesos, sino 
también la vida de las personas que los 
hacen posibles. Somos una 
organización internacional con raíces en 
México y Brasil, especializada en 
<span className="text-orange-500 font-extrabold italic">transformación digital y adopción de 
tecnología</span> de vanguardia para optimizar 
recursos a lo largo de todo el ciclo de 
vida de los activos.
      </p>
    </div>
  </div>
</div>


        </>
    )
}

export default Sec4;