import axios from '@/utils/axiosInstance.js';

export default class UploadAdapter {
    constructor(loader, url, imageUrls) {
        this.url = url;
        this.loader = loader;
        this.imageUrls = imageUrls;
        this.loader.file.then((pic) => (this.file = pic));

        this.upload();
    }

    // Starts the upload process.
    upload() {
        return this.loader.file.then((uploadedFile) => {
            return new Promise((resolve, reject) => {
                const formData = new FormData();
                formData.append('upload', uploadedFile);

                axios.post('/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((res) => {
                    const returnUrl = res.data.url;
                    this.imageUrls.push(returnUrl); 
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