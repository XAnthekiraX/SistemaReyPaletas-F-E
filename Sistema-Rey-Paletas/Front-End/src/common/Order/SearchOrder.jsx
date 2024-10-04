import PropTypes from 'prop-types'; // Importación para la validación de tipos de las props.
import { useEffect, useState } from 'react'; // Importación de 'useState' de React para manejar el estado en componentes funcionales.
import ProductServices from '../../services/products/productServices'; // Servicio personalizado para obtener productos.
import { getGlobalVariable } from '../../cookies/cookieManajer'; // Función para obtener variables globales guardadas en las cookies.
import { ProductViewList } from './ProductListView';
import { ProductOrder } from './ProductOrder';


// Componente principal que maneja la búsqueda y selección de productos en un pedido.
export default function SearchOrder({ onClose }) {
    const [search, setSearch] = useState(''); // Estado para manejar el texto de búsqueda.
    const [selectedProducts, setSelectedProducts] = useState([]); // Estado para manejar la lista de productos seleccionados.
    const [listProducts, setListProducts] = useState([]); // Estado para manejar la lista de productos disponibles.
    const [totalValue, setTotalValue] = useState(0);
    console.log(selectedProducts);

    // Llama al servicio para obtener todos los productos de la franquicia.
    useEffect(() => {
        const productServices = new ProductServices(); // Crea una instancia del servicio de productos.
        const codFranchise = getGlobalVariable('codFranchise'); // Obtiene el código de la franquicia de las cookies.
        productServices.getAllProducts(codFranchise)
            .then(response => {
                setListProducts(response.data); // Almacena los productos obtenidos en el estado.
                setTotalValue(response.data.price)
            })
            .catch(error => {
                console.error('Error al obtener productos:', error); // Muestra un error en caso de que falle la petición.
            });
    }, []);

    // Filtra los productos según el texto de búsqueda ingresado.
    const filteredProducts = listProducts.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    // Maneja la selección de un producto de la lista de búsqueda.
    const handleProductClick = (product) => {
        setSelectedProducts(prevSelected => {
            if (prevSelected.some(item => item.name === product.name)) {
                return prevSelected; // Si el producto ya está seleccionado, no lo agrega de nuevo.
            }
            return [...prevSelected, { ...product, count: 1 }]; // Agrega el producto seleccionado con una cantidad inicial de 1.
        });
    };

    // Incrementa la cantidad de un producto seleccionado.
    const incrementCount = (index) => {
        setSelectedProducts(prevSelected => {
            const newSelected = [...prevSelected];
            newSelected[index].count += 1; // Aumenta la cantidad del producto en 1.
            return newSelected;
        });
    };

    // Decrementa la cantidad de un producto seleccionado.
    const decrementCount = (index) => {
        setSelectedProducts(prevSelected => {
            const newSelected = [...prevSelected];
            newSelected[index].count = Math.max(1, newSelected[index].count - 1); // Reduce la cantidad pero no permite que sea menor a 1.
            return newSelected;
        });
    };

    const closeCard =()=>{
        onClose();
        setSelectedProducts([]);
        setSearch('');
    }
    return (
        <div className="w-full flex flex-col gap-3">
            {/* Input de búsqueda de productos */}
            <div className="w-full flex flex-col relative items-center">
                <div className='w-full flex relative items-center'>
                    {/* Icono de búsqueda */}
                    <svg className="absolute text-gray-500 mx-2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39M11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7" />
                    </svg>
                    {/* Input de texto para la búsqueda */}
                    <input
                        className="w-full pl-8 py-3 border rounded-lg bg-transparent outline-none focus:outline-blue-500 dark:text-white"
                        type="search"
                        placeholder="Buscar Producto"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} // Actualiza el estado 'search' conforme se escribe.
                    />
                </div>

                {/* Muestra la lista de productos filtrados solo si hay texto en la búsqueda */}
                {search && (
                    <ul className='w-full h-auto'>
                        {filteredProducts.map((item, index) => (
                            <ProductViewList
                                name={item.name}
                                price={item.price}
                                key={index}
                                onClick={() => handleProductClick(item)} // Manejador de clic para seleccionar un producto.
                            />
                        ))}
                    </ul>
                )}
            </div>

            {/* Lista de productos seleccionados para el pedido */}
            <ul className='w-full h-auto'>
                {selectedProducts.map((item, index) => (
                    <ProductOrder
                        key={index}
                        name={item.name}
                        count={item.count}
                        totalAmount={item.count * totalValue}
                        onIncrement={() => incrementCount(index)} // Manejador para incrementar la cantidad.
                        onDecrement={() => decrementCount(index)} // Manejador para decrementar la cantidad.
                    />
                ))}
            </ul>

            {/* Botones para guardar o cancelar la selección */}
            <div className="w-full flex justify-evenly dark:text-white">
                <div className="bg-green-400 p-2 rounded-lg hover:bg-green-500" onClick={closeCard}>Guardar</div> {/* Botón para guardar */}
                <div className="bg-red-400 p-2 rounded-lg hover:bg-red-500" onClick={closeCard}>Cancelar</div> {/* Botón para cancelar */}
            </div>
        </div>
    );
}

// Definición de los tipos de las props para 'SearchOrder'
SearchOrder.propTypes = {
    onClose: PropTypes.func.isRequired, // 'onClose' debe ser una función requerida.
};
