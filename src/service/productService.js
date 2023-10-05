import Axios from 'axios';
const API_URL = 'https://fakestoreapi.com/products/';

const getProducts = async () => {
    try {
        const response = await Axios.get(API_URL)
        return response.data
    } catch (err) {
        throw err.message
    }
}

const deleteProduct = async (idProduct) => {
    try {
        const response = await Axios.delete(API_URL + idProduct)
        return response.data
    } catch (err) {
        throw err.message
    }
}

const addProduct = async () => {
    try {
        const response = await Axios.post(API_URL)
        return response.data
    } catch (err) {
        throw err.message
    }
}

export default { getProducts, deleteProduct, addProduct }