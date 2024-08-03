import FormAddEditProduct from "../components/Product/FormAddEditProduct";
import TableProduct from "../components/Product/TableProduct";

const Product = () => {
    return (
        <div className="h-full gap-5 w-full flex overflow-hidden overflow-y-auto p-1 lg:p-7">
            <div>
                <FormAddEditProduct/>
                <TableProduct/>
            </div>
        </div>
    );
};

export default Product;
