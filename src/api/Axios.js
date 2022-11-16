import axios from 'axios';

export default axios.create({
  withCredentials: true,
  baseURL: 'https://e7e7-182-156-218-98.in.ngrok.io/',
});
