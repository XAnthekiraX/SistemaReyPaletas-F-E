import axios from "axios"

const CLIENTE_BASE_REST_API_URL = 'http://localhost:8080/api/v3/franchises';

class FranchisesService {
    getAllFranchise() {
        return axios.get(`${CLIENTE_BASE_REST_API_URL}`);
    }
}


export default FranchisesService;