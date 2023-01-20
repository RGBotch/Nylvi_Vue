const API_BASE_URL = 'http://127.0.0.1:8000/api';

const getProductsFromApi = async function() {
    const data = await fetch(API_BASE_URL+'/products')
    let returnable = await data.json()
    return returnable;
}

export { getProductsFromApi }