import api from '../../src/UTILS/api';
import useFlashMessage from './useFlashMessage';

// const  useHistory = useHistory();

const useAuth = () => {
  
  const { setFlashMessage } = useFlashMessage()

  const register = async (user) => {

    let msgText = 'Congratulations! Your account has been successfully created!'
    let msgType = 'success'
    
    try {
      const response = await api.post('/users/register', user); // Use Axios post method
      console.log(response.data); // Access data from the response
    } catch (err) {
      
    msgText = err.response.data.message
    msgType = 'error'
    }

    setFlashMessage(msgText, msgType)
  }

  return { register };
}

export default useAuth;