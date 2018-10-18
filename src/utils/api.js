import axios from 'axios';
import Authentication from './Authentication';

if (Authentication.fetchToken()) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${Auth.fetchToken()}`;
}

instance.interceptors.request.use(
    function (setup) {
        if (setup.headers.common.Authorization) {
            if (!Authentication.cnpjValid()) { throw new axios.Cancel('Access token invalid') }
        }

        return setup;
    },
    function (invalid) {
        return Promise.reject(invalid);
    }
);
class Api {
    static get(uri) {
        return axios.get(`${BASE_URL}${uri}`);
    }

    static post(uri, data) {
        return axios.post(`${BASE_URL}${uri}`, data);
    }

    static put(uri, data) {
        return axios.put(`${BASE_URL}${uri}`, data);
    }

    static patch(uri, data) {
        return axios.patch(`${BASE_URL}${uri}`, data);
    }

    static delete(uri) {
        return axios.delete(`${BASE_URL}${uri}`);
    }
}

export default Api