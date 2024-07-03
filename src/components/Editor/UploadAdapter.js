import axios from '@/utils/axiosInstance.js';

export default class UploadAdapter {
    constructor(loader, uplodedImageUrls) {
        this.loader = loader;
        this.uplodedImageUrls = uplodedImageUrls;
        this.loader.file.then((pic) => (this.file = pic));
    }

    // Starts the upload process.
    upload() {
        return this.loader.file.then((uploadedFile) => {
            return new Promise((resolve, reject) => {
                const formData = new FormData();
                formData.append('upload', uploadedFile);

                axios.post('/editor/imgUpload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((res) => {
                    const returnUrl = res.data.url;
                    this.uplodedImageUrls.push(returnUrl); 
                    console.log('Image URL added to uplodedImageUrls:', this.uplodedImageUrls); // 추가된 URL을 로그로 확인
                    resolve({
                         default: returnUrl,
                    });
                })
                .catch((error) => {
                    console.error('File upload failed:', error);
                    reject(error.response?.data?.message || 'Upload failed');
                });
            });
        });
    }
}