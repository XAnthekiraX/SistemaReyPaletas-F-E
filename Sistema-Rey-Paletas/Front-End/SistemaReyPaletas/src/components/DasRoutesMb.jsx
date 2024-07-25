//Rutas para el modo celular

import { useState } from "react";
import { LiaFileInvoiceSolid } from "react-icons/lia"
import { MdOutlineProductionQuantityLimits, MdSpaceDashboard } from "react-icons/md"
import { TbNotes } from "react-icons/tb"
import { Link } from "react-router-dom";

export default function DasRoutesMb() {

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
        <div className="w-full h-auto border bg-gray-200 rounded-xl justify-center items-center text-center sm:h-0">
            <ul className="flex justify-center items-center w-full">
                {

                    Routes.map((item, index) => {
                        const additionalClasses =
                            selectedIndex === index
                                ? "border-blue-400 text-blue-500"
                                : "text-gray-400";
                        return (
                            <Link onClick={() => handleItemClick(index)} key={index} to={item.routeDirection} className={`text-gray-400 w-8 h-8 hover:text-blue-300 hover:border-blue-300 hover:scale-[1.1] flex gap-1 justify-center content-center items-center border border-gray-400 p-1 m-1  rounded-full ${additionalClasses} overflow-hidden`}>
                                <div className="h-5 w-5 flex justify-center items-center">
                                    {item.routeImage}
                                </div>
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}
