import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_API,

    timeout: 2000,

    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
});

instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    (resopnse) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default instance;
