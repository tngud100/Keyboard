import instance from '@/utils/axiosInstance.js';

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
            return res.data;
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

    const updateAsk = async (formData) => {
        return await instance.put(`/inquire/${inquires_id}`, formData, {
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
        return await instance.delete(`/inquire/${inquires_id}`)
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
        deleteAsk
    };
}
