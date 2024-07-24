import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { IoPeopleCircleOutline } from "react-icons/io5";
import RpImage from "../assets/RpImagen.svg"

export default function NavBar() {
    return (
        <div className="border top-0 fixed  w-screen h-auto flex gap-2 pr-4 sm:pr-8  items-center justify-between ">
            <div className=" w-auto flex justify-center items-center bg-gray-300 p-3 rounded-sm border-r border-gray-300 sm:w-[30%] lg:w-[16.5%] sm:justify-evenly">
                {/* Agregar Imagen de la Empresa */}
                <div className="rounded-full border border-gray-30 overflow-hidden p-1.5 bg-blue-100 justify-center items-center">
                    <img src={RpImage} className="h-5 w-5 text-gray-400 lg:h-5 lg:w-5] 2xl:h-8 2xl:w-8 0" />
                </div>
                <div className="w-0 overflow-hidden sm:w-auto text-[8px] md:text-[10px] lg:text-[12px] 2xl:text-[12px] flex flex-col justify-center items-start ml-1 ">
                    <div>NombreDeLaEmpresa</div>
                    <div className="text-gray-500">SectorDeTrabajo</div>
                </div>
            </div>
            <div className="flex gap-2 justify-center items-center">
                <FaRegCircleQuestion className="h-3 w-3 text-gray-400 lg:h-4 lg:w-4 md:h-5 md:w-5  2xl:h-6 2xl:w-6" />
                <div className="flex text-[8px] sm:text-[10px] relative">
                    <IoIosNotifications className="h-5 w-5 text-gray-400 lg:h-6 lg:w-6 md:h-7 md:w-7  2xl:h-8 2xl:w-8" />
                    <div className="bg-red-500 rounded-full w-3 h-3 sm:h-5 sm:w-5 overflow-hidden absolute translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 lg:translate-x-4 lg:translate-y-3 flex justify-center items-center text-white border border-white">3</div>
                </div>
                <div className="border h-4/5 border-gray-300"></div>
                <div className="flex justify-center items-center">
                    {/* Agregar Imagen del usuario */}
                    <IoPeopleCircleOutline className="h-7 w-7 text-gray-400 sm:h-8 sm:w-8 lg:h-9 lg:w-9 2xl:h-10 2xl:w-10" />
                    <div className="text-[8px] md:text-[10px] lg:text-[12px] 2xl:text-[12px] flex flex-col justify-center items-start ml-1">
                        <div>NombreDeLaPersona</div>
                        <div className="text-gray-400 font-bold">CargoQueOcupa</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
