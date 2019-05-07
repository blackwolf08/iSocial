import { FETCH_PHOTOS, FETCH_POSTS, FETCH_USERS } from './types'

export const fetchPhotos = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
    .then(response => response.json())
    .then(json => dispatch({
        type: FETCH_PHOTOS,
        payload: json
        })
    );
}

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(response => response.json())
    .then(json => dispatch({
        type: FETCH_POSTS,
        payload: json
        })
    );
}


export const fetchUsers = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => dispatch({
        type: FETCH_USERS,
        payload: json
        })
    );
}
