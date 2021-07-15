import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://app.fakejson.com/q',
});

export default instance;
