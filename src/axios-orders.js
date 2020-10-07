import axios from "axios";

const instance = axios.create({
    baseURL: 'https://react-my-burger-ash.firebaseio.com/'
});

export default instance;