import { useState } from "react";
import FormAddEditProduct from "../components/Product/FormAddEditProduct";
import TableProduct from "../components/Product/TableProduct";
import CardNewCategory from "../common/Product/CardNewCategory";

const Product = () => {
    const [openCard, setOpenCard] = useState(false);
    const [changeFormEdit, setChangeFormEdit] = useState(false);
    const [selectedUpdatedProducts, setSelectedUpdatedProducts] = useState({ image: '', name: '', price:0, codCategory:'', codProduct:'' });
    const [shouldReload, setShouldReload] = useState(false);

    const hancleClickEditOn=(image= '', name= '', price='', codCategory='', codProduct='')=>{
        setChangeFormEdit(true)
        setSelectedUpdatedProducts({image, name, price, codCategory, codProduct})
    }

    const handleClickReaload=()=>{
        setShouldReload(prevState=>!prevState)
    }

    const hancleClickEditOff=()=>{
        setChangeFormEdit(false)
    }


    const handleClickCard=()=>{
        setOpenCard(prevState =>!prevState)
    }
    return (
        <div className="h-screen  gap-5 w-full flex overflow-hidden overflow-y-auto p-1 lg:p-7 relative">
            <div className={`${openCard ? 'w-full h-full' : 'w-0 h-0'} bg-black  left-0 top-0 absolute  overflow-hidden flex justify-center items-center bg-opacity-50`}>
                <CardNewCategory closeCard={handleClickCard} categoryReload={handleClickReaload}/>
            </div>
            <div>
                <FormAddEditProduct openCard={handleClickCard} shouldReload={shouldReload} tableReload={handleClickReaload} changeEdit={changeFormEdit} onClickEditOf={hancleClickEditOff} updCategory={selectedUpdatedProducts.codCategory} updCodProduct={selectedUpdatedProducts.codProduct} updName={selectedUpdatedProducts.name} updPrice={selectedUpdatedProducts.price} updImage={selectedUpdatedProducts.image}/>
                <TableProduct onClickEdit={hancleClickEditOn} shouldReload={shouldReload} tableReload={handleClickReaload}/>
            </div>
        </div>
    );
};

export default Product;
