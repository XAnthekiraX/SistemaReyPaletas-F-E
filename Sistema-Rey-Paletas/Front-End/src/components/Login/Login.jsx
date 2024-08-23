import { useState } from "react"; // Importamos useState desde React para manejar el estado del componente
import {LoginCard} from "../../common/Login/LoginCard"; // Importamos el componente LoginCard
import RegisterCard from "../../common/Login/RegisterCard"; // Importamos el componente RegisterCard

export default function Login() {
    // Definimos un estado `logSelect` con un valor inicial de `true`.
    // `logSelect` controla cuál de las dos tarjetas (Login o Register) se muestra.
    const [logSelect, setLogSelect] = useState(true);

    // Definimos la función `handleClick` que cambia el estado de `logSelect`.
    // Recibe un argumento `selection`, que puede ser `true` (Login) o `false` (Register).
    // Solo cambia el estado si `selection` es diferente al estado actual.
    const handleClick = (selection) => {
        if (logSelect !== selection) { // Si el estado actual es diferente a `selection`, se actualiza
            setLogSelect(selection); // Actualizamos el estado de `logSelect` a `selection`
        }
    };

    return (
        // Contenedor principal con clases para manejar el diseño de la página
        <div className="w-full flex h-screen justify-center items-start bg-athens-gray-50 ">
            <div className="w-[35rem]  flex flex-col justify-center items-center">
                <div className="w-full items-center flex  sm:flex-row p-4 justify-between ">
                    {/* Título principal que cambia dinámicamente entre "Login" y "Register" */}
                    <h1 className={`${logSelect ? "font-bold text-[1.8rem]" : "font-bold text-[1.4rem] "}`}>
                        {logSelect ? "Login" : "Register"}
                    </h1>
                
                    {/* Sección de selección con dos opciones: "Login" y "Register" */}
                    <div className="flex text-[1.1rem] text-athens-gray-400 font-semibold select-none">
                        {/* Opción "Login" */}
                        <h1
                            // Aplica un estilo diferente (color azul) si `logSelect` es `true`
                            className={`${logSelect ? 'text-blue-500' : ''}`}
                            // Cambia el estado a `true` al hacer clic, mostrando la tarjeta de Login
                            onClick={() => handleClick(true)}
                        >
                            Login
                        </h1>
                        <h1>/</h1> {/* Separador entre las opciones */}
                
                        {/* Opción "Register" */}
                        <h1
                            // Aplica un estilo diferente (color azul) si `logSelect` es `false`
                            className={`${!logSelect ? 'text-blue-500' : ''}`}
                            // Cambia el estado a `false` al hacer clic, mostrando la tarjeta de Register
                            onClick={() => handleClick(false)}
                        >
                            Register
                        </h1>
                    </div>
                </div>
                <div className="w-full h-auto flex justify-center items-center ">
                    {/* Renderiza la tarjeta de Login si `logSelect` es `true`, o la de Register si es `false` */}
                    {logSelect ? <LoginCard/> : <RegisterCard />}
                </div>
            </div>

        </div>
    );
}
