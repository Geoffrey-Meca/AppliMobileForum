import axios from 'axios';

const IP = '10.10.25.2'
const API_URL = `http://${IP}:8000/api`;

const getArticles = (page, callback) => {
    return axios.get(`${API_URL}/articles?page=${page}`)
        .then(res => {
            console.log(res.data)
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
            console.log(res.data)
            return callback(res.data);
        })
        .catch(error => {
            console.log(error)
            return callback(error)
        })
}
const setArticle = (title, content, image, callback) => {
    const data = {
        title: title,
        content: content,
        image: image
    }
    return axios.post(`${API_URL}/articlePost`, data)
        .then(res => {
            console.log(res.status)
            return callback(res.status);
        })
        .catch(error => {
            console.log(error)
            return callback(error)
        });
}
const editArticle = (id, title, content, image, callback) => {
    const data = {
        title: title,
        content: content,
        image: image
    }
    return axios.patch(`${API_URL}/articleEdit/${id}`, data)
        .then(res => {
            console.log(res.status)
            return callback(res.status);
        })
        .catch(error => {
            console.log(error)
            return callback(error)
        });
}
const deleteArticle = (id, callback) => {
    return axios.delete(`${API_URL}/articleDelete/${id}`)
        .then(res => {
            console.log(res.status)
            return callback(res.status);
        })
        .catch(error => {
            console.log(error)
            return callback(error)
        });
}
const getMe = (token, callback) => {
    return axios.get(`${API_URL}/profileMe`)
        .then(res => {
            console.log(res.status)
            return callback(res.data);
        })
        .catch(error => {
            console.log(error)
            return callback(error)
        })
}
const getUsers = (page, callback) => {
    return axios.get(`${API_URL}/users?page=${page}`)
        .then(res => {
            console.log(res.data)
            return callback(res.data);
        })
        .catch(error => {
            console.log(error)
            return callback(error)
        })
}
const getUserById = (id, callback) => {
    return axios.get(`${API_URL}/user/${id}`)
        .then(res => {
            console.log(res.data)
            return callback(res.data);
        })
        .catch(error => {
            console.log(error)
            return callback(error)
        })
}
const setUser = (email, firstname, lastname, password, callback) => {
    const data = {
        email: email,
        firstname: firstname,
        lastname: lastname,
        password: password
    }
    return axios.post(`${API_URL}/inscription`, data)
        .then(res => {
            console.log(res.status)
            return callback(res.status);
        })
        .catch(error => {
            console.log(error)
            return callback(error)
        });
}
const editUser = (id, email, firstname, lastname, password, callback) => {
    const data = {
        email: email,
        firstname: firstname,
        lastname: lastname,
        password: password
    }
    return axios.patch(`${API_URL}/userProfileEdit/${id}`, data)
        .then(res => {
            console.log(res.status)
            return callback(res.status);
        })
        .catch(error => {
            console.log(error)
            return callback(error)
        });
}
const deleteUser = (id, callback) => {
    return axios.delete(`${API_URL}/userDelete/${id}`)
        .then(res => {
            console.log(res.status)
            return callback(res.status);
        })
        .catch(error => {
            console.log(error)
            return callback(error)
        });
}
const getComments = (page, callback) => {
    return axios.get(`${API_URL}/comments?page=${page}`)
        .then(res => {
            console.log(res.data)
            return callback(res.data);
        })
        .catch(error => {
            console.log(error)
            return callback(error)
        })
}
const getCommentById = (id, callback) => {
    return axios.get(`${API_URL}/comment/${id}`)
        .then(res => {
            console.log(res.data)
            return callback(res.data);
        })
        .catch(error => {
            console.log(error)
            return callback(error)
        })
}
const setComment = (articleId, content, callback) => {
    const data = {
        content: content,
    }
    return axios.post(`${API_URL}/commentPost/article/${articleId}`, data)
        .then(res => {
            console.log(res.status)
            return callback(res.status);
        })
        .catch(error => {
            console.log(error)
            return callback(error)
        });
}
const editComment = (id, content, callback) => {
    const data = {
        content: content,
    }
    return axios.patch(`${API_URL}/commentEdit/${articleId}`, data)
        .then(res => {
            console.log(res.status)
            return callback(res.status);
        })
        .catch(error => {
            console.log(error)
            return callback(error)
        });
}
const deleteComment = (id, callback) => {
    return axios.delete(`${API_URL}/commentDelete/${id}`)
        .then(res => {
            console.log(res.status)
            return callback(res.status);
        })
        .catch(error => {
            console.log(error)
            return callback(error)
        });
}
const login = (email, password, callback) => {
    const data = {
        email: email,
        password: password
    }
    return axios.post(`${API_URL}/login_check`, data)
    .then(res => {
        console.log(res.data.token)
        console.log(res.status)
        return callback(res.status);
    })
    .catch(error => {
        console.log(error)
        return callback(error)
    });
}

module.exports = {
    getArticles,
    getArticleById,
    setArticle,
    editArticle,
    deleteArticle,
    getMe,
    getUsers,
    getUserById,
    setUser,
    editUser,
    deleteUser,
    getComments,
    getCommentById,
    setComment,
    editComment,
    deleteComment,
    login,
}