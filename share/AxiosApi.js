import axios from "axios";
import qs from "query-string";

const AxiosInstance = axios.create({ baseURL: '' });

AxiosInstance.interceptors.request.use(function (config) {
    return config;
});

AxiosInstance.interceptors.response.use((response) => response, (error) => {
        return Promise.reject(errObj);
    }
);

/* Axios GET */
export const axiosGet = (url, param) => {
    return AxiosInstance.get(url + "?" + qs.stringify(param));
}

/* Axios POST */
export const axiosPost = (url, param) => {
    return AxiosInstance.post(url, param);
}

/* Axios PUT */
export const axiosPut = (url, param) => {
    return AxiosInstance.put(url, param);
}