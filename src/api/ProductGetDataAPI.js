// utils/axiosInstance.js 파일에서 instance 가져오기
import instance from '@/utils/axiosInstance.js';
import { ref } from 'vue';

// getProductAPI 함수 정의
export const getProductAPI = () => {
    // productList와 productDetail을 ref로 생성
    const productList = ref([]);
    const productDetail = ref([]);

    const backendCall = (url) => {
        if (Array.isArray(url)) {
            return url.map(url => `http://localhost:8080${url.trim()}`);
        }
        return `http://localhost:8080${url}`
    };

    const logicCheck = (state) => {
        if (state === 1) {
            return true;
        }
        return false;
    };

    // getProductList 함수 정의
    const getProductList = async () => {
        return instance.get('/product/get')
            .then((res) => {
                productList.value = [];
                if (res.data === null) {
                    return 'No data';
                }
                Promise.all(res.data.map(async (item) => {
                    await getProductDetailList(item.product_id);
                    productList.value.push({
                        productId: item.product_id,
                        mainImg: item.main_picture,
                        representImg: backendCall(item.represent_picture),
                        representImgName: item.represent_picture_name,
                        listImg: backendCall(item.list_picture),
                        listImgName: item.list_picture_name,
                        listBackImg: backendCall(item.list_back_picture),
                        listBackImgName: item.list_back_picture_name,
                        descImg: backendCall(item.desc_picture),
                        descImgName: item.desc_picture_name,
                        mainPicState: item.main_pic_state,
                        name: item.name,
                        type: item.type,
                        amount: item.amount,
                        createDate: item.create_date,
                        modifiedDate: item.modified_date,
                        detailList: productDetail.value.filter(detail => detail.productDetailList.productId === item.product_id), // productId === productDetail.productId가 같을시 데이터 삽입
                    });
                }))
                return productList;
            })
            .catch((err) => {
                console.error(err);
                return null;
            });
    };

    // getProductDetailList 함수 정의
    const getProductDetailList = (productId) => {
        return instance.get(`/product/${productId}/productDetail/get`)
            .then((res) => {
                productDetail.value = [];
                if (res.data === null) {
                    return 'No data';
                }

                res.data.forEach((item) => {
                    productDetail.value.push({
                        productDetailList: {
                            productDetailId: item.product_detail_id,
                            productId: item.product_id,
                            productCategoryId: item.product_category_id,
                            category: item.category_name,
                            name: item.name,
                            amount: item.amount,
                            default: item.default_state,
                            stock: item.stock,
                            soldStock: item.sold_stock,
                            faultyState: item.faulty_state,
                            createDate: item.create_date,
                            modifiedDate: item.modified_date,
                            isDelete: item.isdelete,
                        },
                    });
                });
                return productDetail;
            })
            .catch((err) => {
                console.error(err);
                return null;
            });
    };


    const getProductCategoryList = async (productId) => {
        return instance.get(`/product/${productId}/category/get`)
        .then((res) => {
            const data = res.data;
            const productCategoryList = [];

            if (data === null) {
                return 'No data';
            }

            data.forEach((item) => {
                productCategoryList.push({
                    productId: item.product_id,
                    productCategoryId: item.product_category_id,
                    categoryName: item.category_name,
                    isDefault: logicCheck(item.category_state),
                });
            });

            console.log(productCategoryList);
            return productCategoryList;
        })
        .catch((err) => {
            console.error(err);
            return null;
        });
    };

    const getProductDetailListForEnroll = async (productId, productCategoryId) => {
        return await instance.get(`/product/${productId}/category/${productCategoryId}/get`)
        .then((res) => {
            const data = res.data;
            const productDetailList = [];

            if (data === null) {
                return 'No data';
            }

            data.forEach((item) => {
                productDetailList.push({
                    productDetailId: item.product_detail_id,
                    productCategoryId: item.product_category_id,
                    productName: item.name,
                    productPrice: item.amount,
                    productStock: item.stock,
                    isDefault: item.default_state,
                });   
            });

            console.log(productDetailList);
            return productDetailList;
        })
        .catch((err) => {
            console.error(err);
            return null;
        });
    }
        

    return {
        getProductList,
        getProductDetailList,
        getProductCategoryList,
        getProductDetailListForEnroll
    };
}
