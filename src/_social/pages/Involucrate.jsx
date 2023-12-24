import React from "react";
import SuccessStories from "./SuccessStories";

function Involucrate(){
    return (
        <div className="involucrate">
            <h1>Involúcrate</h1>
            <h2> ¿Cómo adoptar?</h2>    
        
            <p>
                !Hola¡ ¿Estás interesadx en adoptar?
                En AdoptaPatas tanto usuarios como organizaciones tienen la posibilidad de adoptar, en cualquiera que sea el caso (organización o usuario) deben inicialmente registrarse. 
            </p>
            <p>
                Si ya te has registrado de manera satisfactoria, podrás dirigirte al panel de "News Feed" en este lugar podrás encontrar a usuarios y organizaciones que están en la disposición de dar en adopción AdoptaPatas te mostrará los elementos que estén más cerca de tu ubicación.
            </p>
            <p>
                También es necesario destacar que el sitio solo está enfocado en la adopción de perros y gatos, por lo que ten en cuenta si es lo que buscas. 
            </p>

        <img src="/../assets/img/OIG(1).jpeg" alt="Perritos alegres" />

        <button onClick={handleNewsTermsClick}>
            Términos y condiciones
        </button>

        <button onClick={handleNewsFeedClick}>
           Registrarse
        </button>
        <SuccessStories/>

        </div>
        );
};

export default Involucrate;