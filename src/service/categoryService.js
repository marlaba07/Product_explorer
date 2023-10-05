import Axios from 'axios';
const API_URL = 'https://fakestoreapi.com/products/categories/'

const getCategories = async () => {
    try {
        const response = await Axios.get(API_URL)
        return response.data
    } catch (err) {
        throw err.message
    }
}

export default { getCategories }