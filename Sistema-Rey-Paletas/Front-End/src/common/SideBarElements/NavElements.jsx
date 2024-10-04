import { AddProductIcon, DashBoardIcon, HomeIcon, InventoryIcon, InvoiceIcon, InvoicesIcon, MovementsIcon, OrderIcon, ProductsIcon, SendPointIcon, UserIcon } from '../../images/icons/Icons';
export const NavElements = [
    {
        nameNav: 'Dashboard',
        dirNav: '/',
        iconNav: (
            <DashBoardIcon />
        ),
        subNav: [
            {
                nameSubNav: 'Home',
                dirSubNav: '/',
                iconSubNav: (
                    <HomeIcon />
                ),
            },
            {
                nameSubNav: 'Perfil',
                dirSubNav: '/Dashboard/Profile',
                iconSubNav: (
                    <UserIcon />
                ),
            },

        ],
    },
    {
        nameNav: 'Productos',
        dirNav: '/Product',
        iconNav: (
            <ProductsIcon clase="h-full w-full" />
        ),
        subNav: [
            {
                nameSubNav: 'Añadir Nuevo Producto',
                dirSubNav: '/Product',
                iconSubNav: (
                    <AddProductIcon />
                ),
            },
            {
                nameSubNav: 'Inventario',
                dirSubNav: '/Product/Inventory',
                iconSubNav: (
                    <InventoryIcon />
                ),
            },
            {
                nameSubNav: 'Registro de Movimientos',
                dirSubNav: '/Product/Movements',
                iconSubNav: (
                    <MovementsIcon />
                ),
            },
        ],
    },
    {
        nameNav: 'Pedidos',
        dirNav: '/Orders',
        iconNav: (
            <OrderIcon />
        ),
        subNav: [
            {
                nameSubNav: 'Pedidos Punto de Venta',
                dirSubNav: '/Orders',
                iconSubNav: (
                    <SendPointIcon />
                ),
            },
            {
                nameSubNav: 'Pedidos Franquicia',
                dirSubNav: '/Orders/Franchise',
                iconSubNav: (
                    <OrderIcon />
                ),
            },
            {
                nameSubNav: 'Estado de Pedidos',
                dirSubNav: '/Orders/Status',
                iconSubNav: (
                    <OrderIcon />
                ),
            },
            {
                nameSubNav: 'Historial de Pedidos',
                dirSubNav: '/Orders/History',
                iconSubNav: (
                    <MovementsIcon />
                ),
            },
        ],
    },
    {
        nameNav: 'Facturas',
        dirNav: '/Invoices',
        iconNav: (
            <InvoicesIcon />
        ),
        subNav: [
            {
                nameSubNav: 'Factura Franquicia',
                dirSubNav: '/Invoices/Franchise',
                iconSubNav: (
                    <InvoicesIcon />
                ),
            },
            {
                nameSubNav: 'Facturas Puntos de Venta',
                dirSubNav: '/Invoices/SalesPoint',
                iconSubNav: (
                    <InvoicesIcon />
                ),
            },
            {
                nameSubNav: 'Estado de Facturas',
                dirSubNav: '/Invoices/Status',
                iconSubNav: (
                    <InvoiceIcon />
                ),
            },
            {
                nameSubNav: 'Historial de Facturas',
                dirSubNav: '/Invoices/History',
                iconSubNav: (
                    <InvoicesIcon />
                ),
            },
        ],


    },


];
