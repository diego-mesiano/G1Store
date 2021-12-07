import axios from 'axios';

const apiProdutos = axios.create({
    baseUrl: "http://g1store-env.eba-6ip9x9tb.us-east-1.elasticbeanstalk.com"
});

export default apiProdutos;