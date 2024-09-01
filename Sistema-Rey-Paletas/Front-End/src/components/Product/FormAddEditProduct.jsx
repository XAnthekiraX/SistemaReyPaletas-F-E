import { useState } from 'react';
import PropTypes from 'prop-types';
import { InputProduct } from '../../common/Product/ProductInput';
import ProductOptionCategories from '../../common/Product/ProductOptionCategories';
import { getGlobalVariable } from '../../cookies/cookieManajer';


const FormAddEditProduct = ({openCard}) => {
    // Estado para controlar el aviso
    // const [aviso, setaviso] = useState("");

    const [codProduct, setCodProduct] = useState("");
    const [nameProduct, setNameProduct] = useState("");
    const [priceProduct, setPriceProduct] = useState();
    const [codCategory, setCodCategory] = useState("");
    const [imageProduct, setImageProduct] = useState("");
    const codFranchise = getGlobalVariable('codFranchise')

    const saveProduct=(e)=>{
        e.preventDefault();

        const newProduct ={
            codProduct,
            codFranchise,
            name:nameProduct,
            price:priceProduct,
            codCategory,
            image:imageProduct,
        }
        console.log(newProduct);
        
    }

    return (
        <div className=' flex flex-col w-full h-auto justify-center items-center shadow-lg bg-white gap-1 dark:bg-big-stone-900 dark:border-bg dark:text-white rounded-r-sm'>
            <span className='my-2 mx-4 font-bold text'>Agregar nuevo producto</span>
            <form className='border-t w-full h-full p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-hidden dark:border-big-stone-700'>
                <InputProduct name='Código' type='text' placeholder='Ingrese ID de producto' value={codProduct} onChangeF={(e)=>setCodProduct(e.target.value.toUpperCase())}/>
                <InputProduct name='Nombre' type='text' placeholder='Ingrese producto' value={nameProduct} onChangeF={(e)=>setNameProduct(e.target.value.toUpperCase())}/>
                <InputProduct name='Precio Venta' type='number' placeholder='Precio de venta' value={priceProduct} onChangeF={(e)=>setPriceProduct(e.target.value.toUpperCase())}/>
                <ProductOptionCategories name='Categoria' clase='bg-transparent' openCard={openCard} value={codCategory} onChangeF={(e)=>setCodCategory(e.target.value)}/>
                <InputProduct name='Image' type='file' accept='.png,.jpg' onChangeF={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                        setImageProduct(file.name); // Guardar solo el nombre del archivo
                    }
                }} />
                <InputProduct name='' type='button' clase='bg-blue-700 text-white dark:bg-blue-400 mt-5 mx-10 hover:bg-blue-600 col-span-2' value='Agregar' onClickF={saveProduct}/>
            </form>
        </div>
    );
};

FormAddEditProduct.propTypes={
    openCard:PropTypes.func,
}


export default FormAddEditProduct;
