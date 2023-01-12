import axios from 'axios';
import * as SecureStore from 'expo-secure-store'

const getJwtToken = async () => {
    const token = await SecureStore.getItemAsync('jwt');
    if(token){
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
}
const api = axios.create({
    baseURL: 'https://rany-alo.students-laplateforme.io/app-mobile-forum/public/api',
    headers: {
        'Content-type': 'application/json'
    }
});

const request = async (method, url, data, callback) => {
    await getJwtToken();
    return api({
        method: method,
        url: url,
        data: data
    }).then(res => {
            return callback(res);
        })
    .catch(error => {
        console.log(`Erreur ${error.response.data.code}`)
        console.log(error.response.data.message)
        if(error.response.data.code == 401){
            SecureStore.deleteItemAsync('jwt')
            return callback('Token requis (W.I.P)')
        }
        return callback(error.response)
    });
};

const getArticles = (page, callback) => {
    request("get", `/articles?_page=${page}`, null, (res) => {
            return callback(res)
    });
}
const getArticleById = (id, callback) => {
    request("get", `/articles/${id}`, null, (res) => {
            return callback(res)
    });
}
const postArticle = (title, content, image, callback) => {
    request("post", `/articles`, {title, content, image}, (res) => {
        return callback(res)
    });
}
const patchArticle = (id, title, content, image, callback) => {
    request("patch", `/articles/${id}`, {title, content, image}, (res) => {
        return callback(res)
    });
}
const deleteArticle = (id, callback) => {
    request("delete", `/articleDelete/${id}`, null, (res) => {
        return callback(res)
    });
}
const getMe = (callback) => {
    request("get", `/profileMe`, null, (res) => {
        return callback(res)
    });
}
const getUsers = (page, callback) => {
    request("get", `/users?_page=${page}`, null, (res) => {
        return callback(res)
    });
}
const getUserById = (id, callback) => {
    request("get", `/user/${id}`, null, (res) => {
        return callback(res)
    });
}
const postUser = (email, firstname, lastname, password, callback) => {
    request("post", `/inscription`, {email, firstname, lastname, password}, (res) => {
        return callback(res)
    });
}
const patchUser = (id, email, firstname, lastname, password, callback) => {
    request("patch", `/userProfileEdit${id}`, {email, firstname, lastname, password}, (res) => {
        return callback(res)
    });
}
const deleteUser = (id, callback) => {
    request("delete", `/userDelete/${id}`, null, (res) => {
        return callback(res)
    });
}
const getComments = (page, callback) => {
    request("get", `/comments?_page=${page}`, null, (res) => {
        return callback(res)
    });
}
const getCommentById = (id, callback) => {
    request("get", `/comment/${id}`, null, (res) => {
        return callback(res)
    });
}
const postComment = (articleId, content, callback) => {
    request("post", `/commentPost/article/${articleId}`, {content}, (res) => {
        return callback(res)
    });
}
const patchComment = (id, content, callback) => {
    request("patch", `/commentEdit/${id}`, {content}, (res) => {
        return callback(res)
    });
}
const deleteComment = (id, callback) => {
    request("delete", `/commentDelete/${id}`, null, (res) => {
        return callback(res)
    });
}
const login = (email, password, callback) => {
    const data = {
        email: email,
        password: password
    }
    return axios.post(`https://rany-alo.students-laplateforme.io/app-mobile-forum/public/api/login_check`, data)
    .then(res => {
        SecureStore.setItemAsync('jwt', res.data.token)
        .then(() => {
            return callback(res);
        })
    })
    .catch(error => {
        return callback(error.response)
    });
}
module.exports = {
    getArticles,
    getArticleById,
    postArticle,
    patchArticle,
    deleteArticle,
    getMe,
    getUsers,
    getUserById,
    postUser,
    patchUser,
    deleteUser,
    getComments,
    getCommentById,
    postComment,
    patchComment,
    deleteComment,
    login,
}