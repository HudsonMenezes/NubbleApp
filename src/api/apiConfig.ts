import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
  headers: {
    Authorization:
      'Bearer MQ.x16eIMurJ0ZbpzlhAWuvPgy4TXwgqqhyFj9DEFtZVA8OsksfB68DvzMMV0v4',
  },
});
