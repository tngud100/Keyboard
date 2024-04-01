import instance from '@/utils/axiosInstance.js';

export const postProductAPI = () => {
    const enrollProduct = async (formData) => {
        await instance.post('/product/enroll', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                console.log(res);
                console.log("전송 성공");
            return res;
        })
        .catch((err) => {
            console.error(err);
            return null;
        });
    }

    const uploadImg = async (formData) => {
        await instance.post('/images/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                console.log(res);
                console.log("이미지 업로드 성공");
            return res;
        })
            .catch((err) => {
                console.error(err);
                return null;
        });
    }

    return { enrollProduct, uploadImg };
}