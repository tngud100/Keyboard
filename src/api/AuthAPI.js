import instance from '@/utils/axiosInstance.js';
import axios from 'axios';

export const AuthAPI = () => {
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

    const logout = async (accessToken, refreshToken) => {
        return await instance.post('/logout', null, {
            headers: {
                "Authorization": accessToken,
                "Refresh-Token": refreshToken
            }
        })
            .then((res) => {
                console.log(res)
                // alert("로그아웃 되었습니다.");
                return true;
            })
            .catch((err) => {
                alert("로그아웃에 실패하였습니다.");
                return err;
            });
    };

    const isDuplicateId = async (Id) => {
        return await instance.get('/isIdDuplicateId', {
            params: { Id }
        })
        .then((res) => {
            return res.data;
        })
            .catch((err) => {
            alert
            return err;
        });
    }

    const phoneNumCheck = async (phoneNum) => {
        return await instance.get('/sentPhoneVerify', {
            params: { phoneNum }
        })
        .then((res) => {
            return res.data;
        })
            .catch((err) => {
            alert("전화번호 인증에 실패하였습니다.")
            return err;
        });
    }

    return { loginCheck, logout, isDuplicateId };
}