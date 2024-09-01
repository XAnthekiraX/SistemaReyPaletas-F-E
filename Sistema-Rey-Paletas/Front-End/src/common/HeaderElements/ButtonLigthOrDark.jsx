import { useEffect, useState } from 'react';
import { Moon, Sun } from '../../images/icons/Icons';
import { getGlobalVariable, setGlobalVariable } from '../../cookies/cookieManajer';

export default function ButtonLigthOrDark() {

    // Inicializar el estado de darkMode usando la variable local (cookie)
    const [darkMode, setDarkMode] = useState(() => {
        // Intenta obtener el valor guardado en la cookie o localStorage
        const savedMode = getGlobalVariable('darkMode');
        // Si existe un valor guardado, lo retorna; de lo contrario, retorna "false"
        return savedMode === 'true';
    });

    useEffect(() => {
        // Aplica o quita la clase "dark" en el elemento raíz
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        // Guarda el estado actual de darkMode en la cookie o localStorage
        setGlobalVariable('darkMode', darkMode);
    }, [darkMode]);

    const handleClick = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div 
            className={`border min-w-[80px] max-w-[30%] p-0.5 h-auto rounded-r-full rounded-l-full flex items-center cursor-pointer transition-all ${darkMode ? 'justify-end bg-blue-500' : 'bg-gray-200 justify-start'}`} 
            onClick={handleClick}
        >
            <div className='border h-7 w-7 p-1 rounded-full flex justify-center items-center bg-white shadow-xl'>
                <Sun darkMode={darkMode}/>
                <Moon darkMode={darkMode}/>
            </div>
        </div>
    );
}
