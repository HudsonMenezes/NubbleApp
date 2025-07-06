import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3333/',
  headers: {
    Authorization:
      'Bearer Mw.GdHtNGUzxlmSnY8UTxP5tNkf9gt0bimQSR8Cj2pJrg5cvwCC41SGdqvMqdsc',
  },
});
