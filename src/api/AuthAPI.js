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

    const getUserDataByLoginId = async (LoginId) => {
        return await instance.get(`/getUser/${LoginId}`)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                alert("유저 정보를 불러오는데 실패하였습니다.");
                return err;
            });
    }

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
            return err;
        });
    }

    const phoneNumCheck = async (phoneNum) => {
        return await instance.post('/send', null,{
            params: {
                phoneNum: phoneNum
            }
        })
        .then((res) => {
            return res.data;
        })
            .catch((err) => {
            alert("인증번호 발송에 실패하였습니다.")
            return err;
        });
    }

    const verifyNumberCheck = async (phoneNum, verifyNum) => {
        return await instance.get('/verify', {
            params: {
                phoneNum: phoneNum,
                verifyNum: verifyNum
            }
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
            return "인증번호 확인에 실패하였습니다.";
        });
    }

    const signUp = async (signUpForm) => {
        return await instance.post('/signup', signUpForm, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                alert("회원가입에 실패하였습니다.");
                return err;
            });
    }

    return {
        loginCheck,
        getUserDataByLoginId,
        logout,
        isDuplicateId,
        phoneNumCheck,
        verifyNumberCheck,
        signUp,
    };
}