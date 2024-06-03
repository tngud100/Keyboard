import instance from '@/utils/axiosInstance.js';

const backendCall = (url) => {
    if (Array.isArray(url)) {
        return url.map(url => `http://localhost:8080${url.trim()}`);
    }
    return `http://localhost:8080${url}`
};

export const AskAPI = () => { 


    const getAskListByMemberId = async (memberId) => {
        return await instance.get(`/inquire/get/memberNum/${memberId}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
    }
    const getAskByInquireId = async (inquiresId) => {
        return await instance.get(`/inquire/get/inquireNum/${inquiresId}`)
            .then((res) => {
                const form = {
                    inquireType : res.data.inquire.inquire_type,
                    title : res.data.inquire.title,
                    content: res.data.inquire.content,
                    images: res.data.images.map((img) => {
                        return {
                            fileName: img.picture_name,
                            imgPath: backendCall(img.picture_path),
                        }
                    }),
                }
            return form;
        })
        .catch((err) => {
            return err;
        });
    }

    ///// 등록
    const enrollAsk = async (formData) => {
        return await instance.post('/inquire/enroll', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
    }
    const enrollAskPictures = async (imgFiles) => {
        return await instance.post('/inquire/pictures/enroll', imgFiles, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
    }

    const updateAsk = async (formData, inquires_id) => {
        return await instance.put(`/inquire/update/${inquires_id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
    }

    const updateAskPictures = async (formData, inquires_id) => {
        return await instance.put(`/inquire/update/pictures/${inquires_id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
    }

    const deleteAsk = async (inquires_id) => {
        return await instance.delete(`/inquire/delete/${inquires_id}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
    }

    return {
        getAskByInquireId,
        getAskListByMemberId,
        enrollAsk,
        enrollAskPictures,
        updateAsk,
        updateAskPictures,
        deleteAsk
    };
}
