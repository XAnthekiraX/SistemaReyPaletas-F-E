import { useEffect, useState } from 'react'

export default function ButtonLigthOrDark() {


    //Declaramos el estado del botón para agregar el modo oscuro dado q estará desactivado el valor sera "false"
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const Sun = () => {
        return (
            <svg className={`transition-all ${darkMode ? 'opacity-0 h-0 w-0' : 'opacity-100 h-full w-full'}`} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64m-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48M58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8m80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8m112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16" /></svg>
        )
    }

    const Moon = () => {
        return (
            <svg className={`transition-all ${darkMode ? 'opacity-100 h-full w-full' : 'opacity-0 h-0 w-0'}`} xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 256 256"><path fill="currentColor" d="M233.54 142.23a8 8 0 0 0-8-2a88.08 88.08 0 0 1-109.8-109.8a8 8 0 0 0-10-10a104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.1 103.1 0 0 0 62.52-20.88a104.84 104.84 0 0 0 37-52.91a8 8 0 0 0-1.98-7.98m-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104a106 106 0 0 0 14.92-1.06a89 89 0 0 1-26.02 31.4" /></svg>
        )
    }

    const handleClick = () => {
        console.log(darkMode);
        setDarkMode(!darkMode)
    }

    return (
        <div className={`border min-w-[80px] max-w-[30%] p-0.5 h-auto rounded-r-full rounded-l-full flex items-center cursor-pointer  transition-all ${darkMode ? 'justify-end bg-blue-500' : 'bg-gray-200 justify-start'}`} onClick={handleClick}>
            <div className='border h-7 w-7 p-1 rounded-full flex justify-center items-center bg-white shadow-xl' >
                <Sun />
                <Moon />
            </div>
        </div>
    )
}
