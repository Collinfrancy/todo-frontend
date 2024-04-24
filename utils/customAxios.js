import axios from 'axios';
import React from 'react';

const customAxios = axios.create({
  baseURL: 'http://localhost:4444',
  timeout: 4000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export default customAxios;
