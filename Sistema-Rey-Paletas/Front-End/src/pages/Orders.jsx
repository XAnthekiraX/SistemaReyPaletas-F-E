import { useState } from "react";
import OrdersCard from "../components/Orders/OrdersCard";
import FormOrder from "../components/Orders/FormOrder";

export default function Orders() {

    const [select, setSelect] = useState(false);

    const handleClickClose = () => {
        setSelect(prevState => !prevState);
    };
    return (
        <div className='h-full gap-5 w-full flex flex-col relative justify-start items-center overflow-hidden overflow-y-auto lg:px-7 '>
            <div className={`${select ? 'w-full h-full' : 'w-0 h-0'} bg-black absolute  overflow-hidden flex justify-center items-center bg-opacity-50`}>
                <FormOrder onCLickClose={handleClickClose} />
            </div>
            <div className="bg-white w-full flex flex-col p-3 m-1 lg:m-7 dark:bg-big-stone-900 rounded-lg">
                <div className="w-full flex justify-end items-end content-end">
                    <button className="border p-2 rounded-lg bg-blue-700 text-white hover:bg-blue-600 dark:border-big-stone-600" onClick={handleClickClose}>Agregar Nuevo Pedido</button>
                </div>
                <div>
                    <OrdersCard />
                </div>
            </div>
        </div>
    )
}
