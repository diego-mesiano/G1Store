import axios from 'axios';

const apiProdutos = axios.create({
    baseURL: "http://g1store-env-2.eba-j4xpiapi.us-east-1.elasticbeanstalk.com"
    
});

export default apiProdutos;