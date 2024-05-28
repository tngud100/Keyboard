import instance from '@/utils/axiosInstance.js';
import axios from 'axios';

export const AskAPI = () => { 
    const getAskListByMemberId = async (memberId) => {
        return await instance.get(`/inquire/get/${memberId}`)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
    }
    const enrollAsk = async (formData) => {
        return await instance.post('/inquire/enroll', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((res) => {
            return res;
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
            return res;
        })
        .catch((err) => {
            return err;
        });
    }

    const deleteAsk = async (inquires_id) => {
        return await instance.delete(`/inquire/${inquires_id}`)
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        });
    }

    return {
        getAskListByMemberId,
        enrollAsk,
        updateAsk,
        deleteAsk
    };
}
