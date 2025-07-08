import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
  headers: {
    Authorization:
      'Bearer MQ.HPrENbmofuue3eAHxhRAZXrQac6TrZJx7Aw8Y8dd8CjhBTA31KkNLumI9_dl',
  },
});
