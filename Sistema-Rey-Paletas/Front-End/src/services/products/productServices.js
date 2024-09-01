import axios from "axios"

const CLIENTE_BASE_REST_API_URL = 'http://localhost:8080/api/v3/products';

class UsersService{
    
    getAllProducts(codFranchise){
        return axios.get(`${CLIENTE_BASE_REST_API_URL}/${codFranchise}`);
    }

    postSaveProducts(products){
        return axios.post(CLIENTE_BASE_REST_API_URL, products);
    }
}


export default UsersService;