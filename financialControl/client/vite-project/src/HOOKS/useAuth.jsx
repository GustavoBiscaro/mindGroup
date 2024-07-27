import api from '../UTILS/api';
import { useState, useEffect } from 'react';

export default function useAuth() {

  async function register(user) {
    try {
      const data = await api.post('/users/register', user);
      console.log(data);
    } catch (error) {
      console.error(error);
    }

  }

  return { register }
}