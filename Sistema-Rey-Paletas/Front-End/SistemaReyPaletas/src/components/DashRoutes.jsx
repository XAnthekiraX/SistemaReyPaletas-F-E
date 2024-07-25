//Rutas para el modo computador

import { Link } from "react-router-dom";

import { MdSpaceDashboard } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { TbNotes } from "react-icons/tb";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useState } from "react";

export default function DashRoutes() {

    // Estado para el elemento seleccionado
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Función para manejar el clic en un elemento
    const handleItemClick = (index) => {
        setSelectedIndex(index);
    };
    const Routes = [
        {
            routeName: 'DashBoard',
            routeDirection: '/DashBoard',
            routeImage: <MdSpaceDashboard className="h-7 w-7" />
        },
        {
            routeName: 'Facturas',
            routeDirection: '/Invoices',
            routeImage: <LiaFileInvoiceSolid className="h-7 w-7" />
        },
        {
            routeName: 'Pedidos',
            routeDirection: '/Orders',
            routeImage: <TbNotes className="h-7 w-7" />
        },
        {
            routeName: 'Producto',
            routeDirection: '/Product',
            routeImage: <MdOutlineProductionQuantityLimits className="h-7 w-7" />
        }
    ]

    return (
        <div className="w-full h-full p-3 flex flex-col justify-start content-start overflow-hidden bg-gray-300">
            <ul className="flex flex-col justify-start items-center w-full">
                {

                    Routes.map((item, index) => {
                        const additionalClasses =
                            selectedIndex === index
                                ? "border-blue-400 text-blue-500"
                                : "text-gray-400";
                        return (
                            <Link onClick={() => handleItemClick(index)} key={index} to={item.routeDirection} className={`text-gray-400 w-full  hover:text-blue-300 hover:border-blue-300 hover:scale-[1.1] flex gap-1 justify-start content-start items-center border border-gray-400 p-1 m-1  rounded-2xl ${additionalClasses} overflow-hidden`}>
                                <div className="h-auto w-auto p-1 mr-2">
                                    {item.routeImage}
                                </div>
                                {item.routeName}
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}
