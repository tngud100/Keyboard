import instance from '@/utils/axiosInstance.js';
import axios from 'axios';

export const loginAPI = () => {

    const loginCheck = async (loginForm) => {
        return await axios.post('http://localhost:8080/login', loginForm
        )
        .then((res) => {
            const tokens = {
                authorization: res.headers.authorization,
                refreshToken: res.headers['refresh-token']
            };

            return tokens;
        })
            .catch((err) => {
            alert("로그인에 실패하였습니다.");
            return err;
        });
    };

    return { loginCheck };
}