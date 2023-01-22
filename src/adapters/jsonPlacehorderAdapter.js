import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    // timeout: 3000,
});

// instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
// instance.defaults.headers.post['Content-type'] = 'application/json; charset=UTF-8';

instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response) {
        console.log('Error Response Data', error.response.data);
        console.log('Error Response Status', error.response.status);
        console.log('Error Response Headers', error.response.headers);
    } else if (error.request) {
        console.log('Error Request', error.request);
    } else {
        console.log('Error', error.message);
    }
    return Promise.reject(error);
});

export const getPosts = () => {
    return instance.get('/posts');
};
