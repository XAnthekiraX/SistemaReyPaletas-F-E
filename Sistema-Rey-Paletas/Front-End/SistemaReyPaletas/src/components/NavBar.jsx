import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { IoPeopleCircleOutline } from "react-icons/io5";
import RpImage from "../assets/RpImagen.svg"
import "../App.css";
export default function NavBar() {
    return (
        <div className=" w-full h-auto p-1">
            {/* Header de movil */}
            <div className="flex items-center w-full h-auto justify-between pr-2 pl-2  sm:h-0 sm:overflow-hidden">
                <IoPeopleCircleOutline className="h-7 w-7 text-gray-400 sm:h-8 sm:w-8 lg:h-9 lg:w-9 2xl:h-10 2xl:w-10" />
                <div className="text-center text-[70%] overflow-hidden justify-center items-center" >
                    <div>NombreDeLaPersona</div>
                    <div className="text-gray-400 font-bold ">CargoQueOcupa</div>
                </div>
                <div className="flex w-auto text-[8px] sm:text-[8px] xl:text-[9px]  relative">
                    <IoIosNotifications className="h-5 w-5 text-gray-400 lg:h-6 lg:w-6 md:h-7 md:w-7  2xl:h-8 2xl:w-8" />
                    <div className="bg-red-500 rounded-full w-3 h-3 sm:h-4 sm:w-4 overflow-hidden absolute translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 lg:translate-x-4 lg:translate-y-3 flex justify-center items-center text-white border border-white">3</div>
                </div>
            </div>
            {/* Header de escritorio */}
            <div className="flex items-center w-full h-0 overflow-hidden sm:h-auto justify-between pr-2 pl-2">
                <div className="flex gap-2 w-full">
                    <div className="flex justify-center items-center">
                        <h1 className="gradient font-berskshire sm:opacity-0 sm:text-[0px] text-center text-transparent bg-clip-text ">Rey Paletas</h1>
                        <img src={RpImage} className="h-9 w-9" />
                    </div>
                    <div className="w-0 h-0 overflow-hidden sm:w-auto sm:h-auto sm:text-[13px] flex flex-col justify-center items-start ml-1 ">
                        <h1 className="font-berskshire gradient text-transparent bg-clip-text">Rey Paletas</h1>
                        <div className="text-gray-500">SectorDeTrabajo</div>
                    </div>
                </div>
                <div className="flex w-full justify-end items-center gap-2">
                    <FaRegCircleQuestion className="h-4 w-4 text-gray-400"/>
                    <div className="flex w-auto text-[8px] sm:text-[8px] xl:text-[9px]  relative">
                        <IoIosNotifications className="h-5 w-5 text-gray-400" />
                        <div className="bg-red-500 text-white justify-center text-center items-center rounded-full w-3 h-3  overflow-hidden -translate-x-1.5 translate-y-1.5">3</div>
                    </div>
                    <IoPeopleCircleOutline className="h-7 w-7 text-gray-400 sm:h-8 sm:w-8 lg:h-9 lg:w-9 2xl:h-10 2xl:w-10" />
                    <div className="text-center text-[70%] overflow-hidden justify-center items-center" >
                        <div>NombreDeLaPersona</div>
                        <div className="text-gray-400 font-bold ">CargoQueOcupa</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
