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
    return callback(error)
    })
}
const getArticleById = (id) => {
    return axios.get(`${API_URL}/articles/${id}`)
    .then(res => {
    setArticleById(res.data);
    })
    .catch(error => {
    setArticleById(error)
    })
}

module.exports = {
    getArticles,
    getArticleById
}