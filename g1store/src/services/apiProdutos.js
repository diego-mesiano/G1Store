import axios from 'axios';

const apiProdutos = axios.create({
    baseUrl: "",
});

export default apiProdutos;