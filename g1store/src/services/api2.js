import axios from 'axios';

const api2 = axios.create({
    baseURL: "https://backend-g1store.herokuapp.com"
    
    
});

export default api2;