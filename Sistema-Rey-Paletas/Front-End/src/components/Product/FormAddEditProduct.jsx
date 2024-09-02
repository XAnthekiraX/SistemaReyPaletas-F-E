import { useState } from 'react';
import PropTypes from 'prop-types';
import { InputProduct } from '../../common/Product/ProductInput';
import ProductOptionCategories from '../../common/Product/ProductOptionCategories';
import { getGlobalVariable } from '../../cookies/cookieManajer';
import ProductServices from '../../services/products/productServices';

const FormAddEditProduct = ({ openCard }) => {
    // Estado para el código del producto
    const [codProduct, setCodProduct] = useState("");
    // Estado para el nombre del producto
    const [nameProduct, setNameProduct] = useState("");
    // Estado para el precio del producto
    const [priceProduct, setPriceProduct] = useState();
    // Estado para la categoría del producto
    const [codCategory, setCodCategory] = useState("");
    // Estado para la imagen del producto
    const [image, setImage] = useState("");
    // Obtiene el código de franquicia global
    const codFranchise = getGlobalVariable('codFranchise');

    // Estado para mensajes informativos o de error
    const [message, setMessage] = useState('');
    // Estado para la URL de la imagen subida para previsualización
    const [seeImage, setSeeImage] = useState('');

    // Maneja el cambio de archivo cuando se selecciona una imagen
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    // Maneja el envío del formulario para subir la imagen
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!image) {
            setMessage('Por favor selecciona una imagen primero.');
            return;
        }
        const formData = new FormData();
        formData.append('image', image);

        // Realiza la solicitud al servidor para subir la imagen
        fetch('http://localhost:3001/upload', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.file) {
                    // Construye la URL de la imagen subida para previsualización
                    console.log(data.file.filename);
                    setSeeImage(data.file.filename);
                    setMessage(data.message);
                } else {
                    setMessage(data.message || 'Error desconocido.');
                }
            })
            .catch((error) => {
                console.error('Error al subir la imagen:', error);
                setMessage('Hubo un error al subir la imagen.');
            });
    };

    // Maneja la eliminación de una imagen
    const handleDelete = (filename) => {
        fetch(`http://localhost:3001/delete/${filename}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((data) => {
                setMessage(data.message);
                setSeeImage(''); // Oculta la imagen después de eliminar
            })
            .catch((error) => {
                console.error('Error al eliminar la imagen:', error);
                setMessage('Hubo un error al eliminar la imagen.');
            });
    };

    // Función que maneja la acción de guardar el producto
    const saveProduct = (e) => {
        e.preventDefault();
        handleSubmit(e); // Envia la imagen al servidor
        const productServices = new ProductServices();

        const newProduct = {
            codProduct,
            codFranchise,
            name: nameProduct,
            price: priceProduct,
            codCategory,
            image: seeImage,
        };

        productServices.postSaveProducts(newProduct)
            .then(() => {
                // Si la solicitud es Usuario Registrado Exitosamentesa, limpiar el mensaje de aviso
                console.log('Producto Registrado Exitosamente');
            })
            .catch(error => {
                // Manejo de errores en la solicitud
                if (error.response) {
                    // Error con respuesta del servidor
                    console.log('Error:', error.response.data); // Muestra el mensaje de error del servidor
                    console.log('Status:', error.response.status); // Muestra el código de estado HTTP
                    console.log('Headers:', error.response.headers); // Muestra las cabeceras de la respuesta
                    console.log("Correo o contraseña ya registrado"); // Muestra un mensaje si el correo o la contraseña ya están registrados
                } else if (error.request) {
                    // Error de red o falta de respuesta del servidor
                    console.log('Error de red', error.request); // Muestra el error de la solicitud
                } else {
                    // Otro tipo de error
                    console.log('error'); // Muestra un mensaje de error general
                }
            });
    }

    return (
        <div className='flex flex-col w-full h-auto justify-center items-center shadow-lg bg-white gap-1 dark:bg-big-stone-900 dark:border-bg dark:text-white rounded-r-sm'>
            {message != '' ? <div>{message}</div> : <div></div>}
            <span className='my-2 mx-4 font-bold text'>Agregar nuevo producto</span>
            <form className='border-t w-full h-full p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-hidden dark:border-big-stone-700'>
                {/* Campo para ingresar el código del producto */}
                <InputProduct name='Código' type='text' placeholder='Ingrese ID de producto' value={codProduct} onChangeF={(e) => setCodProduct(e.target.value.toUpperCase())} />
                {/* Campo para ingresar el nombre del producto */}
                <InputProduct name='Nombre' type='text' placeholder='Ingrese producto' value={nameProduct} onChangeF={(e) => setNameProduct(e.target.value.toUpperCase())} />
                {/* Campo para ingresar el precio del producto */}
                <InputProduct name='Precio Venta' type='number' placeholder='Precio de venta' value={priceProduct} onChangeF={(e) => setPriceProduct(e.target.value)} />
                {/* Selector de categoría del producto */}
                <ProductOptionCategories name='Categoria' clase='bg-transparent' openCard={openCard} value={codCategory} onChangeF={(e) => setCodCategory(e.target.value)} />
                {/* Campo para seleccionar una imagen */}

                <div>
                    <img src={`../../../public/images/products/${seeImage}`} alt='0' />
                    <InputProduct name='Image' type='file' accept='.png,.jpg' onChangeF={handleImageChange} />
                </div>
                {/* Botón para agregar el producto */}
                <InputProduct name='' type='button' clase='bg-blue-700 text-white dark:bg-blue-400 mt-5 mx-10 hover:bg-blue-600 col-span-2' value='Agregar' onClickF={saveProduct} />
            </form>
        </div>
    );
};

// Definición de los tipos de propiedades que espera el componente
FormAddEditProduct.propTypes = {
    openCard: PropTypes.func,
}

export default FormAddEditProduct;
