import { MdSpaceDashboard } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { TbNotes } from "react-icons/tb";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

export const Routes = [
    {
        routeName:'DashBoard',
        routeDirection:'/DashBoard',
        routeImage:<MdSpaceDashboard/>
    },
    {
        routeName:'Facturas',
        routeDirection:'/Invoices',
        routeImage:<LiaFileInvoiceSolid/>
    },
    {
        routeName:'Pedidos',
        routeDirection:'/Orders',
        routeImage:<TbNotes/>
    },
    {
        routeName:'Producto',
        routeDirection:'/Product',
        routeImage:<MdOutlineProductionQuantityLimits/>
    }
]