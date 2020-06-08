import axios from "axios";

const requests = axios.create({
    baseURL: "https://webdev-api.loftschool.com/"
});

const token = localStorage.getItem("token");

if (token) {
    requests.defaults.headers["Authorization"] = `Bearer ${token}`;
} else {
    console.warn("Отсутствует токен");
}

requests.interceptors.response.use(function (response) {
        console.log(response);
        return response;
    }, function (error) {
        if (error.response.status === 401) {
            return requests.post('/refreshToken').then(({data}) => {
                localStorage.setItem('token', data.token);
                requests.defaults.headers["Authorization"] = `Bearer ${data.token}`;
                error.config.headers["Authorization"] = `Bearer ${data.token}`;

                return requests(error.config);
            });
        }

        return Promise.reject(error);
    }
);

export default requests;
