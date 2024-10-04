import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { InputProduct } from '../../common/Product/ProductInput';
import ProductOptionCategories from '../../common/Product/ProductOptionCategories';
import { getGlobalVariable } from '../../cookies/cookieManajer';
import ProductServices from '../../services/products/productServices';

const FormAddEditProduct = ({ openCard, changeEdit, onClickEditOf, updCodProduct = '', updName = '', updPrice = 0, updCategory = '', updImage = '', shouldReload, tableReload }) => {
    // Estado para el código del producto
    const [codProduct, setCodProduct] = useState("");
    // Estado para el nombre del producto
    const [nameProduct, setNameProduct] = useState("");
    // Estado para el precio del producto
    const [priceProduct, setPriceProduct] = useState("");
    // Estado para la categoría del producto
    const [codCategory, setCodCategory] = useState("");
    // Estado para la imagen del producto
    const [image, setImage] = useState("");
    // Obtiene el código de franquicia global
    const codFranchise = getGlobalVariable('codFranchise');
    // Estado para mensajes informativos o de error
    const [message, setMessage] = useState('');
    // Maneja el cambio de archivo cuando se selecciona una imagen
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        // No llamamos aquí directamente a handleSubmit, se hace después de la selección completa
    };
    const resetForm = () => {
        setCodProduct("");
        setNameProduct("");
        setPriceProduct("");
        setCodCategory("");
        setImage(""); // Resetea el estado de la imagen, pero nota que la imagen no se puede borrar completamente del estado si es un archivo.
        setMessage('');
        // setSeeImage('');
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
                    // Guarda el nombre del archivo subido
                    // setSeeImage(data.file.filename);
                    setMessage(data.message);

                    const productServices = new ProductServices();
                    const addProduct = {
                        codProduct,
                        codFranchise,
                        name: nameProduct,
                        price: priceProduct,
                        codCategory,
                        image: data.file.filename,  // Usamos el nombre del archivo subido
                    };

                    productServices.postSaveProducts(addProduct)
                        .then(() => {
                            console.log('Producto Registrado Exitosamente');
                            tableReload()
                        })
                        .catch(error => {
                            console.error('Error al registrar el producto:', error);
                        });

                } else {
                    setMessage(data.message || 'Error desconocido.');
                }
            })
            .catch((error) => {
                console.error('Error al subir la imagen:', error);
                setMessage('Hubo un error al subir la imagen.');
            });

        resetForm();

    };

    useEffect(() => {
        if (changeEdit) {
            // Actualiza los valores de los estados con los valores de las props "upd"
            setCodProduct(updCodProduct);
            setNameProduct(updName);
            setPriceProduct(updPrice);
            setCodCategory(updCategory);
            setImage(updImage);
        }
    }, [changeEdit, updCodProduct, updName, updPrice, updCategory, updImage]);

    const updateProduct = () => {
        // Primera condición: Si image es diferente de updImage y no está vacío
        if (image !== updImage && image) {
            fetch(`http://localhost:3001/delete/${updImage}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);

                    const formData = new FormData();
                    formData.append('image', image);

                    // Subir la nueva imagen
                    fetch('http://localhost:3001/upload', {
                        method: 'POST',
                        body: formData,
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            if (data.file) {
                                setMessage(data.message);

                                const productServices = new ProductServices();
                                const newDataProduct = {
                                    codProduct,
                                    codFranchise,
                                    name: nameProduct,
                                    price: priceProduct,
                                    codCategory,
                                    image: data.file.filename  // Usamos la nueva imagen subida
                                };

                                console.log('Datos a actualizar:', newDataProduct);

                                productServices.updateProduct(codFranchise, codProduct, newDataProduct)
                                    .then(() => {
                                        console.log('Producto Actualizado Exitosamente');
                                        onClickEditOf();
                                        resetForm();
                                        tableReload();
                                    })
                                    .catch(error => {
                                        console.error('Error al Actualizar el producto:', error.response ? error.response.data : error.message);
                                    });

                            } else {
                                setMessage(data.message || 'Error desconocido.');
                            }
                        })
                        .catch((error) => {
                            console.error('Error al subir la imagen:', error);
                            setMessage('Hubo un error al subir la imagen.');
                        });
                })
                .catch(error => {
                    console.error('Error al eliminar la imagen anterior:', error);
                });

            // Segunda condición: Si image es diferente de updImage (no importa si está vacío)
        } else if (image !== updImage) {
            const formData = new FormData();
            formData.append('image', image);

            // Subir la nueva imagen
            fetch('http://localhost:3001/upload', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.file) {
                        setMessage(data.message);

                        const productServices = new ProductServices();
                        const newDataProduct = {
                            codProduct,
                            codFranchise,
                            name: nameProduct,
                            price: priceProduct,
                            codCategory,
                            image: data.file.filename  // Usamos la nueva imagen subida
                        };

                        console.log('Datos a actualizar:', newDataProduct);

                        productServices.updateProduct(codFranchise, codProduct, newDataProduct)
                            .then(() => {
                                console.log('Producto Actualizado Exitosamente');
                                onClickEditOf();
                                resetForm();
                                tableReload();
                            })
                            .catch(error => {
                                console.error('Error al Actualizar el producto:', error.response ? error.response.data : error.message);
                            });

                    } else {
                        setMessage(data.message || 'Error desconocido.');
                    }
                })
                .catch((error) => {
                    console.error('Error al subir la imagen:', error);
                    setMessage('Hubo un error al subir la imagen.');
                });

            resetForm();

            // Tercera condición: Si ninguna de las dos condiciones anteriores se cumple
        } else {
            const productServices = new ProductServices();
            const newDataProduct = {
                codProduct,
                codFranchise,
                name: nameProduct,
                price: priceProduct,
                codCategory,
                image  // No se cambia la imagen
            };

            console.log('Datos a actualizar:', newDataProduct);

            productServices.updateProduct(codFranchise, codProduct, newDataProduct)
                .then(() => {
                    console.log('Producto Actualizado Exitosamente');
                    onClickEditOf();
                    resetForm();
                    tableReload();
                })
                .catch(error => {
                    console.error('Error al Actualizar el producto:', error.response ? error.response.data : error.message);
                });
        }
    };


    return (

        <div className='flex flex-col w-full h-auto justify-center items-center shadow-lg bg-white gap-1 dark:bg-big-stone-900 dark:border-bg dark:text-white rounded-r-sm'>
            {message != '' ? <div>{message}</div> : <div></div>}
            <span className='my-2 mx-4 font-bold text'>Agregar nuevo producto</span>
            <form className='border-t w-full h-full p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-hidden dark:border-big-stone-700' onSubmit={handleSubmit} >
                {/* Campo para ingresar el código del producto */}
                <InputProduct name='Código' type='text' placeholder='Ingrese ID de producto' value={codProduct} onChangeF={(e) => setCodProduct(e.target.value.toUpperCase())} />
                {/* Campo para ingresar el nombre del producto */}
                <InputProduct name='Nombre' type='text' placeholder='Ingrese producto' value={nameProduct} onChangeF={(e) => setNameProduct(e.target.value.toUpperCase())} />
                {/* Campo para ingresar el precio del producto */}
                <InputProduct name='Precio Venta' type='number' placeholder='Precio de venta' value={priceProduct} onChangeF={(e) => setPriceProduct(e.target.value)} />
                {/* Selector de categoría del producto */}
                <ProductOptionCategories name='Categoria' clase='bg-transparent' shouldReload={shouldReload} openCard={openCard} value={codCategory} onChangeF={(e) => setCodCategory(e.target.value)} />
                {/* Campo para seleccionar una imagen */}

                <div className={`${changeEdit ? 'grid grid-cols-2 col-span-2' : ''}`}>
                    {changeEdit ? <img src={`../../../public/images/products/${updImage}`} alt='Producto' className='rounded-lg w-20 h-auto m-auto' /> : <div></div>}
                    <InputProduct name='Imagen' type='file' accept='.png,.jpg' onChangeF={handleImageChange} clase={'grid col-span-3'} />
                </div>
                {/* Botón para agregar el producto */}
                {
                    changeEdit == false ? <InputProduct name='' type='submit' clase='bg-blue-700 text-white dark:bg-blue-400 mt-5 mx-10 hover:bg-blue-600 col-span-2' value='Agregar' /> : <InputProduct name='' type='button' clase='bg-blue-700 text-white dark:bg-blue-400 mt-5 mx-10 hover:bg-blue-600 col-span-2' value='Editar' onClickF={updateProduct} />

                }

            </form>
        </div>
    );
};

// Definición de los tipos de propiedades que espera el componente
FormAddEditProduct.propTypes = {
    openCard: PropTypes.func,
    changeEdit: PropTypes.bool,
    onClickEditOf: PropTypes.func,
    updCodProduct: PropTypes.string,
    updName: PropTypes.string,
    updPrice: PropTypes.PropTypes.number,
    updCategory: PropTypes.string,
    updImage: PropTypes.string,
    tableReload:PropTypes.func,
    shouldReload:PropTypes.func,
}

export default FormAddEditProduct;
