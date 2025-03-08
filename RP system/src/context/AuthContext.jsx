import { createContext, useState, useContext, useEffect } from "react";

// 1. Creamos el contexto
const AuthContext = createContext();

// 2. Proveedor del contexto
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // 3. Cargar la información del usuario desde localStorage al iniciar la app
    useEffect(() => {
        const storedUser = localStorage.getItem("userData");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // 4. Función para iniciar sesión
    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("userData", JSON.stringify(userData));
    };

    // 5. Función para cerrar sesión
    const logout = () => {
        setUser(null);
        localStorage.removeItem("userData");
        localStorage.removeItem("loginSuccess");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// 6. Hook personalizado para usar el contexto
export const useAuth = () => useContext(AuthContext);
