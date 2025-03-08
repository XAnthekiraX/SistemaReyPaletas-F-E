import { createContext, useState, useContext } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState({ message: "", type: "", visible: false });

    // Función para mostrar la alerta
    const showAlert = (message, type) => {
        setAlert({ message, type, visible: true });

        // Ocultar la alerta después de 3 segundos
        setTimeout(() => {
            setAlert({ message: "", type: "", visible: false });
        }, 4000);
    };

    return (
        <AlertContext.Provider value={{ alert, showAlert }}>
            {children}
        </AlertContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useAlert = () => useContext(AlertContext);
