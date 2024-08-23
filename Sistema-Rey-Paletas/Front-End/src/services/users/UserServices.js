import axios from "axios"

const CLIENTE_BASE_REST_API_URL = 'http://localhost:8080/api/v3/users';

class UsersService{
    
    getAllUser(ciOrEmail, password){
        return axios.get(`${CLIENTE_BASE_REST_API_URL}/${ciOrEmail}/password/${password}`);
    }

    postUserSave(users){
        return axios.post(CLIENTE_BASE_REST_API_URL, users);
    }
}


export default UsersService;