// utils/axiosInstance.js 파일에서 instance 가져오기
import instance from '@/utils/axiosInstance.js';
import { ref } from 'vue';

// getProductAPI 함수 정의
export const getProductAPI = () => {
    // productList와 productDetail을 ref로 생성
    const productList = ref([]);
    const productDetail = ref([]);

    // getProductList 함수 정의
    const getProductList = async () => {
        return instance.get('/product/get')
            .then((res) => {
                if (res.data === null) {
                    return 'No data';
                }
                Promise.all(res.data.map(async(item) => {
                    await getProductDetailList(item.product_id);
                    productList.value.push({
                        productId: item.product_id,
                        mainImg: item.main_picture,
                        representImg: item.represent_picture,
                        listImg: item.list_picture,
                        listBackImg: item.list_back_picture,
                        descImg: item.desc_picture,
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

    // getProductList와 getProductDetailList 함수 반환
    return { getProductList, getProductDetailList };
}
