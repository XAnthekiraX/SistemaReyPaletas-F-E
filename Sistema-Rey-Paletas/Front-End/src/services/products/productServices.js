import axios from "axios";

const CLIENTE_BASE_REST_API_URL = 'http://localhost:8080/api/v3/products';

class ProductServices {

    // Obtener todos los productos por código de franquicia
    getAllProducts(codFranchise) {
        return axios.get(`${CLIENTE_BASE_REST_API_URL}/${codFranchise}`);
    }

    // Guardar un nuevo producto
    postSaveProducts(product) {
        return axios.post(CLIENTE_BASE_REST_API_URL, product);
    }

    // Eliminar un producto por código
    deleteProducts(codProduct) {
        return axios.delete(`${CLIENTE_BASE_REST_API_URL}/${codProduct}`);
    }

    // Buscar productos por nombre y código de franquicia
    searchProductsByName(codFranchise, productName) {
        return axios.get(`${CLIENTE_BASE_REST_API_URL}/searchByName`, {
            params: {
                codFranchise: codFranchise,
                productName: productName
            }
        });
    }

    // Actualizar un producto existente con código de franquicia
    updateProduct(codFranchise, codProduct, productDetails) {
        return axios.put(`${CLIENTE_BASE_REST_API_URL}/${codFranchise}/${codProduct}`, productDetails);
    }
}

export default ProductServices;
