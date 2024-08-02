import { InputProduct } from '../../common/Product/ProductInput';
import ProductOptionCategories from '../../common/Product/ProductOptionCategories';


const FormAddEditProduct = () => {

    

    return (
        <div className=' flex flex-col w-full h-auto justify-center items-center  shadow-lg bg-white gap-1 dark:bg-big-stone-900 dark:border-bg dark:text-white rounded-r-sm'>
            <span className='my-2 mx-4 font-bold'>Agregar nuevo producto</span>
            <form className='border-t w-full h-full py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-hidden dark:border-big-stone-700'>
                <InputProduct name='Código' type='text' placeholder='Ingrese ID de producto' />
                <InputProduct name='Nombre' type='text' placeholder='Ingrese producto' />
                <InputProduct name='Precio Venta' type='number' placeholder='Precio de venta' />
                <ProductOptionCategories/>
                <InputProduct name='Image' type='file' accept='.png,.jpg'       />
                <InputProduct name='' type='button' clase='bg-blue-700 mt-5 mx-10 hover:bg-blue-600' value='Agregar'/>
                <InputProduct name='' type='hidden' placeholder=''/>
            </form>
        </div>
    );
};




export default FormAddEditProduct;
