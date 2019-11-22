import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-c39f5.firebaseio.com/'
});

export default instance;

