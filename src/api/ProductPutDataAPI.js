import instance from '@/utils/axiosInstance.js';

export const putProductAPI = () => {

    const setCategoryDefault = async (product_id, product_category_id) => {
        await instance.put('/productDetail/setCategoryDefault',{}, { 
            params: {
                product_id: product_id,
                product_category_id: product_category_id
            }
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
            alert(err.response.data);
            return null;
        })
    }

    const updateProductCategory = async (product_id, product_category_id, category_name) => {
        await instance.put(`/product/${product_id}/category/update`,{}, { 
            params: {
                product_id: product_id,
                product_category_id: product_category_id,
                category_name: category_name
            }
         }, {
            Headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            console.log(res);
            alert("카테고리 이름 설정 성공");
            return res;
        })
        .catch((err) => {
            alert(err.response.data);
            return null;
        })
    }


    return { setCategoryDefault, updateProductCategory };
}