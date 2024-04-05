import instance from '@/utils/axiosInstance.js';

export const deleteProductAPI = () => {

    const deleteProductCategory = async (product_category_id) => {
        return await instance.delete(`/productCategory/${product_category_id}/delete`,{}, { 
            params: {
                product_category_id: product_category_id
            }
         }, {
            Headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            console.log(res);
            alert("카테고리 삭제 성공");
            return true;
        })
        .catch((err) => {
            console.error(err);
            alert("전송 실패");
            return false;
        })
    }



    return { deleteProductCategory };
}