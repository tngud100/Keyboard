import instance from '@/utils/axios.js';


export const getProductList = () => {
    return instance.get('/product/get')
    .then((res) => {
        console.log(res.data);
        return res.data;
    })
    .catch((err) => {
        console.error(err);
        return null;
    });
};

export const getProductDetailList = (productId) => {
    return instance.get(`/product/${productId}/productDetail/get`)
    .then((res) => {
        console.log(res.data);
        return res.data;
    })
    .catch((err) => {
        console.error(err);
        return null;
    });
};
