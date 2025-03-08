import axios from "axios"

const CLIENTE_BASE_REST_API_URL = 'http://localhost:8080/api/v3/category';

class CategoryService{
    
    getAllCategory(codFranchise){
        return axios.get(`${CLIENTE_BASE_REST_API_URL}/${codFranchise}`);
    }

    postUserSave(category){
        return axios.post(CLIENTE_BASE_REST_API_URL, category);
    }
}


export default CategoryService;