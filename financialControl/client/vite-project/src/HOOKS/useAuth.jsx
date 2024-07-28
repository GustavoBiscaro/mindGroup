import api from '../../src/UTILS/api';

// const  useHistory = useHistory();

const useAuth = () => {
  const register = async (user) => {
    try {
      const response = await api.post('/users/register', user); // Use Axios post method
      console.log(response.data); // Access data from the response
    } catch (err) {
      console.error(err);
    }
  }

  return { register };
}

export default useAuth;