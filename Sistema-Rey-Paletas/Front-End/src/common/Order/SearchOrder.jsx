import PropTypes from 'prop-types'; // Importa PropTypes para validar los tipos de propiedades de los componentes.
import { useState } from 'react'; // Importa useState de React para manejar el estado de los componentes.

// Componente para el ícono de más (+)
const PLusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14m-7-7h14" />
    </svg>
);

// Componente para el ícono de menos (-)
const MinusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
        <path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8" />
    </svg>
);

// Componente que muestra la lista de productos disponibles para seleccionar
const ProductViewList = ({ name, price, onClick }) => (
    <li className='flex w-full justify-between px-10 hover:bg-big-stone-400 dark:bg-big-stone-800 my-1 dark:text-white dark:hover:bg-white dark:hover:text-black rounded-sm'
        onClick={onClick}>
        <span>{name}</span> {/* Muestra el nombre del producto */}
        <span>{price}</span> {/* Muestra el precio del producto */}
    </li>
);

// Definición de los tipos de propiedades para ProductViewList
ProductViewList.propTypes = {
    name: PropTypes.string.isRequired, // El nombre debe ser una cadena y es obligatorio
    price: PropTypes.number.isRequired, // El precio debe ser un número y es obligatorio
    onClick: PropTypes.func.isRequired // onClick debe ser una función y es obligatorio
};

// Componente que muestra los productos seleccionados con botones para incrementar o decrementar la cantidad
const ProductOrder = ({ name, count, onIncrement, onDecrement }) => (
    <li className='w-full grid grid-cols-3 dark:text-white'>
        <span className='border w-full flex justify-center items-center'>{name}</span> {/* Muestra el nombre del producto seleccionado */}
        <div className='border flex justify-center items-center gap-3'>
            <div className='p-1 rounded-full border border-black dark:border-white' onClick={onDecrement}>
                <MinusIcon /> {/* Botón para decrementar la cantidad */}
            </div>
            <span>{count}</span> {/* Muestra la cantidad actual del producto */}
            <div className='p-1 rounded-full border border-black dark:border-white' onClick={onIncrement}>
                <PLusIcon /> {/* Botón para incrementar la cantidad */}
            </div>
        </div>
        <span className='border w-full justify-center items-center text-center dark:text-white'>1</span>
    </li>
);

// Definición de los tipos de propiedades para ProductOrder
ProductOrder.propTypes = {
    name: PropTypes.string.isRequired, // El nombre debe ser una cadena y es obligatorio
    count: PropTypes.number.isRequired, // La cantidad debe ser un número y es obligatorio
    onIncrement: PropTypes.func.isRequired, // onIncrement debe ser una función y es obligatorio
    onDecrement: PropTypes.func.isRequired // onDecrement debe ser una función y es obligatorio
};

// Datos de ejemplo de los productos disponibles
const ProductData = [
    { name: 'Choco Menta', price: 1.60 },
    { name: 'Choco Trufa', price: 1.60 },
    { name: 'Mix Fruta', price: 2.1 },
    { name: 'Mango sal', price: 0.50 }
];

// Componente principal que maneja la búsqueda y selección de productos
export default function SearchOrder({ onClose }) {
    const [search, setSearch] = useState(''); // Estado para el texto de búsqueda
    const [selectedProducts, setSelectedProducts] = useState([]); // Estado para los productos seleccionados

    // Filtra los productos basándose en el texto de búsqueda
    const filteredProducts = ProductData.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    // Maneja el evento de clic en un producto para agregarlo a la lista de seleccionados
    const handleProductClick = (product) => {
        setSelectedProducts(prevSelected => {
            // Si el producto ya está en la lista, no lo agregamos nuevamente
            if (prevSelected.some(item => item.name === product.name)) {
                return prevSelected;
            }
            // Agrega el producto con una cantidad inicial de 1
            return [...prevSelected, { ...product, count: 1 }];
        });
    };

    // Incrementa la cantidad de un producto en la lista de seleccionados
    const incrementCount = (index) => {
        setSelectedProducts(prevSelected => {
            const newSelected = [...prevSelected];
            newSelected[index].count += 1;
            return newSelected;
        });
    };

    // Decrementa la cantidad de un producto en la lista de seleccionados
    const decrementCount = (index) => {
        setSelectedProducts(prevSelected => {
            const newSelected = [...prevSelected];
            // Asegura que la cantidad mínima sea 1
            newSelected[index].count = Math.max(1, newSelected[index].count - 1);
            return newSelected;
        });
    };

    return (
        <div className="w-full flex flex-col gap-3">
            <div className="w-full flex flex-col relative items-center">
                <div className='w-full flex relative items-center'>
                    <svg className="absolute text-gray-500 mx-2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39M11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7" />
                    </svg>
                    <input
                        className="w-full pl-8 py-3 border rounded-lg bg-transparent outline-none focus:outline-blue-500"
                        type="search"
                        placeholder="Buscar Producto"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} // Actualiza el texto de búsqueda en el estado
                    />
                </div>
                <ul className='w-full h-auto'>
                    {/* Muestra la lista de productos filtrados */}
                    {filteredProducts.map((item, index) => (
                        <ProductViewList
                            name={item.name}
                            price={item.price}
                            key={index}
                            onClick={() => handleProductClick(item)} // Llama a handleProductClick cuando se hace clic en un producto
                        />
                    ))}
                </ul>
            </div>
            <ul className='w-full h-auto'>
                {/* Muestra la lista de productos seleccionados con sus cantidades */}
                {selectedProducts.map((item, index) => (
                    <ProductOrder
                        key={index}
                        name={item.name}
                        count={item.count}
                        onIncrement={() => incrementCount(index)} // Llama a incrementCount cuando se incrementa la cantidad
                        onDecrement={() => decrementCount(index)} // Llama a decrementCount cuando se decrementa la cantidad
                    />
                ))}
            </ul>
            <div className="w-full flex justify-evenly dark:text-white">
                {/* Botones para guardar o cancelar */}
                <div className="bg-green-400 p-2 rounded-lg hover:bg-green-500" onClick={onClose}>Guardar</div>
                <div className="bg-red-400 p-2 rounded-lg hover:bg-red-500" onClick={onClose}>Cancelar</div>
            </div>
        </div>
    );
}

// Definición de los tipos de propiedades para SearchOrder
SearchOrder.propTypes = {
    onClose: PropTypes.func.isRequired // onClose debe ser una función y es obligatorio
};
