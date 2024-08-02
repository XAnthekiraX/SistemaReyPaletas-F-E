
const ProductOptionCategories = () => {

    const categorias =[
        {
            nombre:"Cat1",
        },
        {
            nombre:"Cat2"
        },
        {
            nombre:"Cat3"
        }
    ]

    return (

        <div className="w-auto h-[4.7rem] rounded-lg gap-2 mx-3 mt-2 flex flex-col justify-center items-start">
            <span className="mx-2 text-sm font-semibold">Categoría</span>
            <select className="w-full h-full border rounded-lg px-2 bg-transparent text-gray-400 focus:ring-2 focus:ring-inset dark:border-big-stone-700 focus:ring-blue-400">
                {
                    categorias.map((item, index)=>{
                        return(
                            <option key={index} className="text-gray-600 bg-white">{item.nombre}</option>
                        )
                    })
                }
            </select>
        </div>
    );
};


export default ProductOptionCategories;
