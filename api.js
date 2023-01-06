import axios from 'axios';

const API_URL = 'http://10.10.18.154:8000/api';

const getArticle = () => {
    return axios.get(`${API_URL}/articles?page=1`)
    .then(res => {
    setData(res.data);
    })
    .catch(error => {
    console.log(error)
    })
}

module.exports = {
    getArticle
}