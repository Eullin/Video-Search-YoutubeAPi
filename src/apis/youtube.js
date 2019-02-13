import axios from 'axios';
const KEY = "AIzaSyA3XLGyYViABwwbMZR9dAr6wGbjZUyDvPw";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: 5,
        key: KEY 
    }
})