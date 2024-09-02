import Product from '../../images/product/product-01.png'
import {Garbage, Edit} from '../../images/icons/Icons'
import PropTypes from 'prop-types';





export default function TableProduct() {

    return (
        <div className=" w-full  font-sans flex flex-col bg-white shadow-lg border px-4 py-5 gap-4 dark:bg-big-stone-900 dark:border-big-stone-700 dark:text-white">
            <span className="text-2xl ml-8 font-bold">Productos</span>
            <table className='grid grid-rows-1 w-full'>
                <thead className="p-2  bg-big-stone-50 text-big-stone-800  font-light  dark:bg-big-stone-700">
                    <tr className='w-full grid grid-cols-5 font-light dark:text-big-stone-300'>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Categoría</th>
                        <th>Código</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody className='w-full flex flex-col gap-3'>
                    <tr className=' grid grid-cols-5 border-b dark:border-big-stone-700 p-2 '>
                        <th className='flex justify-center flex-wrap  items-center gap-5'>
                            <img src={Product} alt='0' className='rounded-lg w-20 ' />
                            <span>reloj</span>
                        </th>
                        <th className='flex justify-center items-center text-green-400'>$1500</th>
                        <th className='flex justify-center items-center text-blue-400'>280</th>
                        <th className='flex justify-center items-center text-blue-400'>CRM-018</th>
                        <th className='flex justify-center items-center text-blue-400'>
                            <Garbage classname={"text-red-500"} />
                            <Edit classname={"text-blue-500"} />
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

Garbage.propTypes={
    classname:PropTypes.string,
}

Edit.propTypes={
    classname:PropTypes.string,
}