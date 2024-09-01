import { CostIcon, ProductsIcon, SendIcon, SendPointIcon } from "../../images/icons/Icons";

export const CardsElements = [
    {
        nameCard: 'Venta',
        valueCard: `$1200`,
        iconCard: (<SendIcon/>),
    },
    {
        nameCard:'Gastos',
        valueCard:`$500`,
        iconCard:(<CostIcon/>),

    },
    {
        nameCard:'Productos',
        valueCard:`76`,
        iconCard:(<ProductsIcon clase="w-6 h-auto"/>),
    },
    {
        nameCard:'Puntos de venta',
        valueCard:`7`,
        iconCard:(<SendPointIcon/>),
    }

]