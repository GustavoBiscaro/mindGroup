import api from '../../src/UTILS/api';
import useFlashMessage from './useFlashMessage';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const useAuth = () => {

  const [authenticated, setAuthenticated] = useState(false); 
  const navigate = useNavigate();
  const { setFlashMessage } = useFlashMessage()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
      setAuthenticated(true)
    }
  }, [])


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


  async function authUser(response) {
    setAuthenticated(true);
    localStorage.setItem('token', JSON.stringify(response.token));
    navigate('/'); // Correct usage of navigate
  }

  
  async function login(user) {
    let msgText = 'Login completed successfully!' // é declarado let para poder mudar de status de mensagem
    let msgType = 'success'

    try {

      const response = await api.post('/users/login', user)
      console.log(response.data);
      await authUser(response.data);

    } catch (err) {
      msgText = err.response.data.message
      msgType = 'error'
    }

    setFlashMessage(msgText, msgType);
  }



  function logout() {
    const msgText = 'Logout completed successfully!'
    const msgType = 'success'

    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    navigate('/')

    setFlashMessage(msgText, msgType);
  }

  return { authenticated, register, logout, login };
}

export default useAuth;