import api from '../../src/UTILS/api';
import useFlashMessage from './useFlashMessage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {

  const [authenticated, setAuthenticated] = useState(true); // Inicializando como true
  const navigate = useNavigate();
  const { setFlashMessage } = useFlashMessage()

  const register = async (user) => {

    let msgText = 'Congratulations! Your account has been successfully created!'
    let msgType = 'success'

    try {
      const response = await api.post('/users/register', user); // Use Axios post method
      console.log(response.data); // Access data from the response
      await authUser(response.data);
    } catch (err) {
      msgText = err.response.data.message
      msgType = 'error'
    }
    setFlashMessage(msgText, msgType)
  }
  async function authUser(data) {
    setAuthenticated(true);
    localStorage.setItem('token', JSON.stringify(data.token));
    navigate('/'); // Correct usage of navigate
  }
  return { register };
}

export default useAuth;