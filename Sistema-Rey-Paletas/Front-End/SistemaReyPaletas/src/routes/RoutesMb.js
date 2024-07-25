import { MdSpaceDashboard } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { TbNotes } from "react-icons/tb";
export const MbRoutes = [
    {
        routeName:'Facturas',
        routeDirection:'/Invoices',
        routeImage:LiaFileInvoiceSolid
    },
    {
        routeName:'DashBoard',
        routeDirection:'/DashBoard',
        routeImage:MdSpaceDashboard
    },
    {
        routeName:'Pedidos',
        routeDirection:'/Orders',
        routeImage:TbNotes
    }
]