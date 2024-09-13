import { useState } from "react";
import FormAddEditProduct from "../components/Product/FormAddEditProduct";
import TableProduct from "../components/Product/TableProduct";
import CardNewCategory from "../common/Product/CardNewCategory";

const Product = () => {
    const [openCard, setOpenCard] = useState(false);

    const handleClickCard=()=>{
        setOpenCard(prevState => !prevState)
    }
    return (
        <div className="h-screen  gap-5 w-full flex overflow-hidden overflow-y-auto p-1 lg:p-7 relative">
            <div className={`${openCard ? 'w-full h-full' : 'w-0 h-0'} bg-black  left-0 top-0 absolute  overflow-hidden flex justify-center items-center bg-opacity-50`}>
                <CardNewCategory closeCard={handleClickCard}/>
            </div>
            <div>
                <FormAddEditProduct openCard={handleClickCard}/>
                <TableProduct/>
            </div>
        </div>
    );
};

export default Product;
