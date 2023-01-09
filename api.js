import axios from 'axios';

const IP = '10.10.24.81'
const API_URL = `http://${IP}:8000/api`;

const getArticles = (callback) => {
    const page = 1;
    return axios.get(`${API_URL}/articles?page=${page}`)
        .then(res => {
            return callback(res.data);
        })
        .catch(error => {
            console.log(error)
            return callback(error)
        })
}

const getArticleById = (id, callback) => {
    return axios.get(`${API_URL}/article/${id}`)
        .then(res => {
            return callback(res.data);
        })
        .catch(error => {
            console.log(error)
            return callback(error)
        })
}
const setUser = (email, firstname, lastname, password) => {
    const data = {
        email: email,
        firstname: firstname,
        lastname: lastname,
        password: password
    }
    console.log(data)
    return axios.post(`${API_URL}/inscription`, data)
    .then(res => {
      return res.data;
    })
    .catch(error => {
        console.log(error)
    });
}
const login = (email, password, token) => {

}

module.exports = {
    getArticles,
    getArticleById,
    setUser,
    login,
}