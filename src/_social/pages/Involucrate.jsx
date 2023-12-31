
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
                   ¡Hola!  ¿Te has planteado la posibilidad de darle un hogar a un amigo peludo?
                   </p>
             
                    <p className="involucrateParagh mb-6 text-2xl text-black font-bold">
                   Los perros y los gatos son amigos leales que están contigo en los buenos y malos momentos. Además de su apoyo incondicional, tener una mascota puede tener impactos positivos en tu salud mental y física. Ya sea paseando un perro, jugando con un gato o simplemente tener una compañía afectuosa puede mejorar tu bienestar. 
                   </p>
             
                    <p className="involucrateParagh mb-6 text-2xl text-black font-bold">
                   Cuidar de una mascota va más allá de la simple compañia. Implica asumir responsabilidades, desarrollar empatía y tener disciplina. Es una experiencia enriquecedora que no solo beneficia al animal, sino también al adoptante.
                   </p>
             
                    <p className="involucrateParagh mb-6 text-2xl text-black font-bold">
                    En AdoptaPatas, ofrecemos la oportunidad tanto a usuarios individuales como a organizaciones de encontrar a su compañero. Independientemente de sí eres un individuo buscando un amigo o una organización interesada en darle hogar a una mascota, el primer paso es registrarse. ¡Únete a nuestra comunidad y haz una diferencia en la vida de estos seres!. 
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
                    <div className=" w-[200%] mx-auto flex-basis-40">
                        <img
                            src="src/assets/img/contact/Carousel/OIG (8).jpeg"
                            className="mx-auto max-w-[90%] rounded-[100%]" alt="mascota"
                        />
                        </div>
                    </div>
                        {/* <link
                         href="/sign-up"
                        className="block text-center text-lg my-5 text-buttonColor"
                        /> Regístrate */}

                        {/* Link a Regístrate */}
                    
                    <button
                        id="buttonContact"
                        class="cursor-pointer mx-auto text-center py-1 px-2 mb-1 text-[2rem] flex justify-center align-middle w-full"
                    >
                        Regístrate
                    </button>

        </div>
        </main>
        
        );
};

export default Involucrate;