import { Garbage, Edit } from '../../images/icons/Icons';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ProductServices from '../../services/products/productServices';
import { getGlobalVariable } from '../../cookies/cookieManajer';

export default function TableProduct({ onClickEdit, shouldReload, tableReload }) {
    // Estados para manejar la lista de productos y otras funcionalidades
    const [listProducts, setListProducts] = useState([]);
    const [cardDelete, setCardDelete] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({ filename: '', codProduct: '' });


    // Función para obtener productos
    const fetchProducts = () => {
        const codFranchise = getGlobalVariable("codFranchise");
        const productServices = new ProductServices();

        productServices.getAllProducts(codFranchise)
            .then(response => {
                setListProducts(response.data); // Guardar la lista de productos obtenida
            })
            .catch(error => {
                console.error('Error al obtener productos:', error);
            });
    };
    // useEffect para cargar los productos al montar el componente o cuando cambie 'shouldReload'
    useEffect(() => {
        fetchProducts();
    }, [shouldReload]);
    // Función para eliminar un producto de la base de datos
    const deleteProduct = (codProduct) => {
        const productServices = new ProductServices();

        productServices.deleteProducts(codProduct)
            .then(response => {
                console.log('Producto eliminado:', response);
                tableReload()// Recargar los productos
            })
            .catch(error => {
                console.error('Error al eliminar el producto:', error);
            });
    };
    // Manejo de la eliminación del producto e imagen asociados
    const handleDelete = (filename, codProduct) => {
        fetch(`http://localhost:3001/delete/${filename}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                deleteProduct(codProduct); // Eliminar producto de la base de datos
                toggleCardDelete(); // Ocultar tarjeta de confirmación
            })
            .catch(error => {
                console.error('Error al eliminar la imagen:', error);
            });
    };
    // Mostrar/ocultar la tarjeta de confirmación de eliminación
    const toggleCardDelete = (filename = '', codProduct = '') => {
        setSelectedProduct({ filename, codProduct }); // Establecer el producto seleccionado
        setCardDelete(prevState => !prevState); // Alternar visibilidad de la tarjeta
    };
    const CardConfirmDelete = ({ filename, codProduct }) => {
        return (
            <div className='absolute w-full h-full bg-opacity-50 top-0 left-0 flex flex-col justify-center items-center select-none'>
                <div className='bg-white dark:bg-big-stone-700 rounded-lg p-4 gap-2 flex flex-col justify-center items-center w-auto border shadow-lg h-auto text-black dark:text-white'>
                    <h1 className='text-xl font-bold'>¿Seguro que deseas eliminar el producto?</h1>
                    <div className='gap-3 grid grid-cols-2 mt-3'>
                        <div className='border p-2 rounded-lg text-center bg-green-500' onClick={() => handleDelete(filename, codProduct)}>Confirmar</div>
                        <div className='border p-2 rounded-lg text-center bg-red-500' onClick={toggleCardDelete}>Cancelar</div>
                    </div>
                </div>
            </div>
        );
    };
    CardConfirmDelete.propTypes = {
        filename: PropTypes.string.isRequired,
        codProduct: PropTypes.string.isRequired,
    };


    return (
        <div className="w-full font-sans flex flex-col bg-white shadow-lg border px-4 py-5 gap-4 dark:bg-big-stone-900 dark:border-big-stone-700 dark:text-white z-0">
            {cardDelete && <CardConfirmDelete filename={selectedProduct.filename} codProduct={selectedProduct.codProduct} />}
            <span className="text-2xl ml-8 font-bold">Productos</span>
            {listProducts.length === 0 ? (
                <h1 className="text-center text-xl">No hay productos agregados</h1>
            ) : (
                <table className='grid grid-rows-1 w-full'>
                    <thead className="p-2 bg-big-stone-50 text-big-stone-800 font-light dark:bg-big-stone-700">
                        <tr className='w-full grid grid-cols-5 font-light dark:text-big-stone-300'>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Categoría</th>
                            <th>Código</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody className='overflow-hidden overflow-y-auto h-[36rem] mb-20'>
                        {listProducts.map((product, index) => (
                            <tr key={index} className='grid grid-cols-5 border-b dark:border-big-stone-700 p-2'>
                                <td className='grid grid-cols-1 sm:grid-cols-2 items-center gap-5'>
                                    <img src={`../../../public/images/products/${product.image}`} alt='Producto' className='rounded-lg w-20 h-auto' />
                                    <span className='text-center'>{product.name}</span>
                                </td>
                                <td className='flex justify-center items-center text-green-400'>${product.price}</td>
                                <td className='flex justify-center items-center text-blue-400'>{product.codCategory}</td>
                                <td className='flex justify-center items-center text-blue-400'>{product.codProduct}</td>
                                <td className='flex justify-center items-center text-blue-400 gap-3'>
                                    <div onClick={() => toggleCardDelete(product.image, product.codProduct)} className='p-2 rounded-full hover:border'>
                                        <Garbage classname="text-red-500" />
                                    </div>
                                    <div className='p-2 rounded-full hover:border' onClick={() => onClickEdit(product.image, product.name, product.price, product.codCategory, product.codProduct)}>
                                        <Edit classname="text-blue-500" />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

// Definición de los tipos de propiedades para los íconos
Garbage.propTypes = {
    classname: PropTypes.string,
};

Edit.propTypes = {
    classname: PropTypes.string,
};

TableProduct.propTypes = {
    onClickEdit: PropTypes.func,
    shouldReload: PropTypes.bool,
    tableReload: PropTypes.func,
}