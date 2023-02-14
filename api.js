import axios from 'axios';
import * as SecureStore from 'expo-secure-store'
import { Alert } from 'react-native';
const getJwtToken = async () => {
    const token = await SecureStore.getItemAsync('jwt');
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    else {
        delete api.defaults.headers.common['Authorization'];
    }
}
const api = axios.create({
    baseURL: 'https://mathieu-ruiz.students-laplateforme.io/app-mobile-forum/public/api/'
});

const request = async (method, url, data, callback) => {
    await getJwtToken();
    header = { 'Content-type': 'application/json', }
    if (method == "patch") {
        header = { 'Content-type': 'application/merge-patch+json' }
    }

    return api({
        method: method,
        url: url,
        data: data,
        headers: header
    }).then(res => {
        return callback(res);
    })
        .catch(error => {
            console.log(error.message)
            console.log(`Erreur ${error.response.data.code}`)
            console.log(error.response.data.message)
            if (error.response.data.message == 'Expired JWT Token') {
                SecureStore.deleteItemAsync('jwt').then(() => {
                })
                Alert.alert('Votre session a expiré', 'Veuillez vous re-connecter pour continuer', [
                    { text: 'OK', onPress: () => { } }
                ])
                return null
            }
            return callback(error.response)
        });
};

export const getArticles = (page, callback) => {
    request("get", `/articles?_page=${page}`, null, (res) => {
        return callback(res)
    });
}

export const getArticleById = (id, callback) => {
    request("get", `/article/${id}`, null, (res) => {
        return callback(res)
    });
}
export const postArticle = (title, content, callback) => {
    request("post", `/articlePost`, { title, content }, (res) => {
        return callback(res)
    });
}
export const patchArticle = (id, title, content, callback) => {
    request("patch", `/articleEdit/${id}`, { title, content }, (res) => {
        return callback(res)
    });
}
export const deleteArticle = (id, callback) => {
    request("delete", `/articleDelete/${id}`, null, (res) => {
        return callback(res)
    });
}
export const getMe = (callback) => {
    request("get", `/profileMe`, null, (res) => {
        return callback(res)
    });
}
export const getUsers = (page, callback) => {
    request("get", `/users?_page=${page}`, null, (res) => {
        return callback(res)
    });
}
export const getUserById = (id, callback) => {
    request("get", `/user/${id}`, null, (res) => {
        return callback(res)
    });
}
export const postUser = (email, firstname, lastname, password, callback) => {
    request("post", `/inscription`, { email, firstname, lastname, password }, (res) => {
        return callback(res)
    });
}

export const patchUser = (id, email, firstname, lastname, roles, callback) => {
    request("patch", `/userProfileEdit/${id}`, { email, firstname, lastname, roles }, (res) => {
        return callback(res)
    });
}
export const editUser = (id, email, firstname, lastname, password, callback) => {
    request("patch", `/userProfileEdit/${id}`, { email, firstname, lastname, password }, (res) => {

        return callback(res)
    });
}
export const deleteUser = (id, callback) => {
    request("delete", `/userDelete/${id}`, null, (res) => {
        return callback(res)
    });
}
export const getComments = (page, callback) => {
    request("get", `/comments?_page=${page}`, null, (res) => {
        return callback(res)
    });
}
export const getCommentsByArticle = (articleId, page, callback) => {
    request("get", `/comments/article/${articleId}?_page=${page}`, null, (res) => {
        return callback(res)
    });
}
export const getCommentById = (id, callback) => {
    request("get", `/comment/${id}`, null, (res) => {
        return callback(res)
    });
}
export const postComment = (articleId, content, callback) => {
    request("post", `/commentPost/article/${articleId}`, { content }, (res) => {
        return callback(res)
    });
}
export const patchComment = (id, content, callback) => {
    request("patch", `/commentEdit/${id}`, { content }, (res) => {
        return callback(res)
    });
}
export const deleteComment = (id, callback) => {
    request("delete", `/commentDelete/${id}`, null, (res) => {
        return callback(res)
    });
}
export const login = (email, password, callback) => {
    request("post", `/login_check`, { email, password }, (res) => {
        if (res.status == 200) {
            SecureStore.setItemAsync('jwt', res.data.token)
                .then(() => {
                    return callback(res);
                })
        }
        return callback(res)
    });
}