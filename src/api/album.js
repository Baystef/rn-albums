import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://rallycoding.herokuapp.com/api/',
});

export default instance;
