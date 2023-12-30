
import React from "react";

function Involucrate(){
    return (

        <main className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-2 mx-auto bg-main-bg-color">
        <div className="col-span-3 my-auto text-main-text-color" >
            
            <h2 className="my-10 text-center text-[4rem]" id="place-sighnUp">Involúcrate y adopta mascotas</h2>
            
        {/* Contenedor dos columnas */}
            <div className="flex justify-between items-start">
                <div className="flex-grow text-justify">
                    <p className="involucrateParagh mb-6 text-2xl text-black font-bold">     
                   !Hola¡  ¿Estás interesado en adoptar?
                    En AdoptaPatas tanto usuarios como organizaciones tienen la posibilidad de adoptar, en cualquiera que sea el caso (organización o usuario) deben registrarse. 
                    </p>
             
                    <p className="involucrateParagh mb-6 text-2xl text-black font-bold">
                    Si ya te has registrado de manera satisfactoria, podrás dirigirte al panel de "Adoptar" en este lugar podrás encontrar a usuarios y organizaciones que están en la disposición de dar en adopción AdoptaPatas te mostrará los elementos que estén más cerca de tu ubicación.
                    </p>
           
                    <p className="involucrateParagh text-2xl text-black font-bold"> 
                    El sitio solo está enfocado en la adopción de perros y gatos, por lo que ten en cuenta si es lo que buscas. 
                    </p>
            
            </div>
            {/* <div className="w-[100%] mx-auto mt-10 border-2 rounded-[10px] bg-buttonColor hover:bg-main-text-color  text-black ">
                 <img src="src\assets\img\contact\Carousel\OIG (8).jpeg" className="mx-auto max-w-[70%] rounded-[100%]" alt="mascota" />
        
            </div> */}
                    <div className="w-[90%] mx-auto flex-basis-50">
                        <img
                            src="src/assets/img/contact/Carousel/OIG (8).jpeg"
                            className="mx-auto max-w-[100%] rounded-[100%]" alt="mascota"
                        />
                        </div>
                    </div>
                        <link
                         href="/sign-up"
                        className="block text-center text-lg my-4 text-buttonColor"
                        /> Regístrate

                        {/* Link a Regístrate */}
                    
                    <button
                        id="buttonContact"

                        className="cursor-pointer mx-auto text-center py-1 px-2 mb-1 text-[1.3rem] flex justify-center align-middle w-full"
                    >
                        Regístrate
                    </button>

        </div>
        </main>
        
        );
};

export default Involucrate;