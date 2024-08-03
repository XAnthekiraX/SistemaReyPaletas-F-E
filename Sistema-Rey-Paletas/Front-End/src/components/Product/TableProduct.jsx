import Product from '../../images/product/product-01.png'
import PropTypes from 'prop-types';

const Garbage = ({ classname }) => {
    return (<svg className={`${classname}`} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16M96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0" /></svg>)
}

const Edit = ({ classname }) => {
    return (
        <svg className={`${classname}`} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m7 17.013l4.413-.015l9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583zM18.045 4.458l1.589 1.583l-1.597 1.582l-1.586-1.585zM9 13.417l6.03-5.973l1.586 1.586l-6.029 5.971L9 15.006z" /><path fill="currentColor" d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2" /></svg>
    )
}

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
    classname:PropTypes.string.isRequired
}

Edit.propTypes={
    classname:PropTypes.string.i
}