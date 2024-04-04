import instance from '@/utils/axiosInstance.js';

export const putProductAPI = () => {

    const setCategoryDefault = async (product_id, product_category_id) => {
        await instance.post('/productDetail/setCategoryDefault', { 
            product_id: product_id,
            product_category_id: product_category_id
         }, {
            Headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            console.log(res);
            alert("카테고리 기본값 설정 성공");
            return res;
        })
        .catch((err) => {
            console.error(err);
            return null;
        }
    }
    return { setCategoryDefault };
}