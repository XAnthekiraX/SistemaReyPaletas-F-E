import Product from '../../images/product/product-01.png'
const DashBoardProductTable = () => {


    return (
        <div className="w-full font-sans flex flex-col bg-white shadow-lg border px-4 py-5 gap-4 dark:bg-big-stone-900 dark:border-big-stone-700 dark:text-white">
            <span className="text-2xl ml-8 font-bold">Productos Top</span>
            <table>
                <thead className="p-2  bg-big-stone-50 text-big-stone-800  font-light  dark:bg-big-stone-700">
                    <tr className='w-full grid grid-cols-3 font-light dark:text-big-stone-300'>
                        <th>Nombre</th>
                        <th>Saldo</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody className='w-full flex flex-col gap-3'>
                    <tr className=' grid grid-cols-3 border-b dark:border-big-stone-700 p-2 '>
                        <th className='text-center items-center  grid grid-cols-1 sm:grid-cols-4'>
                            <img src={Product} alt='0' className='rounded-lg w-20 mx-auto' />
                            <span className='col-span-2'>Choco Frutilla</span>
                        </th>
                        <th className='flex justify-center items-center text-green-400'>$1500</th>
                        <th className='flex justify-center items-center text-blue-400'>280        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DashBoardProductTable;
