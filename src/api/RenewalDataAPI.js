import instance from '@/utils/axiosInstance.js';

export const renewalDataAPI = () => {
    const enrollProduct = async (formData) => {
        return await instance.post('product/enroll', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
         .then((res) => {
            alert("상품 등록 성공");
            return res;
        })
        .catch((err) => {
            console.error(err);
            return null;
        });
    }
    
    const getProductAllList = async () => {
        return await instance.get('/product/get/all')
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.error(err);
                return err;
            });
    }
    const getProductListById = async (product_id) => {
        return await instance.get(`/product/get/${product_id}`)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err;
            });
    }

    return {
        enrollProduct,
        getProductAllList,
        getProductListById,
    };
}