import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://social-media-mern-stack.herokuapp.com/api/',
});
