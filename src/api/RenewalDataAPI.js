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

    const enrollPictorialProduct = async (formData) => {
        return await instance.post('/main/pictorial/enroll', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res) => {
            alert("화보 등록 성공");
            return res;
        })
        .catch((err) => {
            console.error(err);
            return null;
        });
    }
    const enrollBestProduct = async (formData) => {
        return await instance.post('/main/best/enroll', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res) => {
            alert("베스트 상품 등록 성공");
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

    const getMainPictorialList = async () => {
        return await instance.get("/main/get/pictorialProduct")
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.error(err);
                return err;
            });
    }
    const getMainBestList = async () => {
        return await instance.get("/main/get/bestProduct")
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.error(err);
                return err;
            });
    }


    return {
        enrollProduct,
        enrollPictorialProduct,
        enrollBestProduct,
        getProductAllList,
        getProductListById,
        getMainBestList,
        getMainPictorialList,
    };
}