import axios from 'axios';

export default axios.create({
  withCredentials: true,
  baseURL: 'https://d28c-182-156-218-98.in.ngrok.io',
});
